"use client";

import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  type AnalyzeWitnessStatementsOutput,
} from "@/ai/flows/analyze-witness-statements";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, PlusCircle, Trash2, Users } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const witnessSchema = z.object({
  witnessName: z.string().min(1, "Witness name is required."),
  statementText: z.string().min(10, "Statement is required."),
});

const formSchema = z.object({
  statements: z.array(witnessSchema),
});

export function WitnessAnalysisClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<AnalyzeWitnessStatementsOutput | null>(
    null
  );
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      statements: [{ witnessName: "", statementText: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "statements",
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await fetch('/api/analyze-witness-statements', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze statements.');
      }
      
      const resultData = await response.json();
      setResults(resultData);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not analyze statements. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <Card>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle>Witness Statements</CardTitle>
              <CardDescription>
                Add or remove witness statements for analysis.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {fields.map((field, index) => (
                <div
                  key={field.id}
                  className="rounded-lg border bg-card p-4 space-y-4 relative"
                >
                  <FormField
                    control={form.control}
                    name={`statements.${index}.witnessName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Witness Name</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Jane Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`statements.${index}.statementText`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Statement</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Enter the full witness statement here..."
                            className="min-h-[80px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {fields.length > 1 && (
                    <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="absolute top-2 right-2 text-muted-foreground hover:text-destructive"
                        onClick={() => remove(index)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                   )}
                </div>
              ))}
              <Button
                type="button"
                variant="outline"
                onClick={() =>
                  append({ witnessName: "", statementText: "" })
                }
              >
                <PlusCircle className="mr-2 h-4 w-4" /> Add Witness
              </Button>
            </CardContent>
            <CardFooter>
              <Button type="submit" disabled={isLoading}>
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Analyze Statements
              </Button>            
            </CardFooter>
          </form>
        </Form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
          <CardDescription>
            AI-powered breakdown of each witness statement.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">
                AI is processing statements...
              </p>
            </div>
          )}

          {!isLoading && !results && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <Users className="h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                Results will be displayed here after analysis.
              </p>
            </div>
          )}
          
          {results && (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[150px]">Witness</TableHead>
                    <TableHead>Summary</TableHead>
                    <TableHead>Emotion</TableHead>
                    <TableHead className="w-[200px]">Deception Score</TableHead>
                    <TableHead>Key Inconsistencies</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {results.map((result) => (
                    <TableRow key={result.witnessName}>
                      <TableCell className="font-medium">
                        {result.witnessName}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">{result.statementSummary}</TableCell>
                      <TableCell>
                         <Badge variant="outline">{result.emotionScore}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                           <Progress value={result.deceptionScore * 100} className="w-full" />
                           <span>{(result.deceptionScore * 100).toFixed(0)}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        {result.keyInconsistencies.length > 0 ? (
                           <ul className="list-disc pl-5 space-y-1 text-sm text-destructive/80">
                                {result.keyInconsistencies.map((item, index) => <li key={index}>{item}</li>)}
                           </ul>
                        ) : (
                            <span className="text-sm text-muted-foreground">None detected</span>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

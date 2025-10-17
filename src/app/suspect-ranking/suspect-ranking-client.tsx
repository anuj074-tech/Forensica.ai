"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { type RankSuspectsOutput } from "@/ai/flows/rank-suspects-by-motive";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
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
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, UserCheck, UserX } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const formSchema = z.object({
  crimeDescription: z.string().min(10, "Crime description is required."),
  suspectList: z.string().min(10, "Suspect list is required."),
  victimInformation: z.string().min(10, "Victim information is required."),
  relationalData: z.string().min(10, "Relational data is required."),
});

export function SuspectRankingClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<RankSuspectsOutput | null>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      crimeDescription: "",
      suspectList: "",
      victimInformation: "",
      relationalData: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResults(null);
    try {
      const response = await fetch('/api/rank-suspects-by-motive', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to rank suspects.');
      }
      
      const resultData = await response.json();
      setResults(resultData);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not rank suspects. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Case Information</CardTitle>
          <CardDescription>
            Provide all available data to get the most accurate ranking.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="crimeDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Crime Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the crime scene, victim, and location..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="suspectList"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Suspect List</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="List potential suspects and their details..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="victimInformation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Victim Information</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Provide details about the victim's relationships, enemies, etc..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="relationalData"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Relational Data & Social Graphs</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe relationships, motives, and prior incidents..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Rank Suspects
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
          <CardDescription>
            Suspects are ranked based on the provided data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">
                AI is analyzing the data...
              </p>
            </div>
          )}

          {!isLoading && !results && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <UserX className="h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                Results will be displayed here after analysis.
              </p>
            </div>
          )}

          {results && (
            <div className="space-y-4">
              {results.sort((a,b) => a.rank - b.rank).map((result) => (
                <Card key={result.suspectName} className="shadow-md">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{result.suspectName}</CardTitle>
                        <CardDescription>
                          AI-generated assessment
                        </CardDescription>
                      </div>
                       <Badge variant={result.rank === 1 ? "destructive" : "secondary"}>
                        Rank #{result.rank}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Reasoning:</span>{" "}
                      {result.reason}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

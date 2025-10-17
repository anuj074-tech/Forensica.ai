"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  type InferWeaponUsageOutput,
} from "@/ai/flows/infer-weapon-usage";
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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2, FlaskConical, HelpCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import Image from 'next/image';

const formSchema = z.object({
  woundDescription: z.string().min(10, "Wound description is required."),
  sceneDescription: z.string().min(10, "Scene description is required."),
  victimDescription: z.string().min(10, "Victim description is required."),
  weaponMarkImage: z.any().optional(),
});

// Helper to convert file to base64
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export function WeaponInferenceClient() {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<InferWeaponUsageOutput | null>(null);
  const { toast } = useToast();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      woundDescription: "",
      sceneDescription: "",
      victimDescription: "",
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
      form.setValue('weaponMarkImage', file);
    } else {
      setImagePreview(null);
      form.setValue('weaponMarkImage', null);
    }
  };


  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setResults(null);
    try {
      let weaponMarkDataUri: string | undefined = undefined;
      if (values.weaponMarkImage) {
        weaponMarkDataUri = await toBase64(values.weaponMarkImage);
      }
      
      const payload = {
        ...values,
        weaponMarkDataUri,
      }

      const response = await fetch('/api/infer-weapon-usage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to infer weapon usage');
      }

      const resultData = await response.json();
      setResults(resultData);
    } catch (error) {
      console.error(error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "Could not infer weapon usage. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Forensic Details</CardTitle>
          <CardDescription>
            Provide detailed descriptions for an accurate weapon profile.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="woundDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Wound Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe wound size, shape, depth, and location..."
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
                name="sceneDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Scene Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the crime scene, including spatter, signs of struggle..."
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
                name="victimDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Victim Description</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe the victim's state, clothing, and any defensive wounds..."
                        className="min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel>Weapon Mark Image (Optional)</FormLabel>
                <FormControl>
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                  />
                </FormControl>
                <FormDescription>
                  Upload an image of any potential weapon marks found.
                </FormDescription>
                <FormMessage />
              </FormItem>

               {imagePreview && (
                <div className="relative mt-4 aspect-video w-full">
                  <Image
                    src={imagePreview}
                    alt="Weapon mark preview"
                    fill
                    className="rounded-md object-contain"
                  />
                </div>
              )}

              <Button type="submit" disabled={isLoading} className="w-full">
                {isLoading && (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                )}
                Infer Weapon
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Inference Results</CardTitle>
          <CardDescription>
            Probable weapon profile based on the provided forensic data.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary" />
              <p className="text-muted-foreground">
                AI is running forensic analysis...
              </p>
            </div>
          )}

          {!isLoading && !results && (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-lg border border-dashed p-8 text-center">
              <HelpCircle className="h-12 w-12 text-muted-foreground" />
              <p className="text-muted-foreground">
                Weapon profile will be displayed here.
              </p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Confidence Score</h3>
                <div className="flex items-center gap-2">
                  <Progress value={results.confidence * 100} className="w-full" />
                  <span className="font-bold">{(results.confidence * 100).toFixed(0)}%</span>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                 <Card className="bg-secondary/50">
                    <CardHeader className="pb-2">
                        <CardDescription>WEAPON CLASS</CardDescription>
                        <CardTitle className="text-xl">{results.weaponClass}</CardTitle>
                    </CardHeader>
                </Card>
                 <Card className="bg-secondary/50">
                    <CardHeader className="pb-2">
                        <CardDescription>FEATURES</CardDescription>
                        <CardTitle className="text-xl">{results.weaponFeatures}</CardTitle>
                    </CardHeader>
                </Card>
              </div>
              <div>
                <h3 className="font-semibold">Reasoning</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {results.reasoning}
                </p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

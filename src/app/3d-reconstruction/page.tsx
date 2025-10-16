
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, FileImage } from "lucide-react";
import { reconstructCrimeScene3D, type ReconstructCrimeScene3DOutput } from "@/ai/flows/reconstruct-crime-scene-3d";

type Step = "upload" | "processing" | "analysis";

const toDataURI = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function ReconstructionPage() {
  const [step, setStep] = useState<Step>("upload");
  const [isPending, startTransition] = useTransition();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<ReconstructCrimeScene3DOutput | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImageFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreview(null);
    }
  };

  const handleAnalyzeImage = () => {
    if (!imageFile) return;

    startTransition(async () => {
      setStep("processing");
      const mediaDataUri = await toDataURI(imageFile);
      const output = await reconstructCrimeScene3D({ mediaDataUri });
      setAnalysis(output);
      setStep("analysis");
    });
  };

  const handleStartOver = () => {
    setStep('upload');
    setImageFile(null);
    setImagePreview(null);
    setAnalysis(null);
  };
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="3D Crime Scene Reconstruction" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-2xl">
          {step === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle>Reconstruct Scene from Image</CardTitle>
                <CardDescription>
                  Upload a crime scene photo. The AI will generate a textual description of the 3D space.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="crime-scene-image"><FileImage className="inline mr-2" /> Crime Scene Photo</Label>
                  <Input 
                    id="crime-scene-image" 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                {imagePreview && (
                  <div className="border rounded-md p-2">
                    <Image src={imagePreview} alt="Crime scene preview" width={800} height={600} className="w-full h-auto rounded-md" />
                  </div>
                )}
                <Button onClick={handleAnalyzeImage} disabled={!imageFile || isPending} className="w-full">
                  {isPending && <Loader className="animate-spin mr-2" />}
                  Reconstruct Scene
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "processing" && (
            <div className="text-center">
              <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">AI Analysis in Progress...</h2>
              <p className="mt-2 text-muted-foreground">
                Veritas AI is analyzing the image and reconstructing the spatial layout.
              </p>
            </div>
          )}

          {step === "analysis" && analysis && (
             <Card>
              <CardHeader>
                <CardTitle>3D Scene Reconstruction Report</CardTitle>
                <CardDescription>
                  A descriptive analysis of the scene's spatial characteristics.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {imagePreview && (
                    <div className="relative border rounded-md p-2">
                        <Image src={imagePreview} alt="Analyzed crime scene" width={800} height={600} className="w-full h-auto rounded-md" />
                        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                            <p className="text-white font-bold text-2xl">3D View (Conceptual)</p>
                        </div>
                    </div>
                )}
                <div>
                  <h3 className="font-semibold text-lg mb-2">Scene Description</h3>
                  <p className="text-muted-foreground whitespace-pre-wrap">{analysis.sceneDescription}</p>
                </div>
                <Button onClick={handleStartOver} className="w-full" variant="outline">
                  Reconstruct Another Scene
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

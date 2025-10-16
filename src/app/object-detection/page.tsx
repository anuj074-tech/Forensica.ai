
"use client";

import { useState, useTransition, useCallback } from "react";
import Image from "next/image";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, FileImage } from "lucide-react";
import { detectIdentifyObjects, type DetectIdentifyObjectsOutput } from "@/ai/flows/detect-identify-objects";
import { Badge } from "@/components/ui/badge";

type Step = "upload" | "processing" | "analysis";

const toDataURI = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function ObjectDetectionPage() {
  const [step, setStep] = useState<Step>("upload");
  const [isPending, startTransition] = useTransition();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<DetectIdentifyObjectsOutput | null>(null);

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
      const photoDataUri = await toDataURI(imageFile);
      const output = await detectIdentifyObjects({ photoDataUri });
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
  
  const getConfidenceColor = (confidence: number) => {
    if (confidence > 0.8) return 'bg-green-500';
    if (confidence > 0.5) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Object Detection & Identification" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-4xl">
          {step === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle>Detect Objects in Scene</CardTitle>
                <CardDescription>
                  Upload a crime scene photo. The AI will identify objects of interest.
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
                  Identify Objects
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "processing" && (
            <div className="text-center">
              <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">AI Analysis in Progress...</h2>
              <p className="mt-2 text-muted-foreground">
                Veritas AI is scanning the image for objects of interest.
              </p>
            </div>
          )}

          {step === "analysis" && analysis && (
             <Card>
              <CardHeader>
                <CardTitle>Object Detection Report</CardTitle>
                <CardDescription>
                  The following objects were identified in the provided image.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="w-full md:w-1/2">
                        {imagePreview && <Image src={imagePreview} alt="Analyzed crime scene" width={800} height={600} className="rounded-md w-full h-auto" />}
                    </div>
                    <div className="w-full md:w-1/2 space-y-4">
                        {analysis.length > 0 ? (
                            analysis.map((obj, i) => (
                                <Card key={i}>
                                    <CardHeader>
                                        <CardTitle className="flex justify-between items-center text-lg">
                                            <span>{obj.name}</span>
                                            <Badge variant="secondary" className="font-mono">{obj.confidence.toFixed(2)}</Badge>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-sm text-muted-foreground">{obj.description}</p>
                                        <div className="w-full bg-muted rounded-full h-2.5 mt-2">
                                          <div className={`h-2.5 rounded-full ${getConfidenceColor(obj.confidence)}`} style={{width: `${obj.confidence * 100}%`}}></div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))
                        ) : <p className="text-muted-foreground">No significant objects were identified.</p>}
                    </div>
                </div>

                <Button onClick={handleStartOver} className="w-full" variant="outline">
                  Analyze Another Image
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

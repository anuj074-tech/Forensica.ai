
"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader, FileImage, Droplets } from "lucide-react";
import { analyzeBloodstainPatterns, type AnalyzeBloodstainPatternsOutput } from "@/ai/flows/analyze-bloodstain-patterns";
import { Textarea } from "@/components/ui/textarea";

type Step = "upload" | "processing" | "analysis";

const toDataURI = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export default function ForensicAnalysisPage() {
  const [step, setStep] = useState<Step>("upload");
  const [isPending, startTransition] = useTransition();

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [additionalContext, setAdditionalContext] = useState("");
  const [analysis, setAnalysis] = useState<AnalyzeBloodstainPatternsOutput | null>(null);

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
      const output = await analyzeBloodstainPatterns({ photoDataUri, additionalContext });
      setAnalysis(output);
      setStep("analysis");
    });
  };

  const handleStartOver = () => {
    setStep('upload');
    setImageFile(null);
    setImagePreview(null);
    setAnalysis(null);
    setAdditionalContext("");
  };
  
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Forensic Analysis: Bloodstain Patterns" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-2xl">
          {step === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle>Analyze Bloodstain Patterns</CardTitle>
                <CardDescription>
                  Upload a photo of a bloodstain pattern. The AI will infer weapon type and trajectory.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="bloodstain-image"><Droplets className="inline mr-2" /> Bloodstain Photo</Label>
                  <Input 
                    id="bloodstain-image" 
                    type="file" 
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
                 <div className="grid gap-2">
                  <Label htmlFor="additional-context">Additional Context (Optional)</Label>
                  <Textarea
                    id="additional-context"
                    placeholder="e.g., victim position, surface type..."
                    value={additionalContext}
                    onChange={(e) => setAdditionalContext(e.target.value)}
                    rows={3}
                  />
                </div>
                {imagePreview && (
                  <div className="border rounded-md p-2">
                    <Image src={imagePreview} alt="Bloodstain preview" width={800} height={600} className="w-full h-auto rounded-md" />
                  </div>
                )}
                <Button onClick={handleAnalyzeImage} disabled={!imageFile || isPending} className="w-full">
                  {isPending && <Loader className="animate-spin mr-2" />}
                  Analyze Pattern
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "processing" && (
            <div className="text-center">
              <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">AI Analysis in Progress...</h2>
              <p className="mt-2 text-muted-foreground">
                Veritas AI is performing forensic analysis on the bloodstain pattern.
              </p>
            </div>
          )}

          {step === "analysis" && analysis && (
             <Card>
              <CardHeader>
                <CardTitle>Bloodstain Pattern Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {imagePreview && (
                    <div className="border rounded-md p-2">
                        <Image src={imagePreview} alt="Analyzed bloodstain" width={800} height={600} className="w-full h-auto rounded-md" />
                    </div>
                )}
                <div className="grid gap-4">
                    <div>
                        <h3 className="font-semibold text-lg">Probable Weapon Type</h3>
                        <p className="text-muted-foreground">{analysis.weaponType}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Inferred Trajectory</h3>
                        <p className="text-muted-foreground">{analysis.trajectory}</p>
                    </div>
                    {analysis.additionalNotes && (
                        <div>
                            <h3 className="font-semibold text-lg">Additional Notes</h3>
                            <p className="text-muted-foreground">{analysis.additionalNotes}</p>
                        </div>
                    )}
                </div>
                <Button onClick={handleStartOver} className="w-full" variant="outline">
                  Analyze Another Pattern
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

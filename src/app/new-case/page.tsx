
// src/app/new-case/page.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader, FileImage, FileText, Upload } from "lucide-react";

export default function NewCasePage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [sceneImages, setSceneImages] = useState<File[]>([]);
  const [bloodstainImages, setBloodstainImages] = useState<File[]>([]);
  const [witnessStatements, setWitnessStatements] = useState("");

  const handleFileChange = (setter: React.Dispatch<React.SetStateAction<File[]>>) => (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setter(Array.from(e.target.files));
    }
  };

  const canProceed = sceneImages.length > 0 || bloodstainImages.length > 0 || witnessStatements.trim() !== "";

  const handleGenerateReport = () => {
    if (!canProceed) return;

    startTransition(() => {
        // Here you would typically process the files and send them to your backend/AI flows.
        // The data would be stored, and you'd get a case ID.
        const caseId = `case_${Date.now()}`;
        
        // For this simulation, we'll store the data in localStorage
        // so the report page can access it.
        const toDataURL = (file: File) => new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result as string);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });

        Promise.all([
            ...sceneImages.map(toDataURL),
            ...bloodstainImages.map(toDataURL)
        ]).then(files => {
            const caseData = {
                sceneImages: files.slice(0, sceneImages.length),
                bloodstainImages: files.slice(sceneImages.length),
                witnessStatements,
            };
            localStorage.setItem(caseId, JSON.stringify(caseData));
            router.push(`/case/${caseId}/processing`);
        });
    });
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Create New Case File" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Step 1: Upload Evidence</CardTitle>
              <CardDescription>
                Upload all available evidence for the case. The AI will process these files to build a comprehensive report.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Scene Images */}
                <div className="space-y-2">
                  <Label htmlFor="scene-images"><FileImage className="inline mr-2" /> Scene Photos/Videos</Label>
                  <Input 
                    id="scene-images" 
                    type="file" 
                    accept="image/*,video/*"
                    multiple
                    onChange={handleFileChange(setSceneImages)}
                  />
                  <p className="text-xs text-muted-foreground">{sceneImages.length} file(s) selected.</p>
                </div>
                
                {/* Bloodstain Pattern Images */}
                <div className="space-y-2">
                  <Label htmlFor="bloodstain-images"><FileImage className="inline mr-2" /> Bloodstain Pattern Photos</Label>
                  <Input 
                    id="bloodstain-images" 
                    type="file" 
                    accept="image/*"
                    multiple
                    onChange={handleFileChange(setBloodstainImages)}
                  />
                   <p className="text-xs text-muted-foreground">{bloodstainImages.length} file(s) selected.</p>
                </div>
              </div>
              
              {/* Witness Statements */}
              <div className="space-y-2">
                <Label htmlFor="witness-statements"><FileText className="inline mr-2" /> Witness Statements</Label>
                <Textarea
                  id="witness-statements"
                  placeholder="Paste or type witness statements here. Separate multiple statements with a clear divider (e.g., '---STATEMENT 2---')."
                  value={witnessStatements}
                  onChange={(e) => setWitnessStatements(e.target.value)}
                  rows={12}
                  className="text-sm"
                />
              </div>

              <Button onClick={handleGenerateReport} disabled={!canProceed || isPending} className="w-full" size="lg">
                {isPending ? <Loader className="animate-spin mr-2" /> : <Upload className="mr-2" />}
                Upload and Begin Analysis
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

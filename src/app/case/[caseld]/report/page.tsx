
"use client";

import { useState, useEffect, useTransition } from "react";
import Image from "next/image";
import { useParams, useRouter } from 'next/navigation';
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Loader, AlertTriangle, RefreshCw, FileImage, FileText, BrainCircuit, Scan, Mic, BarChart3, Bot, Download } from "lucide-react";
import { analyzeWitnessStatements, type AnalyzeWitnessStatementsOutput } from "@/ai/flows/analyze-witness-statements";
import { reconstructCrimeScene3D, type ReconstructCrimeScene3DOutput } from "@/ai/flows/reconstruct-crime-scene-3d";
import { detectIdentifyObjects, type DetectIdentifyObjectsOutput } from "@/ai/flows/detect-identify-objects";
import { analyzeBloodstainPatterns, type AnalyzeBloodstainPatternsOutput } from "@/ai/flows/analyze-bloodstain-patterns";
import { generateInvestigativeReport, type GenerateInvestigativeReportOutput } from "@/ai/flows/generate-investigative-report";

type CaseData = {
  sceneImages: string[];
  bloodstainImages: string[];
  witnessStatements: string;
};

type AnalysisOutputs = {
  statementAnalysis?: AnalyzeWitnessStatementsOutput;
  sceneReconstruction?: ReconstructCrimeScene3DOutput;
  objectDetection?: DetectIdentifyObjectsOutput;
  bloodstainAnalysis?: AnalyzeBloodstainPatternsOutput;
  finalReport?: GenerateInvestigativeReportOutput;
};

export default function ReportPage() {
  const router = useRouter();
  const params = useParams();
  const caseId = params.caseId as string;

  const [isPending, startTransition] = useTransition();
  const [caseData, setCaseData] = useState<CaseData | null>(null);
  const [analysis, setAnalysis] = useState<AnalysisOutputs | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const data = localStorage.getItem(caseId);
    if (data) {
      const parsedData: CaseData = JSON.parse(data);
      setCaseData(parsedData);
      runAnalysis(parsedData);
    } else {
      setError("Case data not found. It may have expired.");
    }
  }, [caseId]);

  const runAnalysis = (data: CaseData) => {
    startTransition(async () => {
      try {
        const results: AnalysisOutputs = {};

        if (data.witnessStatements) {
          results.statementAnalysis = await analyzeWitnessStatements({ statement: data.witnessStatements });
        }
        if (data.sceneImages.length > 0) {
          results.sceneReconstruction = await reconstructCrimeScene3D({ mediaDataUri: data.sceneImages[0] });
          results.objectDetection = await detectIdentifyObjects({ photoDataUri: data.sceneImages[0] });
        }
        if (data.bloodstainImages.length > 0) {
          results.bloodstainAnalysis = await analyzeBloodstainPatterns({ photoDataUri: data.bloodstainImages[0] });
        }

        // Generate final report text
        const finalReportInput = {
            evidenceSummary: `
- Scene Images: ${data.sceneImages.length}
- Bloodstain Images: ${data.bloodstainImages.length}
- Witness Statements: ${data.witnessStatements ? 'Provided' : 'None'}
            `.trim(),
            aiReasoning: `
- 3D Reconstruction: ${results.sceneReconstruction?.sceneDescription || 'N/A'}
- Object Detection: Found ${results.objectDetection?.length || 0} objects.
- Statement Analysis: ${results.statementAnalysis?.summary || 'N/A'}
- Bloodstain Analysis: ${results.bloodstainAnalysis ? `Weapon: ${results.bloodstainAnalysis.weaponType}` : 'N/A'}
            `.trim(),
            confidenceScores: `Deception Score: ${results.statementAnalysis?.deceptionScore?.toFixed(2) || 'N/A'}`,
            suspectRankings: "Suspect ranking not yet implemented in this MVP.",
            escapeRoutes: "Escape route analysis not yet implemented in this MVP."
        };

        results.finalReport = await generateInvestigativeReport(finalReportInput);

        setAnalysis(results);
      } catch (e) {
        console.error(e);
        setError("An error occurred during AI analysis. Please try again.");
      }
    });
  };

  const handlePrint = () => {
    window.print();
  };
  
  if (error) {
     return (
        <div className="flex min-h-screen w-full flex-col">
            <MainHeader title={`Error in Case: ${caseId}`} />
            <main className="flex-1 p-4 md:p-8 flex items-center justify-center text-center">
                 <Card className="w-full max-w-lg border-destructive">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><AlertTriangle className="text-destructive"/> Analysis Failed</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-4">{error}</p>
                        <Button onClick={() => router.push('/new-case')}><RefreshCw className="mr-2"/> Start New Case</Button>
                    </CardContent>
                </Card>
            </main>
        </div>
     )
  }

  if (isPending || !analysis) {
    return (
        <div className="flex min-h-screen w-full flex-col">
            <MainHeader title={`Generating Report for Case: ${caseId}`} />
            <main className="flex flex-1 items-center justify-center p-4 text-center">
                <div>
                    <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <h1 className="mt-8 text-3xl font-headline font-bold">Generating Final Report...</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Compiling analyses into a unified investigative report.
                    </p>
                </div>
            </main>
        </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title={`Investigative Report: ${caseId}`} />
      <main className="flex-1 p-4 md:p-8">
        <div className="grid gap-8" id="report-content">
            {/* Final Summary */}
            <Card className="bg-primary/5">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl"><Bot />Veritas AI Executive Summary</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="whitespace-pre-wrap font-code">{analysis.finalReport?.report}</p>
                </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 {/* Scene Reconstruction */}
                {analysis.sceneReconstruction && caseData?.sceneImages[0] && (
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2"><Scan/>3D Scene Reconstruction</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Image src={caseData.sceneImages[0]} alt="Scene" width={800} height={600} className="w-full h-auto rounded-md" />
                            <p className="text-sm text-muted-foreground">{analysis.sceneReconstruction.sceneDescription}</p>
                        </CardContent>
                    </Card>
                )}

                {/* Object Detection */}
                {analysis.objectDetection && caseData?.sceneImages[0] &&(
                     <Card>
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><FileImage/>Object Detection</CardTitle>
                             <CardDescription>{analysis.objectDetection.length} objects identified.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-2">
                             {analysis.objectDetection.map((obj, i) => (
                                <div key={i} className="text-sm border-b pb-2">
                                    <div className="flex justify-between">
                                        <p className="font-semibold">{obj.name}</p>
                                        <Badge variant="secondary">{obj.confidence.toFixed(2)}</Badge>
                                    </div>
                                    <p className="text-muted-foreground">{obj.description}</p>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                )}

                {/* Bloodstain Analysis */}
                {analysis.bloodstainAnalysis && caseData?.bloodstainImages[0] && (
                     <Card>
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><BarChart3/>Bloodstain Pattern Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <Image src={caseData.bloodstainImages[0]} alt="Bloodstain" width={800} height={600} className="w-full h-auto rounded-md" />
                             <div>
                                <h4 className="font-semibold">Weapon Type</h4>
                                <p className="text-muted-foreground">{analysis.bloodstainAnalysis.weaponType}</p>
                            </div>
                             <div>
                                <h4 className="font-semibold">Trajectory</h4>
                                <p className="text-muted-foreground">{analysis.bloodstainAnalysis.trajectory}</p>
                            </div>
                        </CardContent>
                    </Card>
                )}

                 {/* Statement Analysis */}
                {analysis.statementAnalysis && (
                    <Card className="lg:col-span-3">
                        <CardHeader>
                             <CardTitle className="flex items-center gap-2"><Mic/>Witness Statement Analysis</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="font-semibold">Summary: <span className="font-normal text-muted-foreground">{analysis.statementAnalysis.summary}</span></p>
                            <div className="flex items-baseline gap-4">
                                <h4 className="font-semibold">Deception Score:</h4>
                                <p className="text-2xl font-bold text-primary">{analysis.statementAnalysis.deceptionScore.toFixed(2)}</p>
                            </div>
                            <div>
                               <h4 className="font-semibold">Key Entities:</h4>
                               <div className="flex flex-wrap gap-2 mt-2">
                                {analysis.statementAnalysis.entities.map((e,i) => <Badge key={i} variant="outline">{e}</Badge>)}
                               </div>
                            </div>
                            <div>
                               <h4 className="font-semibold">Potential Contradictions:</h4>
                               <ul className="list-disc list-inside text-muted-foreground mt-2">
                                {analysis.statementAnalysis.contradictions.map((c,i) => <li key={i}>{c}</li>)}
                               </ul>
                            </div>
                        </CardContent>
                    </Card>
                )}

            </div>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 print-hidden">
                <Button onClick={handlePrint} variant="outline" className="w-full sm:w-auto">
                    <Download className="mr-2"/>Export to PDF
                </Button>
                <Button onClick={() => router.push('/new-case')} className="w-full sm:w-auto">
                    <RefreshCw className="mr-2"/>Start a New Case Analysis
                </Button>
            </div>
        </div>
      </main>
    </div>
  );
}

    

"use client";

import { useState, useTransition } from "react";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Loader } from "lucide-react";
import { generateInvestigativeReport } from "@/ai/flows/generate-investigative-report";
import { Label } from "@/components/ui/label";

type Step = "upload" | "processing" | "report";

export default function ReportGeneratorPage() {
  const [step, setStep] = useState<Step>("upload");
  const [isPending, startTransition] = useTransition();
  const [report, setReport] = useState<string | null>(null);

  const [evidenceSummary, setEvidenceSummary] = useState("");
  const [aiReasoning, setAiReasoning] = useState("");
  const [confidenceScores, setConfidenceScores] = useState("");
  const [suspectRankings, setSuspectRankings] = useState("");
  const [escapeRoutes, setEscapeRoutes] = useState("");

  const handleGenerateReport = () => {
    startTransition(async () => {
      setStep("processing");
      
      const reportOutput = await generateInvestigativeReport({
        evidenceSummary,
        aiReasoning,
        confidenceScores,
        suspectRankings,
        escapeRoutes,
      });

      setReport(reportOutput.report);
      setStep("report");
    });
  };

  const handleStartOver = () => {
    setStep('upload');
    setEvidenceSummary("");
    setAiReasoning("");
    setConfidenceScores("");
    setSuspectRankings("");
    setEscapeRoutes("");
    setReport(null);
  };
  
  const isFormValid = evidenceSummary || aiReasoning || confidenceScores || suspectRankings || escapeRoutes;

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Investigative Report Generator" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-4xl">
          {step === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle>Generate Investigative Report</CardTitle>
                <CardDescription>
                  Provide summaries from other analyses. The AI will compile them into a final report. This can be automated in future versions.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="evidence-summary">Evidence Summary</Label>
                    <Textarea id="evidence-summary" value={evidenceSummary} onChange={e => setEvidenceSummary(e.target.value)} placeholder="Summary of physical and digital evidence..." rows={5} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="ai-reasoning">AI Reasoning</Label>
                    <Textarea id="ai-reasoning" value={aiReasoning} onChange={e => setAiReasoning(e.target.value)} placeholder="Explain the AI's analysis process and key inferences..." rows={5} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="confidence-scores">Confidence Scores</Label>
                    <Textarea id="confidence-scores" value={confidenceScores} onChange={e => setConfidenceScores(e.target.value)} placeholder="e.g., Deception Score: 0.7, Weapon ID Conf: 0.85..." rows={5} />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="suspect-rankings">Suspect Rankings</Label>
                    <Textarea id="suspect-rankings" value={suspectRankings} onChange={e => setSuspectRankings(e.target.value)} placeholder="Ranked list of suspects with motives and opportunities..." rows={5} />
                  </div>
                </div>
                 <div className="grid gap-2">
                    <Label htmlFor="escape-routes">Identified Escape Routes</Label>
                    <Textarea id="escape-routes" value={escapeRoutes} onChange={e => setEscapeRoutes(e.target.value)} placeholder="Description of likely escape paths..." rows={3} />
                  </div>

                <Button onClick={handleGenerateReport} disabled={!isFormValid || isPending} className="w-full">
                  {isPending && <Loader className="animate-spin mr-2" />}
                  Generate Report
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "processing" && (
            <div className="text-center">
              <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">AI Analysis in Progress...</h2>
              <p className="mt-2 text-muted-foreground">
                Veritas AI is compiling the final investigative report.
              </p>
            </div>
          )}

          {step === "report" && (
             <Card>
              <CardHeader>
                <CardTitle>Final Investigative Report</CardTitle>
                <CardDescription>
                  This report was generated by Veritas AI based on the provided analytical summaries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="prose prose-sm dark:prose-invert max-w-none whitespace-pre-wrap font-code rounded-md border bg-secondary/50 p-4">
                  {report}
                </div>
                <Button onClick={handleStartOver} className="w-full" variant="outline">
                  Generate New Report
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

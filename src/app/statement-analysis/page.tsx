
"use client";

import { useState, useTransition } from "react";
import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader, Mic } from "lucide-react";
import { analyzeWitnessStatements, type AnalyzeWitnessStatementsOutput } from "@/ai/flows/analyze-witness-statements";

type Step = "upload" | "processing" | "analysis";

export default function StatementAnalysisPage() {
  const [step, setStep] = useState<Step>("upload");
  const [isPending, startTransition] = useTransition();

  const [witnessStatement, setWitnessStatement] = useState("");
  const [analysis, setAnalysis] = useState<AnalyzeWitnessStatementsOutput | null>(null);

  const handleAnalyzeStatement = () => {
    if (!witnessStatement) return;

    startTransition(async () => {
      setStep("processing");
      const output = await analyzeWitnessStatements({ statement: witnessStatement });
      setAnalysis(output);
      setStep("analysis");
    });
  };

  const handleStartOver = () => {
    setStep('upload');
    setWitnessStatement('');
    setAnalysis(null);
  };

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Witness Statement Analysis" />
      <main className="flex-1 p-4 md:p-8 flex items-start justify-center">
        <div className="w-full max-w-2xl">
          {step === "upload" && (
            <Card>
              <CardHeader>
                <CardTitle>Analyze Witness Statement</CardTitle>
                <CardDescription>
                  Provide the witness statement text. The AI will identify key entities, contradictions, and assess deception likelihood.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="witness-statement"><Mic className="inline mr-2" /> Witness Statement</Label>
                  <Textarea
                    id="witness-statement"
                    placeholder="Paste or type the witness statement here..."
                    value={witnessStatement}
                    onChange={(e) => setWitnessStatement(e.target.value)}
                    rows={10}
                    className="text-base"
                  />
                </div>
                <Button onClick={handleAnalyzeStatement} disabled={!witnessStatement || isPending} className="w-full">
                  {isPending ? <Loader className="animate-spin mr-2" /> : null}
                  Analyze Statement
                </Button>
              </CardContent>
            </Card>
          )}

          {step === "processing" && (
            <div className="text-center">
              <Loader className="mx-auto h-12 w-12 animate-spin text-primary" />
              <h2 className="mt-4 text-2xl font-semibold">AI Analysis in Progress...</h2>
              <p className="mt-2 text-muted-foreground">
                Veritas AI is analyzing the statement.
              </p>
            </div>
          )}

          {step === "analysis" && analysis && (
             <Card>
              <CardHeader>
                <CardTitle>Statement Analysis Report</CardTitle>
                <CardDescription>
                  AI-generated analysis of the provided witness statement.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Summary</h3>
                    <p className="text-muted-foreground">{analysis.summary}</p>
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Key Entities</h3>
                    {analysis.entities.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {analysis.entities.map((entity, i) => <li key={i}>{entity}</li>)}
                        </ul>
                    ): <p className="text-muted-foreground">No key entities identified.</p>}
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Potential Contradictions</h3>
                     {analysis.contradictions.length > 0 ? (
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {analysis.contradictions.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    ): <p className="text-muted-foreground">No contradictions identified.</p>}
                </div>
                 <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Deception Score</h3>
                    <div className="flex items-center gap-4">
                        <p className="text-2xl font-bold text-primary">{analysis.deceptionScore.toFixed(2)}</p>
                        <p className="text-sm text-muted-foreground">(0-1 scale, where 1 indicates a higher likelihood of deception)</p>
                    </div>
                </div>
                <Button onClick={handleStartOver} className="w-full" variant="outline">
                  Analyze Another Statement
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
}

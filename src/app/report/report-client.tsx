'use client';

import {useEffect, useState} from 'react';
import {PageHeader} from '@/components/page-header';
import {Button} from '@/components/ui/button';
import {
  Printer,
  FileWarning,
  Loader2,
  User,
  Heart,
  Scale,
  FlaskConical,
  Map,
  Clock,
  Users,
  AlertTriangle,
  Lightbulb,
} from 'lucide-react';
import {CaseDossierOutput} from '@/ai/flows/create-case-dossier';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Badge} from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {Progress} from '@/components/ui/progress';

export function ReportClient() {
  const [isGenerating, setIsGenerating] = useState(true);
  const [report, setReport] = useState<CaseDossierOutput | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const storedResult = sessionStorage.getItem('caseDossierResult');
      if (storedResult) {
        setReport(JSON.parse(storedResult));
      } else {
        // This case handles if the user directly navigates to the report page
        setError(
          "No report data found. Please generate a dossier from the 'Case Analysis' page."
        );
      }
    } catch (e) {
      console.error('Failed to parse report from session storage', e);
      setError('An error occurred while loading the report.');
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const renderContent = () => {
    if (isGenerating) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-12 text-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
          <h2 className="text-xl font-semibold">Generating Dossier...</h2>
          <p className="text-muted-foreground">
            The AI is analyzing the case files. This might take a few moments.
          </p>
        </div>
      );
    }

    if (error || !report) {
      return (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-dashed p-12 text-center">
          <FileWarning className="h-12 w-12 text-muted-foreground" />
          <h2 className="text-xl font-semibold">
            {error ? 'Error Loading Report' : 'No Report Generated'}
          </h2>
          <p className="text-muted-foreground">
            {error ||
              "Please submit case data on the 'Case Analysis' page to generate a dossier."}
          </p>
        </div>
      );
    }

    return (
      <div className="space-y-8 print:space-y-4">
        {/* Case Summary */}
        <Card>
          <CardHeader>
            <CardTitle>Case Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{report.caseSummary}</p>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Victim Profile */}
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <User /> Victim Profile
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{report.victimProfile}</p>
            </CardContent>
            </Card>

            {/* Evidence Summary */}
            <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                <FlaskConical /> Evidence Summary
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{report.evidenceSummary}</p>
            </CardContent>
            </Card>
        </div>


        {/* Suspect Profiles */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users /> Suspect Profiles
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {report.suspectProfiles.map(suspect => (
              <Card key={suspect.name} className="bg-secondary/20">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{suspect.name}</CardTitle>
                     <Badge variant={suspect.deceptionScore > 0.7 ? "destructive" : "secondary"}>
                        Main Person of Interest
                     </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Profile</h4>
                    <p className="text-muted-foreground">{suspect.profile}</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold flex items-center gap-1"><Heart size={16}/> Motive</h4>
                      <p className="text-muted-foreground">{suspect.motive}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center gap-1"><Clock size={16}/> Opportunity</h4>
                      <p className="text-muted-foreground">{suspect.opportunity}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold flex items-center gap-1"><Scale size={16}/> Deception Score</h4>
                      <div className="flex items-center gap-2">
                        <Progress value={suspect.deceptionScore * 100} className="w-full" />
                        <span>{(suspect.deceptionScore * 100).toFixed(0)}%</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        {/* Crime Scene Reconstruction & Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Map /> Crime Scene Reconstruction</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{report.crimeSceneReconstruction}</p>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Clock /> Timeline of Events</CardTitle>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableBody>
                            {report.timelineOfEvents.map((event, i) => (
                                <TableRow key={i}>
                                    <TableCell className="font-medium w-1/3">{event.time}</TableCell>
                                    <TableCell>{event.event}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>


        {/* Inconsistencies & Leads */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><AlertTriangle /> Potential Inconsistencies</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {report.potentialInconsistencies.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2"><Lightbulb /> Investigative Leads</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                        {report.investigativeLeads.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </CardContent>
            </Card>
        </div>

      </div>
    );
  };

  return (
    <div>
      <PageHeader
        title="Investigative Dossier"
        description={`AI-Generated Report | Generated: ${new Date().toLocaleString()}`}
      >
        <Button
          onClick={() => typeof window !== 'undefined' && window.print()}
          disabled={isGenerating || !!error}
        >
          <Printer className="mr-2 h-4 w-4" />
          Print Dossier
        </Button>
      </PageHeader>
      {renderContent()}
    </div>
  );
}

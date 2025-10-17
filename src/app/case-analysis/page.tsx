'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import Image from 'next/image';
import {
  FileText,
  FileInput,
  Users,
  Heart,
  FlaskConical,
  Camera,
  Loader2,
} from 'lucide-react';
import {Button} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@/components/ui/label';
import {Input} from '@/components/ui/input';
import {useToast} from '@/hooks/use-toast';
import {PageHeader} from '@/components/page-header';
import { type CaseDossierInput } from '@/ai/flows/create-case-dossier';

// Helper to convert file to base64
const toBase64 = (file: File): Promise<string> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
  });

export default function CaseAnalysisPage() {
  const router = useRouter();
  const {toast} = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [crimeScenePictures, setCrimeScenePictures] = useState<string[]>([]);
  const [pictureFiles, setPictureFiles] = useState<File[]>([]);

  const handlePictureUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      const dataUrls = filesArray.map(file => URL.createObjectURL(file));
      setCrimeScenePictures(prev => [...prev, ...dataUrls]);
      setPictureFiles(prev => [...prev, ...filesArray]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    toast({
      title: 'Starting Analysis...',
      description:
        'The AI is processing all case data. This may take a moment.',
    });

    const formData = new FormData(e.currentTarget);
    const formValues = Object.fromEntries(formData.entries());

    try {
      const pictureDataUris = await Promise.all(pictureFiles.map(toBase64));

      const input: CaseDossierInput = {
        crimeScenePictures: pictureDataUris,
        evidenceLog: formValues.evidenceLog as string,
        witnessStatements: formValues.witnessStatements as string,
        victimRelationships: formValues.victimRelationships as string,
        forensicReport: formValues.forensicReport as string,
      };

      const response = await fetch('/api/create-case-dossier', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(input),
      });

      if (!response.ok) {
        throw new Error('Failed to generate dossier.');
      }

      const result = await response.json();

      // Store result in session storage to pass to the report page
      sessionStorage.setItem('caseDossierResult', JSON.stringify(result));
      
      router.push('/report');

    } catch (error) {
      console.error("Error generating dossier:", error);
      toast({
        variant: "destructive",
        title: "Analysis Failed",
        description: "An error occurred while generating the report. Please try again."
      })
    } finally {
        setIsLoading(false);
    }
  };

  return (
    <div>
      <PageHeader
        title="Comprehensive Case Analysis"
        description="Upload all case materials to generate a complete investigative dossier."
      />
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            {/* Crime Scene Pictures */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Camera /> Crime Scene Pictures
                </CardTitle>
                <CardDescription>
                  Upload images from the crime scene.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  <Input
                    id="picture-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={handlePictureUpload}
                    className="cursor-pointer"
                    disabled={isLoading}
                  />
                  {crimeScenePictures.length > 0 && (
                    <div className="grid grid-cols-3 gap-2">
                      {crimeScenePictures.map((src, index) => (
                        <div key={index} className="relative aspect-square">
                          <Image
                            src={src}
                            alt={`Crime Scene Photo ${index + 1}`}
                            fill
                            className="rounded-md object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Evidence Input */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileInput /> Evidence Log
                </CardTitle>
                <CardDescription>
                  List all pieces of evidence and their descriptions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="evidenceLog"
                  placeholder=""
                  className="min-h-[150px]"
                  disabled={isLoading}
                />
              </CardContent>
            </Card>

            {/* Witness Statements */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users /> Witness Statements
                </CardTitle>
                <CardDescription>
                  Enter each witness statement clearly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="witnessStatements"
                  placeholder=""
                  className="min-h-[150px]"
                  disabled={isLoading}
                />
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            {/* Relationships */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart /> Relationships with Victim
                </CardTitle>
                <CardDescription>
                  Describe suspects' relationships, motives, and alibis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="victimRelationships"
                  placeholder=""
                  className="min-h-[150px]"
                  disabled={isLoading}
                />
              </CardContent>
            </Card>

            {/* Forensic Report */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FlaskConical /> Forensic Report
                </CardTitle>
                <CardDescription>
                  Input findings from the forensic analysis.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Textarea
                  name="forensicReport"
                  placeholder=""
                  className="min-h-[150px]"
                  disabled={isLoading}
                />
              </CardContent>
            </Card>

            {/* Submission */}
            <Card className="bg-primary/5 dark:bg-primary/10">
              <CardHeader>
                <CardTitle>Ready for Analysis?</CardTitle>
                <CardDescription>
                  The AI will perform a deep analysis of all provided data to
                  generate a comprehensive investigative dossier.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isLoading}
                  size="lg"
                >
                  {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <FileText className="mr-2 h-5 w-5" />
                  )}
                  Generate Dossier
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </form>
    </div>
  );
}

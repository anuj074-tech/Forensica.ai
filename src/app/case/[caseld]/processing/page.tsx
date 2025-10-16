
"use client";

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { MainHeader } from "@/components/common/main-header";
import { Loader, Eye } from 'lucide-react';

export default function ProcessingPage() {
    const router = useRouter();
    const params = useParams();
    const caseId = params.caseId as string;

    useEffect(() => {
        // This is a simulation of the AI processing time.
        // In a real application, you would poll a backend service
        // to check the status of the analysis.
        const timer = setTimeout(() => {
            router.replace(`/case/${caseId}/report`);
        }, 5000); // Simulate 5 seconds of processing

        return () => clearTimeout(timer);
    }, [router, caseId]);

    return (
        <div className="flex min-h-screen w-full flex-col">
            <MainHeader title={`Processing Case: ${caseId}`} />
            <main className="flex flex-1 items-center justify-center p-4 text-center">
                <div>
                    <div className="relative mx-auto flex h-24 w-24 items-center justify-center">
                        <div className="absolute inset-0 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
                        <Eye className="h-12 w-12 text-primary" />
                    </div>
                    <h1 className="mt-8 text-3xl font-headline font-bold">AI Analysis in Progress...</h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Veritas AI is analyzing the evidence. This may take a few moments.
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                        Reconstructing scene, analyzing statements, and identifying objects...
                    </p>
                </div>
            </main>
        </div>
    );
}

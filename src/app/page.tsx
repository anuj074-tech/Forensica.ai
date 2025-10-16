
"use client";

import { MainHeader } from "@/components/common/main-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { File, Upload } from "lucide-react";
import Link from "next/link";


export default function Home() {

  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader title="Veritas AI Dashboard" />
      <main className="flex flex-1 items-center justify-center p-4 md:p-8">
        <div className="w-full max-w-2xl text-center">
            <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-primary/10">
                <File className="h-12 w-12 text-primary"/>
            </div>
            <h1 className="text-4xl font-headline font-bold mb-4">Create New Case File</h1>
            <p className="text-muted-foreground mb-8 text-lg">
                Begin by creating a new case file. You will be guided through the process of uploading evidence and generating a comprehensive investigative report.
            </p>
            <Link href="/new-case" passHref>
                <Button size="lg">
                    <Upload className="mr-2"/>
                    Create New Case
                </Button>
            </Link>
        </div>
      </main>
    </div>
  );
}

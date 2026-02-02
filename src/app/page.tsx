'use client';

import { PageHeader } from "@/components/page-header";
import { CaseActivityChart } from "./case-activity-chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ScanSearch,
  Users,
  FlaskConical,
  Library,
  LineChart,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const tools = [
  {
    href: "/case-analysis",
    icon: <ScanSearch className="h-10 w-10" />,
    title: "Comprehensive Dossier",
    description:
      "Upload all case materials to generate a complete investigative dossier.",
  },
  {
    href: "/witness-analysis",
    icon: <Users className="h-10 w-10" />,
    title: "Witness Analysis",
    description:
      "Analyze statements for deception, inconsistencies, and sentiment.",
  },
  {
    href: "/suspect-ranking",
    icon: <LineChart className="h-10 w-10" />,
    title: "Suspect Ranking",
    description: "Rank suspects by motive, opportunity, and social graphs.",
  },
  {
    href: "/weapon-inference",
    icon: <FlaskConical className="h-10 w-10" />,
    title: "Weapon Inference",
    description: "Infer weapon type from wound data and scene descriptions.",
  },
  {
    href: "/evidence",
    icon: <Library className="h-10 w-10" />,
    title: "Evidence Locker",
    description: "Browse and manage all collected evidence for the case.",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="Dashboard"
        description="Welcome to Forensica AI, your advanced investigative partner."
      />

      <Card>
        <CardHeader>
          <CardTitle>Case Activity</CardTitle>
          <CardDescription>
            Overview of evidence and statements collected over time.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CaseActivityChart />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Investigative Tools</CardTitle>
          <CardDescription>
            Utilize specialized AI agents for in-depth analysis.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Card
              key={tool.href}
              className="flex flex-col items-start justify-between transition-all hover:bg-muted/50"
            >
              <CardHeader>
                <div className="mb-4 text-primary">{tool.icon}</div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardContent className="w-full">
                <Button asChild className="w-full">
                  <Link href={tool.href}>Launch Tool</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

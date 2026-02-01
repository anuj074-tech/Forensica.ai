'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { format } from 'date-fns';

import { useUser, useFirestore } from '@/firebase';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';

import { PageHeader } from "@/components/page-header";
import { CaseActivityChart, type ChartData } from "./case-activity-chart";
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
  Loader2,
} from "lucide-react";
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


export function DashboardClient() {
  const { user } = useUser();
  const firestore = useFirestore();
  const [chartData, setChartData] = useState<ChartData>([]);
  const [isChartLoading, setIsChartLoading] = useState(true);

  useEffect(() => {
    // Set up initial empty state for the chart for the last 12 months
    const last12Months = Array.from({ length: 12 }, (_, i) => {
        const d = new Date();
        d.setMonth(d.getMonth() - i);
        return {
            key: format(d, 'yyyy-MM'),
            month: format(d, 'MMMM'),
        };
    }).reverse();

    const createEmptyData = () => last12Months.map(({ month }) => ({
        month: month,
        cases: 0,
    }));

    if (user && firestore) {
      setIsChartLoading(true);
      const casesRef = collection(firestore, 'users', user.uid, 'cases');
      const q = query(casesRef, orderBy('createdAt', 'asc'));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const monthlyCases: { [key: string]: number } = {};

        snapshot.docs.forEach(doc => {
          const data = doc.data();
          if (data.createdAt) {
            const date = data.createdAt.toDate();
            const monthKey = format(date, 'yyyy-MM');
            if (!monthlyCases[monthKey]) {
              monthlyCases[monthKey] = 0;
            }
            monthlyCases[monthKey]++;
          }
        });

        const formattedData = last12Months.map(({ key, month }) => ({
          month: month,
          cases: monthlyCases[key] || 0,
        }));

        setChartData(formattedData);
        setIsChartLoading(false);
      }, (error) => {
        console.error("Error fetching case data:", error);
        setChartData(createEmptyData());
        setIsChartLoading(false);
      });

      return () => unsubscribe();
    } else {
        setChartData(createEmptyData());
        setIsChartLoading(false);
    }
  }, [user, firestore]);

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
            Overview of cases analyzed over the last 12 months.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isChartLoading ? (
            <div className="flex h-[300px] w-full items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : (
            <CaseActivityChart data={chartData} />
          )}
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

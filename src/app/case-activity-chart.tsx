"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, CartesianGrid, XAxis, YAxis, Legend, BarChart } from "recharts";

const chartData = [
  { month: "January", evidence: 186, statements: 80 },
  { month: "February", evidence: 305, statements: 200 },
  { month: "March", evidence: 237, statements: 120 },
  { month: "April", evidence: 73, statements: 190 },
  { month: "May", evidence: 209, statements: 130 },
  { month: "June", evidence: 214, statements: 140 },
];

const chartConfig = {
  evidence: {
    label: "Evidence",
    color: "hsl(var(--primary))",
  },
  statements: {
    label: "Statements",
    color: "hsl(var(--accent))",
  },
} satisfies ChartConfig;

export function CaseActivityChart() {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Legend />
        <Bar dataKey="evidence" fill="var(--color-evidence)" radius={4} />
        <Bar dataKey="statements" fill="var(--color-statements)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

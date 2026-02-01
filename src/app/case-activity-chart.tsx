"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { Bar, CartesianGrid, XAxis, YAxis, Legend, BarChart } from "recharts";

export type ChartData = {
  month: string;
  cases: number;
}[];

const chartConfig = {
  cases: {
    label: "Cases Analyzed",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

type CaseActivityChartProps = {
    data: ChartData;
}

export function CaseActivityChart({ data }: CaseActivityChartProps) {
  return (
    <ChartContainer config={chartConfig} className="h-[300px] w-full">
      <BarChart data={data} margin={{ top: 20, right: 20, left: -10, bottom: 0 }}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <YAxis allowDecimals={false} />
        <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
        />
        <Legend />
        <Bar dataKey="cases" fill="var(--color-cases)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}

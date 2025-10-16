'use server';

/**
 * @fileOverview Generates a comprehensive investigative report summarizing evidence,
 *  AI reasoning, confidence scores, and suspect rankings.
 *
 * - generateInvestigativeReport - A function that generates the investigative report.
 * - GenerateInvestigativeReportInput - The input type for the generateInvestigativeReport function.
 * - GenerateInvestigativeReportOutput - The return type for the generateInvestigativeReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateInvestigativeReportInputSchema = z.object({
  evidenceSummary: z
    .string()
    .describe('A summary of the evidence collected at the crime scene.'),
  aiReasoning: z
    .string()
    .describe('The AI’s reasoning and analysis of the evidence.'),
  confidenceScores: z
    .string()
    .describe('Confidence scores for different aspects of the analysis.'),
  suspectRankings: z
    .string()
    .describe(
      'Ranked list of suspects with their motives, opportunities, and proximity to the scene.'
    ),
  escapeRoutes: z
    .string()
    .describe('Possible escape routes identified by the AI.'),
});
export type GenerateInvestigativeReportInput = z.infer<
  typeof GenerateInvestigativeReportInputSchema
>;

const GenerateInvestigativeReportOutputSchema = z.object({
  report: z.string().describe('The comprehensive investigative report.'),
});
export type GenerateInvestigativeReportOutput = z.infer<
  typeof GenerateInvestigativeReportOutputSchema
>;

export async function generateInvestigativeReport(
  input: GenerateInvestigativeReportInput
): Promise<GenerateInvestigativeReportOutput> {
  return generateInvestigativeReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateInvestigativeReportPrompt',
  input: {schema: GenerateInvestigativeReportInputSchema},
  output: {schema: GenerateInvestigativeReportOutputSchema},
  prompt: `You are an expert in generating investigative reports.

  Based on the provided evidence summary, AI reasoning, confidence scores,
  suspect rankings, and identified escape routes, create a comprehensive
  investigative report that is clear, concise, and well-organized.

  Evidence Summary: {{{evidenceSummary}}}
  AI Reasoning: {{{aiReasoning}}}
  Confidence Scores: {{{confidenceScores}}}
  Suspect Rankings: {{{suspectRankings}}}
  Escape Routes: {{{escapeRoutes}}}

  Report:
  `,
});

const generateInvestigativeReportFlow = ai.defineFlow(
  {
    name: 'generateInvestigativeReportFlow',
    inputSchema: GenerateInvestigativeReportInputSchema,
    outputSchema: GenerateInvestigativeReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

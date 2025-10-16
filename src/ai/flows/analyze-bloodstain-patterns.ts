// src/ai/flows/analyze-bloodstain-patterns.ts
'use server';
/**
 * @fileOverview Analyzes bloodstain patterns in images to infer weapon types and trajectories.
 *
 * - analyzeBloodstainPatterns - A function that handles the bloodstain pattern analysis process.
 * - AnalyzeBloodstainPatternsInput - The input type for the analyzeBloodstainPatterns function.
 * - AnalyzeBloodstainPatternsOutput - The return type for the analyzeBloodstainPatterns function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeBloodstainPatternsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a bloodstain pattern, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
  additionalContext: z
    .string()
    .optional()
    .describe('Additional context about the crime scene.'),
});
export type AnalyzeBloodstainPatternsInput = z.infer<typeof AnalyzeBloodstainPatternsInputSchema>;

const AnalyzeBloodstainPatternsOutputSchema = z.object({
  weaponType: z
    .string()
    .describe('The probable type of weapon used based on the bloodstain pattern.'),
  trajectory: z
    .string()
    .describe('The inferred trajectory of the blood spatter.'),
  additionalNotes: z
    .string()
    .optional()
    .describe('Any additional notes or observations about the bloodstain pattern.'),
});
export type AnalyzeBloodstainPatternsOutput = z.infer<typeof AnalyzeBloodstainPatternsOutputSchema>;

export async function analyzeBloodstainPatterns(
  input: AnalyzeBloodstainPatternsInput
): Promise<AnalyzeBloodstainPatternsOutput> {
  return analyzeBloodstainPatternsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeBloodstainPatternsPrompt',
  input: {schema: AnalyzeBloodstainPatternsInputSchema},
  output: {schema: AnalyzeBloodstainPatternsOutputSchema},
  prompt: `You are an expert forensic analyst specializing in bloodstain pattern analysis.

You will use this information to infer the weapon type and blood spatter trajectory.

Use the following as the primary source of information about the bloodstain pattern.

Photo: {{media url=photoDataUri}}
{% if additionalContext %}Additional Context: {{{additionalContext}}}{% endif %}

Based on the bloodstain patterns in the provided image, determine the likely weapon type, blood spatter trajectory and any addtional relevant notes about the pattern.

Ensure that the output follows the defined JSON schema with descriptions.`, // Corrected Handlebars syntax here
});

const analyzeBloodstainPatternsFlow = ai.defineFlow(
  {
    name: 'analyzeBloodstainPatternsFlow',
    inputSchema: AnalyzeBloodstainPatternsInputSchema,
    outputSchema: AnalyzeBloodstainPatternsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

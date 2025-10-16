'use server';

/**
 * @fileOverview A flow for transcribing and analyzing witness statements to identify key entities,
 * contradictions, and potential deception.
 *
 * - analyzeWitnessStatements - A function that handles the analysis of witness statements.
 * - AnalyzeWitnessStatementsInput - The input type for the analyzeWitnessStatements function.
 * - AnalyzeWitnessStatementsOutput - The return type for the analyzeWitnessStatements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeWitnessStatementsInputSchema = z.object({
  statement: z
    .string()
    .describe('The witness statement to be analyzed.'),
});
export type AnalyzeWitnessStatementsInput = z.infer<typeof AnalyzeWitnessStatementsInputSchema>;

const AnalyzeWitnessStatementsOutputSchema = z.object({
  entities: z.array(
    z.string().describe('Key entities identified in the witness statement.')
  ).describe('A list of key entities identified in the witness statement.'),
  contradictions: z.array(
    z.string().describe('Potential contradictions found in the witness statement.')
  ).describe('A list of potential contradictions found in the witness statement.'),
  deceptionScore: z
    .number()
    .describe('A score indicating the likelihood of deception in the witness statement.'),
  summary: z.string().describe('A summary of the witness statement.'),
});
export type AnalyzeWitnessStatementsOutput = z.infer<typeof AnalyzeWitnessStatementsOutputSchema>;

export async function analyzeWitnessStatements(
  input: AnalyzeWitnessStatementsInput
): Promise<AnalyzeWitnessStatementsOutput> {
  return analyzeWitnessStatementsFlow(input);
}

const analyzeWitnessStatementsPrompt = ai.definePrompt({
  name: 'analyzeWitnessStatementsPrompt',
  input: {schema: AnalyzeWitnessStatementsInputSchema},
  output: {schema: AnalyzeWitnessStatementsOutputSchema},
  prompt: `You are an AI expert in analyzing witness statements in criminal investigations.

  Your task is to analyze the provided witness statement, identify key entities, detect potential contradictions, and assess the likelihood of deception.

  Statement: {{{statement}}}

  Output:
  - entities: A list of key entities (persons, places, things) mentioned in the statement.
  - contradictions: Any inconsistencies or contradictions within the statement itself or compared to common sense.
  - deceptionScore: A numerical score (0-1, where 1 is most likely to be lies) indicating the probability of deception in the statement based on linguistic cues and inconsistencies.
  - summary: A concise summary of the witness statement.
  Please format your output as a JSON object.
`,
});

const analyzeWitnessStatementsFlow = ai.defineFlow(
  {
    name: 'analyzeWitnessStatementsFlow',
    inputSchema: AnalyzeWitnessStatementsInputSchema,
    outputSchema: AnalyzeWitnessStatementsOutputSchema,
  },
  async input => {
    const {output} = await analyzeWitnessStatementsPrompt(input);
    return output!;
  }
);

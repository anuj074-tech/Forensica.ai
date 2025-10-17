'use server';

/**
 * @fileOverview A witness statement analysis AI agent.
 *
 * - analyzeWitnessStatements - A function that handles the witness statement analysis process.
 * - AnalyzeWitnessStatementsInput - The input type for the analyzeWitnessStatements function.
 * - AnalyzeWitnessStatementsOutput - The return type for the analyzeWitnessStatements function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeWitnessStatementsInputSchema = z.object({
  statements: z.array(
    z.object({
      witnessName: z.string().describe('The name of the witness.'),
      statementText: z.string().describe('The full text of the witness statement.'),
    })
  ).describe('An array of witness statements to analyze.'),
});
export type AnalyzeWitnessStatementsInput = z.infer<typeof AnalyzeWitnessStatementsInputSchema>;

const AnalyzeWitnessStatementsOutputSchema = z.array(
  z.object({
    witnessName: z.string().describe('The name of the witness.'),
    statementSummary: z.string().describe('A concise summary of the witness statement.'),
    deceptionScore: z.number().describe('A score from 0 to 1 indicating the likelihood of deception, where 1 is highly deceptive.'),
    keyInconsistencies: z.array(z.string()).describe('A list of key inconsistencies or potential lies in the statement.'),
    emotionScore: z.string().describe('The emotion expressed in the witness statement'),
  })
).describe('An array of analysis results for each witness statement.');
export type AnalyzeWitnessStatementsOutput = z.infer<typeof AnalyzeWitnessStatementsOutputSchema>;

export async function analyzeWitnessStatements(input: AnalyzeWitnessStatementsInput): Promise<AnalyzeWitnessStatementsOutput> {
  return analyzeWitnessStatementsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeWitnessStatementsPrompt',
  input: {schema: AnalyzeWitnessStatementsInputSchema},
  output: {schema: AnalyzeWitnessStatementsOutputSchema},
  prompt: `You are an expert forensic analyst specializing in evaluating witness statements for deception and inconsistencies.

  Analyze the following witness statements and provide a summary, deception score (0-1), key inconsistencies, and emotion score for each.
  The deception score should be based on linguistic cues, evasiveness, temporal inconsistencies, and contradictions with other known facts or statements.
  The emotion score should tell what kind of emotions the witness statement is expressing and what does that mean.

  Witness Statements:
  {{#each statements}}
  Witness Name: {{{witnessName}}}
  Statement: {{{statementText}}}
  ---
  {{/each}}
  
  Format your response as a JSON array, where each object in the array corresponds to a witness statement and contains the following fields:
  - witnessName: The name of the witness.
  - statementSummary: A brief summary of the witness statement.
  - deceptionScore: A numerical score (0 to 1) indicating the likelihood of deception.
  - keyInconsistencies: An array of strings, each highlighting a key inconsistency or potential lie.
  - emotionScore: A string indicating which emotion is expressed in the witness statement.
  `,
});

const analyzeWitnessStatementsFlow = ai.defineFlow(
  {
    name: 'analyzeWitnessStatementsFlow',
    inputSchema: AnalyzeWitnessStatementsInputSchema,
    outputSchema: AnalyzeWitnessStatementsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

'use server';

/**
 * @fileOverview Ranks suspects by potential motive and opportunity using relational data and social graphs.
 *
 * - rankSuspectsByMotive - A function that ranks suspects by motive.
 * - RankSuspectsInput - The input type for the rankSuspectsByMotive function.
 * - RankSuspectsOutput - The return type for the rankSuspectsByMotive function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const RankSuspectsInputSchema = z.object({
  crimeDescription: z
    .string()
    .describe('A detailed description of the crime, including victim and location.'),
  suspectList: z
    .string()
    .describe('A list of potential suspects, including their names and brief descriptions.'),
  victimInformation: z
    .string()
    .describe('Information about the victim, including relationships and known enemies.'),
  relationalData: z
    .string()
    .describe(
      'Relational data and social graphs of the suspects and victim, including relationships, motives, and prior incidents.'
    ),
});
export type RankSuspectsInput = z.infer<typeof RankSuspectsInputSchema>;

const RankSuspectsOutputSchema = z.array(z.object({
  suspectName: z.string().describe('The name of the suspect.'),
  rank: z.number().describe('The rank of the suspect based on motive and opportunity.'),
  reason: z.string().describe('The reasoning for the suspect ranking.'),
}));
export type RankSuspectsOutput = z.infer<typeof RankSuspectsOutputSchema>;

export async function rankSuspectsByMotive(input: RankSuspectsInput): Promise<RankSuspectsOutput> {
  return rankSuspectsByMotiveFlow(input);
}

const prompt = ai.definePrompt({
  name: 'rankSuspectsByMotivePrompt',
  input: {schema: RankSuspectsInputSchema},
  output: {schema: RankSuspectsOutputSchema},
  prompt: `You are an expert crime scene investigator.

You are provided with the following information about a crime:
Crime Description: {{{crimeDescription}}}
Suspect List: {{{suspectList}}}
Victim Information: {{{victimInformation}}}
Relational Data: {{{relationalData}}}

Based on this information, rank the suspects by motive and opportunity. Provide a reason for each suspect's ranking.

Output the suspect rankings in JSON format, including the suspect's name, rank, and reason.

Format:
[{
  "suspectName": "string",
  "rank": number,
  "reason": "string"
}]
`,
});

const rankSuspectsByMotiveFlow = ai.defineFlow(
  {
    name: 'rankSuspectsByMotiveFlow',
    inputSchema: RankSuspectsInputSchema,
    outputSchema: RankSuspectsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

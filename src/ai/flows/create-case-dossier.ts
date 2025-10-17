'use server';
/**
 * @fileOverview A comprehensive case analysis AI agent.
 *
 * - createCaseDossier - A function that handles the full case analysis and dossier generation.
 * - CaseDossierInput - The input type for the createCaseDossier function.
 * - CaseDossierOutput - The return type for the createCaseDossier function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CaseDossierInputSchema = z.object({
  crimeScenePictures: z
    .array(z.string())
    .describe('An array of data URIs for crime scene pictures.'),
  evidenceLog: z
    .string()
    .describe('A log of all collected evidence and their descriptions.'),
  witnessStatements: z
    .string()
    .describe('A compilation of all witness statements.'),
  victimRelationships: z
    .string()
    .describe(
      "Descriptions of suspects' relationships with the victim, including motives and alibis."
    ),
  forensicReport: z
    .string()
    .describe('The official forensic report findings.'),
});
export type CaseDossierInput = z.infer<typeof CaseDossierInputSchema>;

const CaseDossierOutputSchema = z.object({
  caseSummary: z
    .string()
    .describe(
      "A brief, high-level summary of the entire case and the AI's primary conclusions."
    ),
  victimProfile: z.string().describe('A profile of the victim.'),
  suspectProfiles: z.array(
    z.object({
      name: z.string(),
      profile: z.string().describe('A detailed profile of the suspect.'),
      motive: z.string(),
      opportunity: z.string(),
      deceptionScore: z
        .number()
        .describe('A score from 0-1 indicating likelihood of deception.'),
    })
  ),
  evidenceSummary: z
    .string()
    .describe('A summary of the key pieces of evidence and their implications.'),
  crimeSceneReconstruction: z
    .string()
    .describe(
      'A narrative reconstructing the likely sequence of events at the crime scene.'
    ),
  timelineOfEvents: z
    .array(
      z.object({
        time: z.string(),
        event: z.string(),
      })
    )
    .describe(
      'A chronological timeline of events before, during, and after the crime.'
    ),
  mainPersonsOfInterest: z
    .array(z.string())
    .describe('A ranked list of the main persons of interest.'),
  potentialInconsistencies: z
    .array(z.string())
    .describe(
      'A list of identified inconsistencies across all provided data.'
    ),
  investigativeLeads: z
    .array(z.string())
    .describe(
      'A list of actionable next steps and investigative leads for human detectives.'
    ),
});
export type CaseDossierOutput = z.infer<typeof CaseDossierOutputSchema>;

export async function createCaseDossier(
  input: CaseDossierInput
): Promise<CaseDossierOutput> {
  return createCaseDossierFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createCaseDossierPrompt',
  input: {schema: CaseDossierInputSchema},
  output: {schema: CaseDossierOutputSchema},
  prompt: `You are a world-renowned criminal investigator AI, known as Forensica. Your task is to synthesize disparate pieces of information into a coherent and comprehensive case dossier. Analyze the provided data meticulously to uncover links, inconsistencies, and actionable leads.

  **Case Files:**

  **1. Crime Scene Photos:**
  {{#each crimeScenePictures}}
  - Image: {{media url=this}}
  {{/each}}
  *Analyze these images for environmental clues, signs of struggle, points of entry/exit, and any objects that seem out of place or could be potential evidence.*

  **2. Evidence Log:**
  \`\`\`
  {{{evidenceLog}}}
  \`\`\`
  *Correlate the items in the evidence log with the crime scene photos and other case information. What is the significance of each piece of evidence?*

  **3. Witness Statements:**
  \`\`\`
  {{{witnessStatements}}}
  \`\`\`
  *Scrutinize these statements for contradictions, emotional cues, and temporal inconsistencies. Compare statements against each other and against known facts.*

  **4. Victim & Suspect Relationships:**
  \`\`\`
  {{{victimRelationships}}}
  \`\`\`
  *Map out the social and professional network of the victim. Analyze the provided relationships, motives, and alibis for each suspect. Who had the means, motive, and opportunity?*

  **5. Forensic Report:**
  \`\`\`
  {{{forensicReport}}}
  \`\`\`
  *Integrate the scientific findings from the forensic report. How do these findings support or refute suspect alibis and witness statements? What do they tell you about the sequence of events?*

  **Your Mission:**

  Based on a thorough analysis of all the above information, generate a complete case dossier. The output must be a JSON object that strictly adheres to the provided schema. Be thorough, logical, and insightful in your analysis for each field.

  **Output Schema:**
  ${JSON.stringify(CaseDossierOutputSchema.describe(''), null, 2)}
  `,
});

const createCaseDossierFlow = ai.defineFlow(
  {
    name: 'createCaseDossierFlow',
    inputSchema: CaseDossierInputSchema,
    outputSchema: CaseDossierOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

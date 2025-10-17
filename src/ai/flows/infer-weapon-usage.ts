'use server';

/**
 * @fileOverview A weapon usage inference AI agent.
 *
 * - inferWeaponUsage - A function that handles the weapon usage inference process.
 * - InferWeaponUsageInput - The input type for the inferWeaponUsage function.
 * - InferWeaponUsageOutput - The return type for the inferWeaponUsage function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const InferWeaponUsageInputSchema = z.object({
  woundDescription: z
    .string()
    .describe('Description of the wound, including size, shape, and location.'),
  sceneDescription: z.string().describe('Description of the crime scene.'),
  victimDescription: z.string().describe('Description of the victim.'),
  weaponMarkDataUri: z
    .string()
    .optional()
    .describe(
      "A photo of a potential weapon mark, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type InferWeaponUsageInput = z.infer<typeof InferWeaponUsageInputSchema>;

const InferWeaponUsageOutputSchema = z.object({
  weaponClass: z.string().describe('The likely class of weapon used.'),
  weaponFeatures: z.string().describe('Likely features of the weapon.'),
  confidence: z.number().describe('Confidence score for the inference.'),
  reasoning: z.string().describe('Explanation of the reasoning process.'),
});
export type InferWeaponUsageOutput = z.infer<typeof InferWeaponUsageOutputSchema>;

export async function inferWeaponUsage(input: InferWeaponUsageInput): Promise<InferWeaponUsageOutput> {
  return inferWeaponUsageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'inferWeaponUsagePrompt',
  input: {schema: InferWeaponUsageInputSchema},
  output: {schema: InferWeaponUsageOutputSchema},
  prompt: `You are an expert forensic analyst specializing in weapon identification.

You will use the wound description, scene description, and victim description to infer the likely class of weapon used, its likely features, and provide a confidence score for your inference. Explain your reasoning process.

Wound Description: {{{woundDescription}}}
Scene Description: {{{sceneDescription}}}
Victim Description: {{{victimDescription}}}

{{#if weaponMarkDataUri}}
Potential Weapon Mark: {{media url=weaponMarkDataUri}}
{{/if}}

Consider the following output schema:
${JSON.stringify(InferWeaponUsageOutputSchema.shape, null, 2)}`,
});

const inferWeaponUsageFlow = ai.defineFlow(
  {
    name: 'inferWeaponUsageFlow',
    inputSchema: InferWeaponUsageInputSchema,
    outputSchema: InferWeaponUsageOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

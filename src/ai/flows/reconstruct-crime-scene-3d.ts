'use server';

/**
 * @fileOverview A flow for reconstructing a crime scene in 3D from images and videos.
 *
 * - reconstructCrimeScene3D - A function that handles the 3D reconstruction process.
 * - ReconstructCrimeScene3DInput - The input type for the reconstructCrimeScene3D function.
 * - ReconstructCrimeScene3DOutput - The return type for the reconstructCrimeScene3D function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ReconstructCrimeScene3DInputSchema = z.object({
  mediaDataUri: z
    .string()
    .describe(
      "A photo or video of a crime scene, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type ReconstructCrimeScene3DInput = z.infer<typeof ReconstructCrimeScene3DInputSchema>;

const ReconstructCrimeScene3DOutputSchema = z.object({
  sceneDescription: z.string().describe('A text description of the reconstructed 3D crime scene.'),
  spatialModelDataUri: z
    .string()
    .optional()
    .describe(
      'A data URI containing the 3D spatial model of the crime scene, if available. Format: data:<model_mimetype>;base64,<encoded_data>.'
    ),
});
export type ReconstructCrimeScene3DOutput = z.infer<typeof ReconstructCrimeScene3DOutputSchema>;

export async function reconstructCrimeScene3D(input: ReconstructCrimeScene3DInput): Promise<ReconstructCrimeScene3DOutput> {
  return reconstructCrimeScene3DFlow(input);
}

const prompt = ai.definePrompt({
  name: 'reconstructCrimeScene3DPrompt',
  input: {schema: ReconstructCrimeScene3DInputSchema},
  output: {schema: ReconstructCrimeScene3DOutputSchema},
  prompt: `You are an expert in crime scene reconstruction. You will be provided with a photo or video of a crime scene.
Your task is to analyze the media and reconstruct the environment in 3D, providing a textual description of the scene.

Consider details such as room size, object placement, and potential entry/exit points.

Here is the crime scene media:

{{media url=mediaDataUri}}`,
});

const reconstructCrimeScene3DFlow = ai.defineFlow(
  {
    name: 'reconstructCrimeScene3DFlow',
    inputSchema: ReconstructCrimeScene3DInputSchema,
    outputSchema: ReconstructCrimeScene3DOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

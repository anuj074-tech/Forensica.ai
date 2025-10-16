'use server';

/**
 * @fileOverview This file defines a Genkit flow for detecting and identifying objects in crime scene images.
 *
 * The flow takes an image as input and returns a list of identified objects with their descriptions.
 * - detectIdentifyObjects - The function that processes the image and returns identified objects.
 * - DetectIdentifyObjectsInput - The input type for the detectIdentifyObjects function.
 * - DetectIdentifyObjectsOutput - The output type for the detectIdentifyObjects function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DetectIdentifyObjectsInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      'A photo of the crime scene, as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.'    ),
});
export type DetectIdentifyObjectsInput = z.infer<typeof DetectIdentifyObjectsInputSchema>;

const DetectedObjectSchema = z.object({
  name: z.string().describe('The identified name of the object.'),
  description: z.string().describe('A description of the object and its potential relevance to the crime scene.'),
  confidence: z.number().describe('The confidence level of the object identification (0-1).'),
});

const DetectIdentifyObjectsOutputSchema = z.array(DetectedObjectSchema);
export type DetectIdentifyObjectsOutput = z.infer<typeof DetectIdentifyObjectsOutputSchema>;

export async function detectIdentifyObjects(input: DetectIdentifyObjectsInput): Promise<DetectIdentifyObjectsOutput> {
  return detectIdentifyObjectsFlow(input);
}

const detectIdentifyObjectsPrompt = ai.definePrompt({
  name: 'detectIdentifyObjectsPrompt',
  input: {schema: DetectIdentifyObjectsInputSchema},
  output: {schema: DetectIdentifyObjectsOutputSchema},
  prompt: `You are an expert in crime scene investigation and object recognition.
  Your task is to analyze the image of a crime scene and identify potential objects of interest that could serve as evidence.
  Provide a detailed description of each object and its potential relevance to the investigation.
  Also, provide the confidence level (0-1) for each object identified.

  Analyze the following image: {{media url=photoDataUri}}

  Format your response as a JSON array of objects, where each object has the following properties:
  - name: The identified name of the object.
  - description: A description of the object and its potential relevance to the crime scene.
  - confidence: The confidence level of the object identification (0-1).
  `,
});

const detectIdentifyObjectsFlow = ai.defineFlow(
  {
    name: 'detectIdentifyObjectsFlow',
    inputSchema: DetectIdentifyObjectsInputSchema,
    outputSchema: DetectIdentifyObjectsOutputSchema,
  },
  async input => {
    const {output} = await detectIdentifyObjectsPrompt(input);
    return output!;
  }
);

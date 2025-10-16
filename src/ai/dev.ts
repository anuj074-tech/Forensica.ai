import { config } from 'dotenv';
config();

import '@/ai/flows/analyze-witness-statements.ts';
import '@/ai/flows/reconstruct-crime-scene-3d.ts';
import '@/ai/flows/detect-identify-objects.ts';
import '@/ai/flows/generate-investigative-report.ts';
import '@/ai/flows/analyze-bloodstain-patterns.ts';
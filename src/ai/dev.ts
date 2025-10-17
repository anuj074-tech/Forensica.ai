import { config } from 'dotenv';
config();

import '@/ai/flows/create-case-dossier.ts';
import '@/ai/flows/analyze-witness-statements.ts';
import '@/ai/flows/infer-weapon-usage.ts';
import '@/ai/flows/rank-suspects-by-motive.ts';

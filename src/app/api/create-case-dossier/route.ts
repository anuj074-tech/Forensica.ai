import { createCaseDossier } from '@/ai/flows/create-case-dossier';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const result = await createCaseDossier(input);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

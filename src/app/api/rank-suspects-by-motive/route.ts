import { rankSuspectsByMotive } from '@/ai/flows/rank-suspects-by-motive';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const input = await req.json();
    const result = await rankSuspectsByMotive(input);
    return NextResponse.json(result);
  } catch (e: any) {
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

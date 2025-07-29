import { NextRequest, NextResponse } from 'next/server';
import { getNotesList } from '@/lib/microcms';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const techStack = searchParams.get('techStack') || '';

  const filters = techStack ? `techStack[contains]${techStack}` : undefined;
  const notes = await getNotesList({ filters });

  return NextResponse.json(notes);
}

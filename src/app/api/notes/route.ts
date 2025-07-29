import { NextRequest, NextResponse } from 'next/server';
import { getNotesList } from '@/lib/microcms';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const techStack = searchParams.get('techStack') || '';
  const page = Number(searchParams.get('page')) || 1;
  const limit = 10; // one page limit
  const offset = (page - 1) * limit;

  const filters = techStack ? `techStack[contains]${techStack}` : undefined;

  const notes = await getNotesList({ filters, limit, offset });

  return NextResponse.json(notes);
}

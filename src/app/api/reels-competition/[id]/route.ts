import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

async function getDb() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

async function saveDb(data: any) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const body = await request.json();
    const db = await getDb();
    
    if (!db.competitionEntries) return NextResponse.json({ error: 'No entries' }, { status: 404 });
    
    const index = db.competitionEntries.findIndex((e: any) => e.id === id);
    if (index === -1) return NextResponse.json({ error: 'Entry not found' }, { status: 404 });
    
    db.competitionEntries[index] = { ...db.competitionEntries[index], ...body };
    await saveDb(db);
    
    return NextResponse.json(db.competitionEntries[index]);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update entry' }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';
const dbPath = path.join(process.cwd(), 'db.json');

export async function GET() {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    const db = JSON.parse(data);
    return NextResponse.json(db.competitionEntries || []);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch entries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await fs.readFile(dbPath, 'utf8');
    const db = JSON.parse(data);
    
    const newEntry = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...body
    };
    
    db.competitionEntries = db.competitionEntries || [];
    db.competitionEntries.push(newEntry);
    
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, entry: newEntry });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to submit entry' }, { status: 500 });
  }
}

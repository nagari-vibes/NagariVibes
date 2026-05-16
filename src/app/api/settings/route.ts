import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

async function getDb() {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return {};
  }
}

async function saveDb(db: any) {
  await fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8');
}

export async function GET() {
  try {
    const db = await getDb();
    return NextResponse.json(db.settings || {});
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch settings' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const body = await request.json();
    const db = await getDb();
    
    db.settings = { ...db.settings, ...body };
    await saveDb(db);
    
    return NextResponse.json(db.settings);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update settings' }, { status: 500 });
  }
}

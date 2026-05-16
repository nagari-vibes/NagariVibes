import { NextResponse } from 'next/server';
import { getDb, saveDb } from '@/lib/db'; // Resolved with alias

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

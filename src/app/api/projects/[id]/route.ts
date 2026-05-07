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

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const db = await getDb();
    
    if (db.projects) {
      db.projects = db.projects.filter((p: any) => p.id !== id);
      await saveDb(db);
    }
    
    return NextResponse.json({ message: 'Project deleted' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await request.json();
    const db = await getDb();
    
    if (db.projects) {
      const index = db.projects.findIndex((p: any) => p.id === id);
      if (index !== -1) {
        const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : id;
        const autoLink = `/projects/${slug}-${id}`;
        db.projects[index] = { ...db.projects[index], ...body, link: autoLink };
        await saveDb(db);
        return NextResponse.json(db.projects[index]);
      }
    }
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

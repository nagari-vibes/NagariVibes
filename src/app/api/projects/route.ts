import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export const dynamic = 'force-dynamic';
const dbPath = path.join(process.cwd(), 'db.json');

async function getDb() {
  const data = await fs.readFile(dbPath, 'utf8');
  return JSON.parse(data);
}

async function saveDb(data: any) {
  await fs.writeFile(dbPath, JSON.stringify(data, null, 2), 'utf8');
}

export async function GET() {
  try {
    const db = await getDb();
    const projects = db.projects || [];
    // Sort descending by createdAt
    projects.sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const db = await getDb();
    
    const id = Date.now().toString();
    // Auto-generate link based on title slug or ID
    const slug = body.title ? body.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : id;
    const autoLink = `/projects/${slug}-${id}`;
    
    const newProject = {
      id,
      createdAt: new Date().toISOString(),
      link: autoLink,
      ...body
    };
    
    db.projects = db.projects || [];
    db.projects.push(newProject);
    
    await saveDb(db);
    
    return NextResponse.json(newProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}

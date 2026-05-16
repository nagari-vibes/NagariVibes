import fs from 'fs/promises';
import path from 'path';

const dbPath = path.join(process.cwd(), 'db.json');

export async function getDb() {
  try {
    const data = await fs.readFile(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading DB:', error);
    return {};
  }
}

export async function saveDb(db: any) {
  try {
    await fs.writeFile(dbPath, JSON.stringify(db, null, 2), 'utf8');
    return true;
  } catch (error) {
    console.error('Error saving DB:', error);
    return false;
  }
}

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pool } from './db.mjs';

export async function initDb() {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  const schemaPath = path.resolve(__dirname, 'schema.sql');
  const schema = fs.readFileSync(schemaPath, 'utf-8');

  try {
    await pool.query(schema);
    console.info('✅ DB schema initialized');
  } catch (err) {
    if (err.message.includes('already exists')) {
      console.info('⚠️ Table already exists. Skipping creation.');
    } else {
      console.error('❌ Failed to initialize schema:', err.message);
    }
  }
}
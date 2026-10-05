import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import initSqlJs from 'sql.js';
const here=path.dirname(fileURLToPath(import.meta.url));
const dbPath=path.resolve(here,'../../../database/data/ondetem.db');
let db;
export async function getDb(){if(db)return db;const entry=fileURLToPath(import.meta.resolve('sql.js'));const SQL=await initSqlJs({locateFile:f=>path.join(path.dirname(entry),f)});db=fs.existsSync(dbPath)?new SQL.Database(fs.readFileSync(dbPath)):new SQL.Database();db.run('PRAGMA foreign_keys=ON');return db;}
export function saveDb(){if(db)fs.writeFileSync(dbPath,Buffer.from(db.export()));}

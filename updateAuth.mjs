import fs from 'fs';

// 1. Parse current UkmAuth.ts
const authContent = fs.readFileSync('src/data/UkmAuth.ts', 'utf-8');
const authMap = new Map();
const regexAuth = /id:\s*['"]([^'"]+)['"],\s*username:\s*['"]([^'"]+)['"],\s*password:\s*['"]([^'"]+)['"]/g;
let match;
while ((match = regexAuth.exec(authContent)) !== null) {
  authMap.set(match[1], { username: match[2], password: match[3] });
}

// 2. Parse UkmLogic.ts
const ukmContent = fs.readFileSync('src/data/UkmLogic.ts', 'utf-8');
const ukms = [];
// This regex looks for id: "ukm-XXX" and then name: "YYY"
const regexUkm = /id:\s*['"](ukm-[^'"]+)['"][\s\S]*?name:\s*['"]([^'"]+)['"]/g;
while ((match = regexUkm.exec(ukmContent)) !== null) {
  ukms.push({ id: match[1], name: match[2], type: 'UKM' });
}

// 3. Parse UkmPaguyubanData.ts
const pagContent = fs.readFileSync('src/data/UkmPaguyubanData.ts', 'utf-8');
const pags = [];
// Paguyuban might use title instead of name
const regexPag = /id:\s*['"](pg-[^'"]+)['"][\s\S]*?(?:title|name):\s*['"]([^'"]+)['"]/g;
while ((match = regexPag.exec(pagContent)) !== null) {
  pags.push({ id: match[1], name: match[2], type: 'PAGUYUBAN' });
}

// Utility to generate a username from a name
function generateUsername(name, type) {
  let cleaned = name.toLowerCase().replace(/[^a-z0-9]/g, '');
  if (cleaned.startsWith('ukm')) cleaned = cleaned.replace('ukm', '');
  if (cleaned.startsWith('himpunanmahasiswa')) cleaned = cleaned.replace('himpunanmahasiswa', 'hm');
  if (cleaned.startsWith('keluargamahasiswa')) cleaned = cleaned.replace('keluargamahasiswa', 'km');
  return cleaned.substring(0, 12);
}

// 4. Generate new UkmAuth.ts
let newAuthContent = `export interface UkmAuthEntry {
  id: string;
  username: string;
  password: string;
  name: string;
}

export const ukmAuthData: UkmAuthEntry[] = [
  // --- UKM ---
`;

const writtenIds = new Set();

function appendEntries(list) {
  for (const item of list) {
    if (writtenIds.has(item.id)) continue;
    writtenIds.add(item.id);
    
    let username = "";
    let password = "pangsudsukses"; // Default temporary password
    
    if (authMap.has(item.id)) {
      const existing = authMap.get(item.id);
      username = existing.username;
      password = existing.password;
    } else {
      username = generateUsername(item.name, item.type);
    }

    newAuthContent += `  {
    id: "${item.id}",
    username: "${username}",
    password: "${password}",
    name: "${item.name}",
  },
`;
  }
}

appendEntries(ukms);

newAuthContent += `
  // --- PAGUYUBAN ---
`;

appendEntries(pags);

newAuthContent += `];\n`;

fs.writeFileSync('src/data/UkmAuth.ts', newAuthContent, 'utf-8');
console.log('Successfully updated UkmAuth.ts!');

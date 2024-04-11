// Replaces "exports.default" with "module.exports" in all .js files in dist directory
import fs from 'node:fs';
import path from 'node:path';

const files = fs.readdirSync('dist', { recursive: true }) as string[];

const jsFiles = files.filter((file) => path.extname(file) === '.js');

for (const file of jsFiles) {
  const filePath = path.join('dist', file);

  const content = fs.readFileSync(filePath, 'utf-8');
  const newContent = content.replace(/exports\.default/g, 'module.exports');

  fs.writeFileSync(filePath, newContent);
}

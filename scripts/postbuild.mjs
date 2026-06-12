import { rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const distDir = path.resolve(__dirname, '../dist');

// Keep the SPA entry out of / so Vercel can 302 the domain root to Webflow.
await rename(path.join(distDir, 'index.html'), path.join(distDir, 'spa-index.html'));

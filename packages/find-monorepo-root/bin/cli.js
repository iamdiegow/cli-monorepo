#!/usr/bin/env node

import { walkUpwards } from '../src/index.js';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

walkUpwards(process.cwd(), (files) => {
  return files.includes('turbo.json');
});

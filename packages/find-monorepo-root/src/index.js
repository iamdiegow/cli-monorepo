import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'fs-extra';

import { getPathSegments } from './getPathSegments.js';
import { getAbsolutePath } from './getAbsolutePath.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function walkUpwards(baseDir, condition) {
  const pathSegments = getPathSegments(baseDir);

  let isConditionMet = false;
  let index = 0;
  let result = '';

  while (!isConditionMet && index < pathSegments.length) {
    const pathToExplore = getAbsolutePath(baseDir, pathSegments[index]);
    console.error(`Evaluating ${pathToExplore}`);
    const isMatch = condition(await fs.readdir(pathToExplore));
    if (isMatch) {
      isConditionMet = true;
      result = pathToExplore;
      console.error(`Found a result at ${pathToExplore}`);
    }
    index++;
  }
	console.log(result);
  return result;
}

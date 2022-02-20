import os from 'node:os';
import path from 'node:path';

export function getPathSegments(dir) {
  return path
    .resolve(dir)
    .split(path.sep)
    .filter((pathSegment) => !os.homedir().includes(pathSegment))
    .reverse();
}

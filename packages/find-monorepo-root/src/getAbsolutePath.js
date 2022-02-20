import path from 'node:path';

export function getAbsolutePath(dir, pathSegment) {
  return path.resolve(dir.split(pathSegment)[0], pathSegment);
}

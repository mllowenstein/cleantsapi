import path from 'path';
import { fileURLToPath } from 'url';

/**
 * Returns the directory name of the current ES module file.
 * Mimics CommonJS __dirname behavior.
 *
 * @param metaUrl - Typically pass `import.meta.url`
 * @returns Directory path as a string
 */
export function getDirname(metaUrl: string): string {
  const filePath = fileURLToPath(metaUrl);
  return path.dirname(filePath);
}

/**
 * Returns the full file path of the current ES module file.
 * Mimics CommonJS __filename behavior.
 *
 * @param metaUrl - Typically pass `import.meta.url`
 * @returns Full file path as a string
 */
export function getFilename(metaUrl: string): string {
  return fileURLToPath(metaUrl);
}

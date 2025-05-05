import path from 'path';
import { getDirname } from '@utils/esm.utils';

const __dirname = getDirname(import.meta.url);

const METADATA_PATH = path.join(__dirname, '../../jobs/metadata.json');

console.log(`Resolved metadata path: ${METADATA_PATH}`);

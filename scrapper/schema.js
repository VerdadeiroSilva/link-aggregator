import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function loadSchema(siteName) {
    const filePath = path.join(__dirname, "schemas", `${siteName}.json`);

    if (!fs.existsSync(filePath)) {
        throw new Error(`Schema para "${siteName}" não encontrado em ${filePath}`);
    }

    const raw = fs.readFileSync(filePath);
    return JSON.parse(raw);
}
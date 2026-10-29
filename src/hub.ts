import {mkdirSync} from 'node:fs';
import path from 'node:path';

export const HUB_DIRS = ['agents', 'skills', 'commands', 'output-styles'] as const;

export const hubDir = (yenaData: string): string => path.join(yenaData, 'md');

export function ensureHub(dir: string): void {
	for (const name of HUB_DIRS) mkdirSync(path.join(dir, name), {recursive: true});
}

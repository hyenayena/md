import {mkdirSync} from 'node:fs';
import path from 'node:path';

/** Folders every hub has; agents link their own config to them (e.g. Claude's config/agents, config/commands). */
export const HUB_DIRS = ['agents', 'skills', 'commands', 'output-styles'] as const;

/** The hub lives in the md module's data dir: <YENA_DATA>/md. */
export const hubDir = (yenaData: string): string => path.join(yenaData, 'md');

/** Creates the hub and its folders when missing. */
export function ensureHub(dir: string): void {
	for (const name of HUB_DIRS) mkdirSync(path.join(dir, name), {recursive: true});
}

// The md module's public entry: other modules import only this file (through one adapter file of
// their own, with md in their yena.json dependencies). Pure: no host values, no React or Ink.
import path from 'node:path';
import {ensureHub, HUB_DIRS, hubDir} from './hub.js';

export {ensureHub, HUB_DIRS};

/**
 * The hub, from any module's own data dir: module data dirs are siblings under YENA_DATA, and the
 * hub is md's data dir. Only md knows this layout; callers never build the path themselves.
 */
export const hubDirFor = (moduleDataDir: string): string => hubDir(path.dirname(moduleDataDir));

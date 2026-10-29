import path from 'node:path';
import {ensureHub, HUB_DIRS, hubDir} from './hub.js';

export {ensureHub, HUB_DIRS};

export const hubDirFor = (moduleDataDir: string): string => hubDir(path.dirname(moduleDataDir));

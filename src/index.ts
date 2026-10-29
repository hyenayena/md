import type {ModulePlugin} from '../../../src/api.js';
import {ensureHub} from './hub.js';

const plugin: ModulePlugin = host => {
	try {
		ensureHub(host.dataDir);
	} catch (error) {
		host.log.warn('hub not created', {dir: host.dataDir, err: error});
	}
	return [];
};

export default plugin;

import type {ModulePlugin} from '../../../src/api.js';
import {ensureHub} from './hub.js';

// No commands: the module only keeps the hub in its data dir (<YENA_DATA>/md) in place.
const plugin: ModulePlugin = host => {
	try {
		ensureHub(host.dataDir);
	} catch (error) {
		host.log.warn('hub not created', {dir: host.dataDir, err: error});
	}
	return [];
};

export default plugin;

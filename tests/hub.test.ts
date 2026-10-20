import assert from 'node:assert/strict';
import {mkdtempSync, rmSync, statSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {after, describe, it} from 'node:test';
import {ensureHub, HUB_DIRS, hubDir} from '../src/hub.js';
import plugin from '../src/index.js';

const tmp = mkdtempSync(path.join(tmpdir(), 'md-hub-'));
after(() => rmSync(tmp, {recursive: true, force: true}));

const noop = () => {};
const log = {error: noop, warn: noop, info: noop, debug: noop, addRedactor: noop, child: () => log};

describe('hub', () => {
	it('lives in <YENA_DATA>/md', () => {
		assert.equal(hubDir('/data'), path.join('/data', 'md'));
	});

	it('creates its folders and can run again', () => {
		const dir = path.join(tmp, 'a', 'md');
		ensureHub(dir);
		ensureHub(dir);
		for (const name of HUB_DIRS) assert.ok(statSync(path.join(dir, name)).isDirectory());
	});

	it('the plugin creates the hub in its data dir and adds no commands', async () => {
		const dir = path.join(tmp, 'b');
		const commands = await plugin({dataDir: dir, log, events: {emit: noop, on: () => noop}});
		assert.deepEqual(commands, []);
		for (const name of HUB_DIRS) assert.ok(statSync(path.join(dir, name)).isDirectory());
	});
});

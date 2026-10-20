# md
Central hub of md files for yena's agents.

It is a yena plugin (`runtime: "node"`, `entry: src/index.ts`) with no commands. On load it makes sure the hub exists in its data dir, `<YENA_DATA>/md` (`.yena/md` locally, `/data/md` in the container), with the folders `agents/` and `skills/`.

The hub holds what every agent can inherit: instructions (`CLAUDE.md`, `SOUL.md`, …), subagents (`agents/*.md`) and skills (`skills/<name>/SKILL.md`). Agent modules depend on `md` and link to the hub instead of keeping their own copies; for example the `claude` module makes `<YENA_DATA>/claude/md` a symlink to `../md`, and its `config/agents` and `config/skills` point into it.

Code: `src/hub.ts` (`hubDir`, `ensureHub`, `HUB_DIRS`).

<div align="center">
  <h1>learning-coach-skill</h1>
  <p><a href="https://github.com/GUOBA250/learning-coach-skill/blob/main/README.md">简体中文</a></p>
  <p><em>Your personal AI learning coach: memorize interview questions, grind algorithms, read source code, and beat procrastination.</em></p>
  <p>
    <a href="LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg"></a>
    <img alt="Type: Agent Skill" src="https://img.shields.io/badge/Type-Agent%20Skill-7c3aed">
    <img alt="Trae Compatible" src="https://img.shields.io/badge/Trae-Compatible-111827">
    <img alt="Cursor Compatible" src="https://img.shields.io/badge/Cursor-Compatible-00B8D9">
    <img alt="Claude Code Compatible" src="https://img.shields.io/badge/Claude%20Code-Compatible-7c3aed">
    <img alt="Codex Compatible" src="https://img.shields.io/badge/Codex-Compatible-0A66C2">
  </p>
</div>

An AI study coach that helps you memorize interview questions, grind algorithms, and read project source code. Works for frontend, backend, and full-stack learning alike — and when you procrastinate, it switches to PlanCoach mode and pulls you into study state step by step.

## Core Capabilities

- Interview questions: four-part explanations (plain-language walkthrough + text flowchart + 75-80 point core answer + follow-ups), with line-by-line correction after you restate it
- Algorithms: Code Caprice style — "why this method" first, then "how", emphasizing frameworks, common pitfalls, and complexity
- Source reading: function map up front, bottom-up line-by-line walkthrough, review questions and self-check list per block
- Get started: PlanCoach mode — no lectures, just tiny actions, one at a time
- Progress continuity: remembers where you left off and picks up next session
- One CLI, many targets: global and project-level installs for generic Agents, Trae, Cursor, Claude Code, and Codex

## Quick Start

```bash
npx learning-coach-skill install
```

After installation, open a new chat in the project root and enter:

```text
/learning-coach 背八股，下一题
/learning-coach 刷算法，下一题
/learning-coach 继续读 MiniVue，讲 parse.ts
/learning-coach 我不想学，帮我开始
```

## Install

The default target is the user-level generic Agent directory:

```text
~/.agents/skills/learning-coach-skill/
```

If you know which editor or Agent you use, specify it explicitly:

| Target | User-level command | Install location |
|--------|--------------------|------------------|
| Generic Agent / Codex | `npx learning-coach-skill install` | `~/.agents/skills/learning-coach-skill/` |
| Trae | `npx learning-coach-skill install --trae` | `~/.trae/skills/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --cursor` | `~/.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --claude-code` | `~/.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --codex` | `~/.agents/skills/learning-coach-skill/` |

Install every supported target:

```bash
npx learning-coach-skill install --all
```

Preview paths without writing files:

```bash
npx learning-coach-skill doctor
```

## Project-Level Install

To install the skill only for one application repository, run the command from that repository root:

```bash
cd /path/to/your-project
npx learning-coach-skill install --project --trae
```

Supported project-level targets:

| Target | Project-level command | Install location |
|--------|-----------------------|------------------|
| Trae | `npx learning-coach-skill install --project --trae` | `.trae/rules/learning-coach-skill/` |
| Cursor | `npx learning-coach-skill install --project --cursor` | `.cursor/rules/learning-coach-skill/` |
| Claude Code | `npx learning-coach-skill install --project --claude-code` | `.claude/skills/learning-coach-skill/` |
| Codex | `npx learning-coach-skill install --project --codex` | `.agents/skills/learning-coach-skill/` |

Install every project-level target at once:

```bash
npx learning-coach-skill install --project --all
```

Restart the target IDE or Agent after installation.

## Repository Structure

```text
learning-coach-skill/
├── skill/
│   └── learning-coach/
│       ├── SKILL.md
│       ├── references/
│       │   ├── rules/
│       │   │   ├── 八股规范.md
│       │   │   ├── 算法规范.md
│       │   │   ├── 项目规范.md
│       │   │   └── 状态教练.md
│       │   ├── templates/
│       │   │   ├── 八股模板.md
│       │   │   ├── 算法模板.md
│       │   │   └── 项目模板.md
│       │   └── examples/
│       │       └── 示例对话.md
│       └── scripts/
├── bin/
│   └── learning-coach-skill.js
├── package.json
├── README.md
├── README_EN.md
├── LICENSE
└── .gitignore
```

## Core Files

| File / Directory | Purpose |
|------|------|
| `skill/learning-coach/SKILL.md` | Skill entry: declares when to activate, which reference to load per request, output conventions across all scenarios, progress tracking and review advice |
| `skill/learning-coach/references/rules/` | Four rule sets: interview-question four-part structure, Code Caprice algorithm style, line-by-line source reading, and PlanCoach kickstart — decide "how to teach" |
| `skill/learning-coach/references/templates/` | Three output templates for interview questions, algorithms, and source files — decide "what it looks like" |

The Skill is portable on its own: copy `skill/learning-coach/` — `bin/` and `package.json` are not required. The CLI also builds installed targets from this directory only.

## FAQ

### Why does the default install target `.agents/skills`?

It is the least surprising user-level default and avoids guessing which product you use. Pass an explicit flag for Trae, Cursor, Claude Code, or Codex.

### Does `install` auto-detect products?

No. The behavior is intentionally narrow: the default installs only to `.agents/skills`, product-specific installs require `--trae`, `--cursor`, `--claude-code`, or `--codex`. `doctor` only prints paths.

### Do updates apply automatically?

No. Installed skill folders are copied artifacts. Re-run the install command:

```bash
npx learning-coach-skill install --trae
```

### How do I limit the skill to one project?

Run the command from that project root with `--project` plus a target flag, e.g. `npx learning-coach-skill install --project --trae`, and the skill lands in `./.trae/rules/learning-coach-skill/`.

## License

Licensed under the **[MIT License](LICENSE)**. The file includes the English legal text plus an unofficial Chinese translation for convenience; if they disagree, the English section controls.
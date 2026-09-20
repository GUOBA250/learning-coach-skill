#!/usr/bin/env node

/**
 * learning-coach-skill CLI 安装器
 * 功能: 将「学习教练」Agent Skill 安装到各平台技能目录
 */

'use strict';

const fs = require('fs');
const os = require('os');
const path = require('path');

const PACKAGE_NAME = 'learning-coach-skill';
const SKILL_NAME = 'learning-coach';

// skill 源目录: <项目根>/skill/learning-coach
const SOURCE_DIR = path.join(__dirname, '..', 'skill', SKILL_NAME);

// ---------- 安装目标定义 ----------

// 全局安装目标（用户主目录下）
const GLOBAL_TARGETS = {
  default: {
    label: '默认 (Agents)',
    dir: path.join(os.homedir(), '.agents', 'skills', PACKAGE_NAME),
  },
  trae: {
    label: 'Trae 全局',
    dir: path.join(os.homedir(), '.trae', 'skills', PACKAGE_NAME),
  },
  cursor: {
    label: 'Cursor 全局',
    dir: path.join(os.homedir(), '.cursor', 'rules', PACKAGE_NAME),
  },
  'claude-code': {
    label: 'Claude Code 全局',
    dir: path.join(os.homedir(), '.claude', 'skills', PACKAGE_NAME),
  },
  codex: {
    label: 'Codex 全局',
    dir: path.join(os.homedir(), '.agents', 'skills', PACKAGE_NAME),
  },
};

// 项目级安装目标（相对当前工作目录）
const PROJECT_TARGETS = {
  trae: {
    label: 'Trae 项目',
    dir: path.resolve(process.cwd(), '.trae', 'rules', PACKAGE_NAME),
  },
  cursor: {
    label: 'Cursor 项目',
    dir: path.resolve(process.cwd(), '.cursor', 'rules', PACKAGE_NAME),
  },
  'claude-code': {
    label: 'Claude Code 项目',
    dir: path.resolve(process.cwd(), '.claude', 'skills', PACKAGE_NAME),
  },
  codex: {
    label: 'Codex 项目',
    dir: path.resolve(process.cwd(), '.agents', 'skills', PACKAGE_NAME),
  },
};

const HELP_TEXT = `
learning-coach-skill — 学习教练 Agent Skill 安装器

用法:
  npx learning-coach-skill install [选项]    安装 skill
  npx learning-coach-skill doctor  [选项]    仅展示将安装的路径（不写入文件）
  npx learning-coach-skill --help            显示本帮助

全局目标 (install 不带任何目标参数时使用默认):
  (默认)        ~/.agents/skills/learning-coach-skill/
  --trae        ~/.trae/skills/learning-coach-skill/
  --cursor      ~/.cursor/rules/learning-coach-skill/
  --claude-code ~/.claude/skills/learning-coach-skill/
  --codex       ~/.agents/skills/learning-coach-skill/
  --all         安装到所有支持的全局目标

项目目标 (需 --project 与目标参数配合, 相对当前目录):
  --project --trae         ./.trae/rules/learning-coach-skill/
  --project --cursor       ./.cursor/rules/learning-coach-skill/
  --project --claude-code  ./.claude/skills/learning-coach-skill/
  --project --codex        ./.agents/skills/learning-coach-skill/
  --project --all          安装到所有支持的项目目标

示例:
  npx learning-coach-skill install
  npx learning-coach-skill install --trae
  npx learning-coach-skill install --cursor
  npx learning-coach-skill install --project --trae
  npx learning-coach-skill doctor
`;

// ---------- 参数解析 ----------

function parseArgs(argv) {
  const opts = {
    command: null,
    targetFlags: [],
    project: false,
    all: false,
    help: false,
  };

  for (const arg of argv) {
    if (arg === 'install' || arg === 'doctor') {
      opts.command = arg;
    } else if (arg === '--trae' || arg === '--cursor' || arg === '--claude-code' || arg === '--codex') {
      opts.targetFlags.push(arg.slice(2));
    } else if (arg === '--project') {
      opts.project = true;
    } else if (arg === '--all') {
      opts.all = true;
    } else if (arg === '--help' || arg === '-h') {
      opts.help = true;
    } else {
      console.error(`未知参数: ${arg}`);
      console.error(HELP_TEXT);
      process.exit(1);
    }
  }
  return opts;
}

// ---------- 目标解析 ----------

function resolveTargets(opts) {
  const pool = opts.project ? PROJECT_TARGETS : GLOBAL_TARGETS;
  const picked = [];
  const seen = new Set();

  const push = (key) => {
    const target = pool[key];
    if (!target) {
      console.error(`未知安装目标: ${key}`);
      process.exit(1);
    }
    // 默认与 codex 指向同一目录, 去重避免重复安装
    if (!seen.has(target.dir)) {
      seen.add(target.dir);
      picked.push({ key, ...target });
    }
  };

  if (opts.all) {
    for (const key of Object.keys(pool)) push(key);
    return picked;
  }

  if (opts.targetFlags.length > 0) {
    for (const key of opts.targetFlags) push(key);
    return picked;
  }

  if (opts.project) {
    console.error('错误: --project 需要配合目标参数使用');
    console.error('可用: --trae / --cursor / --claude-code / --codex / --all');
    console.error('示例: npx learning-coach-skill install --project --trae');
    process.exit(1);
  }

  push('default');
  return picked;
}

// ---------- 文件操作 ----------

function copyRecursive(srcDir, destDir) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else if (entry.isFile()) {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installTo(destDir) {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`错误: 找不到 skill 源目录: ${SOURCE_DIR}`);
    console.error('请确认在 learning-coach-skill 项目内运行。');
    process.exit(1);
  }
  copyRecursive(SOURCE_DIR, destDir);
  return destDir;
}

// ---------- doctor ----------

function printDoctor(picked, opts) {
  const pool = opts.project ? PROJECT_TARGETS : GLOBAL_TARGETS;
  const chosen = new Set(picked.map((t) => t.dir));

  console.log('');
  console.log('='.repeat(56));
  console.log(' learning-coach-skill 诊断 (doctor)');
  console.log(' 仅展示路径，不写入任何文件');
  console.log('='.repeat(56));
  console.log('');
  console.log(`安装源 : ${SOURCE_DIR}`);
  console.log(`模式   : ${opts.project ? `项目模式 (当前目录: ${process.cwd()})` : '全局模式'}`);
  console.log('');
  console.log('可用目标:');
  console.log('');

  // 按目录分组显示（默认与 codex 指向同一目录）
  const groups = new Map();
  for (const [key, t] of Object.entries(pool)) {
    if (!groups.has(t.dir)) groups.set(t.dir, []);
    const name = key === 'default' ? t.label : `${t.label} (--${key})`;
    groups.get(t.dir).push(name);
  }

  for (const [dir, labels] of groups) {
    const mark = chosen.has(dir) ? '[将安装]' : '        ';
    console.log(`  ${mark} ${labels.join(' / ')}`);
    console.log(`          -> ${dir}`);
  }
  console.log('');
}

// ---------- 入口 ----------

function main() {
  const opts = parseArgs(process.argv.slice(2));

  if (opts.help || !opts.command) {
    console.log(HELP_TEXT);
    return;
  }

  const targets = resolveTargets(opts);

  if (opts.command === 'doctor') {
    printDoctor(targets, opts);
    return;
  }

  // install
  console.log('');
  console.log(`将安装到 ${targets.length} 个目标:`);
  for (const t of targets) {
    console.log(`  -> ${t.dir}`);
  }
  console.log('');

  for (const t of targets) {
    installTo(t.dir);
    console.log(`已安装到 ${t.dir}`);
  }
  console.log('');
  console.log('安装完成。');
}

main();
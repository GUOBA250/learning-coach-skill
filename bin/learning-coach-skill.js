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
const MANIFEST_NAME = '.installed-manifest.json';

// skill 源目录: <项目根>/skill/learning-coach
const SOURCE_DIR = path.join(__dirname, '..', 'skill', SKILL_NAME);

// 已发布包内的版本号（开发态取不到时给占位，不影响安装）
let pkgVersion = '0.0.0';
try {
  pkgVersion = require(path.join(__dirname, '..', 'package.json')).version;
} catch (_) {
  /* 忽略，使用占位版本 */
}

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
  npx learning-coach-skill doctor  [选项]    展示将安装的路径与当前安装状态（不写入文件）
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
    if (opts.targetFlags.length > 0) {
      console.warn('提示: --all 已包含全部目标，额外指定的 '
        + `${opts.targetFlags.map((k) => `--${k}`).join(' / ')} 将被忽略。`);
    }
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

// 递归列举源目录下全部文件（相对路径，统一用 / 分隔；符号链接跟随到实际目标）
function listFiles(srcDir, baseDir = srcDir, out = []) {
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const full = path.join(srcDir, entry.name);
    // 符号链接按其指向目标的类型处理（文件/目录），断链的链接直接跳过
    let stat = null;
    if (entry.isSymbolicLink()) {
      try {
        stat = fs.statSync(full);
      } catch (_) {
        continue;
      }
    }
    if (entry.isDirectory() || (stat && stat.isDirectory())) {
      listFiles(full, baseDir, out);
    } else if (entry.isFile() || (stat && stat.isFile())) {
      out.push(path.relative(baseDir, full).split(path.sep).join('/'));
    }
  }
  return out;
}

function copyRecursive(srcDir, destDir, baseDir = destDir, copied = []) {
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);
    let stat = null;
    if (entry.isSymbolicLink()) {
      try {
        stat = fs.statSync(srcPath);
      } catch (_) {
        continue; // 断链的符号链接跳过，不阻塞安装
      }
    }
    if (entry.isDirectory() || (stat && stat.isDirectory())) {
      copyRecursive(srcPath, destPath, baseDir, copied);
    } else if (entry.isFile() || (stat && stat.isFile())) {
      // copyFileSync 跟随符号链接：安装产物是常规文件，不带用户本机路径
      fs.copyFileSync(srcPath, destPath);
      copied.push(path.relative(baseDir, destPath).split(path.sep).join('/'));
    }
  }
  return copied;
}

// 只允许删除安装根目录内的文件，防止清单内容异常时越界
function safeUnlink(destDir, rel) {
  const root = path.resolve(destDir);
  const target = path.resolve(root, rel);
  if (target !== root && !target.startsWith(root + path.sep)) return false;
  try {
    if (fs.existsSync(target) && fs.statSync(target).isFile()) {
      fs.unlinkSync(target);
      return true;
    }
  } catch (_) {
    /* 删除失败跳过，不阻塞安装 */
  }
  return false;
}

// 删除孤儿文件后，递归清空残留的空目录（不动根目录本身）
function pruneEmptyDirs(root) {
  const walk = (dir) => {
    let entries = [];
    try {
      entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch (_) {
      return;
    }
    for (const entry of entries) {
      if (entry.isDirectory()) walk(path.join(dir, entry.name));
    }
    if (path.resolve(dir) !== path.resolve(root)) {
      try {
        fs.rmdirSync(dir);
      } catch (_) {
        /* 目录非空，保留 */
      }
    }
  };
  walk(root);
}

function readManifest(destDir) {
  const file = path.join(destDir, MANIFEST_NAME);
  if (!fs.existsSync(file)) return null;
  try {
    const data = JSON.parse(fs.readFileSync(file, 'utf8'));
    if (data && Array.isArray(data.files)) return data;
  } catch (_) {
    /* 清单损坏：返回空清单对象，标记为不可信，不据此删文件 */
  }
  return { files: null, corrupted: true };
}

// 安装前只检查一次源目录（多目标安装共用）
function ensureSourceExists() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`错误: 找不到 skill 源目录: ${SOURCE_DIR}`);
    console.error('请确认在 learning-coach-skill 项目内运行，或重新安装最新版本的 npm 包。');
    process.exit(1);
  }
}

function installTo(destDir) {
  // 升级保护：只有带本工具清单的目录才清理旧文件；其他目录只合并覆盖、不动用户文件
  const existed = fs.existsSync(destDir);
  const manifest = existed ? readManifest(destDir) : null;
  if (existed && (!manifest || manifest.corrupted)) {
    console.warn(`  ⚠️  目标目录非本工具托管（缺少或无法读取 ${MANIFEST_NAME}）：${destDir}`);
    console.warn('      将合并覆盖同名文件，但不会删除目录内的其他文件；需要干净安装请先手动清空该目录。');
  }

  const newFiles = listFiles(SOURCE_DIR);
  copyRecursive(SOURCE_DIR, destDir);

  // 清掉旧版本有、新版本没有的文件
  let removed = 0;
  if (manifest && Array.isArray(manifest.files)) {
    const next = new Set(newFiles);
    next.add(MANIFEST_NAME);
    for (const rel of manifest.files) {
      if (!next.has(rel) && safeUnlink(destDir, rel)) removed++;
    }
    pruneEmptyDirs(destDir);
  }

  fs.writeFileSync(
    path.join(destDir, MANIFEST_NAME),
    JSON.stringify({ package: PACKAGE_NAME, version: pkgVersion, files: newFiles }, null, 2) + '\n'
  );

  return { removed };
}

// ---------- doctor ----------

function printDoctor(picked, opts) {
  const pool = opts.project ? PROJECT_TARGETS : GLOBAL_TARGETS;
  const chosen = new Set(picked.map((t) => t.dir));

  console.log('');
  console.log('='.repeat(56));
  console.log(' learning-coach-skill 诊断 (doctor)');
  console.log(' 仅展示路径与安装状态，不写入任何文件');
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
    console.log(`          状态: ${describeInstallState(dir)}`);
  }
  console.log('');
}

// 识别目标目录当前的安装状态（只读，不修改任何文件）
function describeInstallState(dir) {
  if (!fs.existsSync(dir)) return '未安装';
  const manifest = readManifest(dir);
  if (manifest && !manifest.corrupted) return `已安装（本工具托管，版本 v${manifest.version || '未知'}）`;
  if (manifest && manifest.corrupted) return '目录已存在（清单损坏，安装时不会清理其中文件）';
  try {
    if (fs.readdirSync(dir).length === 0) return '目录已存在（空）';
  } catch (_) {
    /* 忽略读取异常，按非托管处理 */
  }
  return '目录已存在（非本工具托管，安装时只合并覆盖、不删文件）';
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
  ensureSourceExists();
  console.log('');
  console.log(`将安装到 ${targets.length} 个目标:`);
  for (const t of targets) {
    console.log(`  -> ${t.dir}`);
  }
  console.log('');

  for (const t of targets) {
    try {
      const { removed } = installTo(t.dir);
      console.log(`已安装到 ${t.dir}${removed > 0 ? `（清理旧版本残留文件 ${removed} 个）` : ''}`);
    } catch (err) {
      console.error(`安装失败: ${t.dir}`);
      console.error(`原因: ${err.message}`);
      console.error('请检查目录权限（必要时修正属主，见 README 故障排查）后重试。');
      process.exit(1);
    }
  }
  console.log('');
  console.log('安装完成。');
}

main();
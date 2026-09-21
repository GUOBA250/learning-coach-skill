#!/usr/bin/env node
/**
 * check-refs.js — 校验 skill 内所有 Markdown 交叉引用的文件是否真实存在。
 * 纯 Node、零依赖，Windows / macOS / Linux 均可运行：npm test
 *
 * 校验范围：
 *  1. SKILL.md 分发表与正文中引用的 references/*.md
 *  2. rules/ templates/ examples/ 内互相引用（`xxx.md`、references/...、相对链接）
 *  3. README.md / README_EN.md 指向 skill/ 内文件的链接
 * 退出码：发现断链 = 1，否则 = 0
 */

const fs = require('fs')
const path = require('path')

const repoRoot = path.resolve(__dirname, '..')
const skillDir = path.join(repoRoot, 'skill', 'learning-coach')

const MD_FILES = []
function collectMd(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      collectMd(full)
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      MD_FILES.push(full)
    }
  }
}
collectMd(skillDir)
for (const f of ['README.md', 'README_EN.md']) {
  const full = path.join(repoRoot, f)
  if (fs.existsSync(full)) MD_FILES.push(full)
}

// 收集 skill 内全部 .md 的 basename → 路径，用于校验裸文件名引用
const basenameIndex = new Map()
for (const f of MD_FILES) {
  if (f.startsWith(skillDir)) {
    const list = basenameIndex.get(path.basename(f)) || []
    list.push(f)
    basenameIndex.set(path.basename(f), list)
  }
}

const errors = []
let refCount = 0

// 每个文件只读一次，正向断链检查和反向孤儿检查共用
const textCache = new Map()
function readText(file) {
  if (!textCache.has(file)) textCache.set(file, fs.readFileSync(file, 'utf8'))
  return textCache.get(file)
}

// 提取三类引用：`xxx.md` 裸文件名 / references/xx.md / ](相对路径.md)
const refPattern = /(?:`(references\/[^`\s)]+\.md)`)|(?:`([^`\s/]+\.md)`)|(?:\]\(([^)\s#]+\.md)(?:#[^)]*)?\))/g

for (const file of MD_FILES) {
  const lines = readText(file).split(/\r?\n/)
  lines.forEach((line, i) => {
    let m
    refPattern.lastIndex = 0
    while ((m = refPattern.exec(line)) !== null) {
      const ref = m[1] || m[2] || m[3]
      if (/^https?:/i.test(ref)) continue
      refCount++

      let target = null
      if (ref.startsWith('references/')) {
        target = path.join(skillDir, ref)
      } else if (ref.includes('/')) {
        target = path.resolve(path.dirname(file), ref)
      } else {
        // 裸文件名：skill 内任一文件匹配即可
        const hits = basenameIndex.get(ref) || []
        if (hits.length === 0) {
          errors.push(`${path.relative(repoRoot, file)}:${i + 1}  断链：${ref}（skill 内不存在此文件）`)
        }
        continue
      }

      if (!fs.existsSync(target)) {
        errors.push(`${path.relative(repoRoot, file)}:${i + 1}  断链：${ref}（解析为 ${path.relative(repoRoot, target)}）`)
      }
    }
  })
}

// 反向检查：rules/ templates/ 下的每个文件是否至少被引用一次（仅警告）
const referenced = new Set()
for (const f of MD_FILES) {
  const text = readText(f)
  let m
  refPattern.lastIndex = 0
  while ((m = refPattern.exec(text)) !== null) {
    const ref = m[1] || m[2] || m[3]
    if (ref) referenced.add(path.basename(ref))
  }
}
const warnings = []
for (const dir of ['rules', 'templates']) {
  const full = path.join(skillDir, 'references', dir)
  for (const name of fs.readdirSync(full)) {
    if (name.endsWith('.md') && !referenced.has(name)) {
      warnings.push(`skill/learning-coach/references/${dir}/${name} 未被任何文件引用`)
    }
  }
}

console.log(`扫描 ${MD_FILES.length} 个 Markdown 文件，${refCount} 处引用。`)
if (warnings.length) {
  console.log(`\n⚠️  警告（${warnings.length}）：`)
  warnings.forEach((w) => console.log('  ' + w))
}
if (errors.length) {
  console.error(`\n❌ 发现 ${errors.length} 处断链：`)
  errors.forEach((e) => console.error('  ' + e))
  process.exit(1)
}
console.log('✅ 所有引用完整。')

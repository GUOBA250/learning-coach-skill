'use strict';
const assert = require('assert');
const fs = require('fs');
const os = require('os');
const path = require('path');
const { execFileSync } = require('child_process');
const cli = path.resolve(__dirname, '../bin/learning-coach-skill.js');
const root = fs.mkdtempSync(path.join(os.tmpdir(), 'coach-installer-'));
try {
  const run = (...args) => execFileSync(process.execPath, [cli, ...args], { cwd: root, encoding: 'utf8' });
  run('install', '--project', '--codex');
  const target = path.join(root, '.agents/skills/learning-coach-skill');
  const profile = path.join(target, 'profiles/guoba.md');
  fs.writeFileSync(profile, 'private local profile\n');
  const manifestPath = path.join(target, '.installed-manifest.json');
  const manifest = JSON.parse(fs.readFileSync(manifestPath));
  manifest.files.push('obsolete-generated.txt');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest));
  fs.writeFileSync(path.join(target, 'obsolete-generated.txt'), 'obsolete');
  fs.writeFileSync(path.join(target, 'personal-notes.txt'), 'keep');
  run('install', '--project', '--codex');
  assert.strictEqual(fs.readFileSync(profile, 'utf8'), 'private local profile\n');
  assert(fs.existsSync(path.join(target, 'personal-notes.txt')));
  assert(!fs.existsSync(path.join(target, 'obsolete-generated.txt')));
  assert(fs.existsSync(path.join(target, 'scripts/check_progress.py')));
  const doctor = run('doctor', '--codex');
  assert(doctor.includes(path.join(os.homedir(), '.codex/skills/learning-coach')));
  const all = run('install', '--project', '--all');
  assert(all.includes('4 个目标'));
  console.log('Installer verified: profile preservation, managed cleanup, personal files, Codex target, all-project installation.');
} finally {
  fs.rmSync(root, { recursive: true, force: true });
}

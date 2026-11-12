#!/usr/bin/env python3
"""Read-only validation of the current tables embedded in three Markdown ledgers."""
import argparse
import datetime as dt
import json
from pathlib import Path

FILES = ['面试问答-八股.md', '面试问答-项目.md', '算法台账.md']
START, END = '<!-- progress:current:begin -->', '<!-- progress:current:end -->'
REQUIRED = ['ID','题目','学习经历','验收状态','原评分','最近冷测','复测日期','循环','库存键','钩子','依据']
UNKNOWN = {'待核', '-', '未报', '不适用'}

def read_table(path):
    text = path.read_text(encoding='utf-8')
    if text.count(START) != 1 or text.count(END) != 1:
        raise ValueError(f'{path.name}: 需要且仅允许一个当前状态区块')
    body = text.split(START, 1)[1].split(END, 1)[0]
    lines = [line for line in body.splitlines() if line.startswith('|')]
    cells = lambda line: [part.strip() for part in line.strip().strip('|').split('|')]
    if len(lines) < 2 or cells(lines[0]) != REQUIRED:
        raise ValueError(f'{path.name}: 当前表字段不匹配')
    result = []
    for line in lines[2:]:
        values = cells(line)
        if len(values) != len(REQUIRED):
            raise ValueError(f'{path.name}: 行字段数错误: {values[:2]}')
        result.append(dict(zip(REQUIRED, values)))
    return result

def audit(workspace, today):
    errors, warnings, ledgers = [], [], {}
    seen = set()
    for name in FILES:
        try:
            rows = read_table(workspace / name)
        except (OSError, ValueError) as exc:
            errors.append(str(exc)); continue
        ledgers[name] = rows
        for row in rows:
            ident = row['ID']
            if not ident or ident in seen:
                errors.append(f'重复或空ID: {ident}')
            seen.add(ident)
            if row['原评分'] not in {'-', '0', '1', '2'}:
                errors.append(f'{ident}: 非法评分')
            for key in ['最近冷测', '复测日期']:
                value = row[key]
                if value in UNKNOWN:
                    continue
                try:
                    parsed = dt.date.fromisoformat(value)
                    if value != parsed.isoformat(): raise ValueError(value)
                    if key == '最近冷测' and parsed > today:
                        errors.append(f'{ident}: 最近冷测不能在未来')
                except ValueError:
                    errors.append(f'{ident}: 非法日期 {key}={value}')
            if name == FILES[2] and row['原评分'] != '-':
                errors.append(f'{ident}: 算法日常台账不使用评分')
            if row['学习经历'] == '未讲' and row['验收状态'] in {'冷测通过','历史通过'}:
                errors.append(f'{ident}: 未讲却记录通过')
    knowledge = ledgers.get(FILES[0], []) + ledgers.get(FILES[1], [])
    scored = [r for r in knowledge if r['原评分'] in {'0','1'}]
    provisional = [r for r in knowledge if r['验收状态'] == '临时过' and r['原评分'] == '-']
    keys = {r['库存键'] for r in scored}
    allkeys = keys | {r['库存键'] for r in provisional}
    overlap = {}
    for row in knowledge:
        if row in scored or row in provisional:
            overlap.setdefault(row['库存键'], []).append(row['ID'])
    for key, ids in overlap.items():
        if len(ids) > 1:
            warnings.append(f'库存键 {key} 含多条范围可能重叠的记录：{", ".join(ids)}；仅计一个键，需人工核对覆盖范围')
    unknown = [r for r in knowledge if r['验收状态'] == '待核']
    due = [r for r in knowledge if r['复测日期'] not in UNKNOWN and dt.date.fromisoformat(r['复测日期']) <= today] if not errors else []
    tomorrow = today + dt.timedelta(days=1)
    next_due = [r for r in knowledge if r['复测日期'] == tomorrow.isoformat()]
    undated = [r['ID'] for r in knowledge if r['复测日期'] in UNKNOWN]
    alg = ledgers.get(FILES[2], [])
    summary = {
        '日期': today.isoformat(), '当前记录数': {k: len(v) for k,v in ledgers.items()},
        '明确0或1分库存键数': len(keys), '历史临时过记录数': len(provisional),
        '含临时过去重后待处理键数': len(allkeys),
        '库存说明': '历史临时过与未知评分单列；同库存键不重复计数，不把原评分迁移成新评分。',
        '评分或验收待核': [{'ID': r['ID'], '题目': r['题目']} for r in unknown],
        '逾期或今日到期': [{'ID':r['ID'], '题目':r['题目'], '日期':r['复测日期']} for r in due],
        '明日明确到期': [{'ID':r['ID'], '题目':r['题目']} for r in next_due],
        '下次日期待核': undated,
        '算法在循环': [{'ID':r['ID'], '题目':r['题目']} for r in alg if r['循环']=='是'],
        '算法已讲未验收': [{'ID':r['ID'], '题目':r['题目']} for r in alg if r['学习经历']=='已讲' and r['验收状态']=='未验收'],
        'errors':errors, 'warnings':warnings
    }
    return summary

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--workspace', type=Path, default=Path.cwd())
    parser.add_argument('--date', default=None, help='YYYY-MM-DD; default uses Asia/Shanghai')
    args=parser.parse_args()
    if args.date:
        today=dt.date.fromisoformat(args.date)
    else:
        today=dt.datetime.now(dt.timezone(dt.timedelta(hours=8))).date()
    result=audit(args.workspace.resolve(), today)
    print(json.dumps(result, ensure_ascii=False, indent=2))
    raise SystemExit(1 if result['errors'] else 0)

if __name__ == '__main__':
    main()

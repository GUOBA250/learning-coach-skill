import sys
sys.dont_write_bytecode = True
import importlib.util
import datetime as dt
import tempfile
import unittest
from pathlib import Path

ROOT=Path(__file__).resolve().parents[1]
spec=importlib.util.spec_from_file_location('progress_checker', ROOT/'skill/learning-coach/scripts/check_progress.py')
coach=importlib.util.module_from_spec(spec);spec.loader.exec_module(coach)

def make_row(ident, score='1', state='待冷测', group=None, due='待核'):
    return dict(zip(coach.REQUIRED,[ident,'fixture','已讲',state,score,'待核',due,'不适用',group or ident,'hook','fixture evidence']))

def write_table(path, rows):
    text=coach.START+'\n| '+' | '.join(coach.REQUIRED)+' |\n| '+' | '.join(['---']*len(coach.REQUIRED))+' |\n'
    for row in rows:text+='| '+' | '.join(row[k] for k in coach.REQUIRED)+' |\n'
    path.write_text(text+coach.END+'\n',encoding='utf-8')

class ProgressTests(unittest.TestCase):
    def audit(self, bb, project=(), algorithms=()):
        with tempfile.TemporaryDirectory(prefix='coach-progress-') as tmp:
            root=Path(tmp)
            for name, rows in zip(coach.FILES,[bb,project,algorithms]):write_table(root/name,rows)
            before={p.name:p.read_bytes() for p in root.iterdir()}
            result=coach.audit(root,dt.date(2026,11,12))
            self.assertEqual(before,{p.name:p.read_bytes() for p in root.iterdir()})
            return result
    def test_deduplicates_inventory_and_separates_unknown_scores(self):
        r=self.audit([make_row('a',group='g'),make_row('b','-','临时过','g'),make_row('c','-','待核')])
        self.assertEqual(r['明确0或1分库存键数'],1)
        self.assertEqual(r['含临时过去重后待处理键数'],1)
        self.assertEqual(len(r['评分或验收待核']),1)
        self.assertEqual(r['errors'],[])
        self.assertEqual(len(r['warnings']),1)
    def test_detects_duplicate_ids_across_ledgers(self):
        r=self.audit([make_row('same')],[make_row('same')])
        self.assertTrue(any('重复' in e for e in r['errors']))
    def test_dates_and_unknowns_are_not_invented(self):
        r=self.audit([make_row('overdue',due='2026-11-05'),make_row('unknown'),make_row('tomorrow',due='2026-11-13')])
        self.assertEqual([x['ID'] for x in r['逾期或今日到期']],['overdue'])
        self.assertEqual([x['ID'] for x in r['明日明确到期']],['tomorrow'])
        self.assertIn('unknown',r['下次日期待核'])
    def test_invalid_and_future_dates_fail(self):
        row=make_row('future');row['最近冷测']='2026-11-20'
        r=self.audit([row,make_row('bad',due='2026-99-99')])
        self.assertEqual(len(r['errors']),2)
    def test_algorithms_are_not_scored_or_counted_as_inventory(self):
        row=make_row('LC-1','-','待复默');row['循环']='是'
        r=self.audit([],algorithms=[row])
        self.assertEqual(r['明确0或1分库存键数'],0)
        self.assertEqual(len(r['算法在循环']),1)
        row['原评分']='2'
        self.assertTrue(self.audit([],algorithms=[row])['errors'])

if __name__=='__main__':unittest.main()

import type { MoodEntry } from '@entities/mood-entry';

export function StatsBlock({ entries }: { entries: MoodEntry[] }) {
  if (!entries.length) return <p>Нет данных</p>;
  const avg = entries.reduce((s, e) => s + e.mood, 0) / entries.length;
  return <p>Среднее настроение: {avg.toFixed(2)}</p>;
}

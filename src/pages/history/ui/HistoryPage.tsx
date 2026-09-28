import { useEffect, useState } from 'react';
import { MoodHistory } from '@widgets/mood-history';
import { moodEntryApi } from '@entities/mood-entry';
import type { MoodEntry } from '@entities/mood-entry';
import styles from './HistoryPage.module.css';

export function HistoryPage() {
  const [entries, setEntries] = useState<MoodEntry[]>([]);

  useEffect(() => {
    moodEntryApi.getAll().then((all) =>
      setEntries([...all].sort((a, b) => +new Date(b.date) - +new Date(a.date))),
    );
  }, []);

  const avg =
    entries.length === 0
      ? 0
      : entries.reduce((s, e) => s + e.mood, 0) / entries.length;

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>История</h1>
      <p className={styles.subtitle}>Все ваши записи настроения</p>

      <div className={styles.stats}>
        <div className={styles.statsLabel}>Среднее настроение</div>
        <div className={styles.statsValue}>
          {entries.length ? avg.toFixed(1) : '—'} / 5
        </div>
      </div>

      <div className={styles.section}>
        {entries.length ? `Записей: ${entries.length}` : 'Пока нет записей'}
      </div>

      <MoodHistory entries={entries} />
    </main>
  );
}

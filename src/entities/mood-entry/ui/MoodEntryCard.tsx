import { getMood } from '@entities/mood-type';
import { formatDate } from '@shared/lib/formatDate';
import type { MoodEntry } from '../model/types';
import styles from './MoodEntryCard.module.css';

export function MoodEntryCard({ entry }: { entry: MoodEntry }) {
  const mood = getMood(entry.mood);

  return (
    <div className={styles.card} style={{ borderLeftColor: mood.color }}>
      <span className={styles.emoji}>{mood.emoji}</span>
      <div className={styles.content}>
        <div className={styles.date}>{formatDate(entry.date)}</div>
        <div className={styles.note}>
          {entry.note || <span className={styles.empty}>Без заметки</span>}
        </div>
      </div>
    </div>
  );
}

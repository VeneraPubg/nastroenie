import { useState } from 'react';
import { MoodSelector } from '@widgets/mood-selector';
import { LogMoodButton } from '@features/log-mood';
import type { MoodValue } from '@entities/mood-type';
import styles from './TodayPage.module.css';

export function TodayPage() {
  const [mood, setMood] = useState<MoodValue | null>(null);
  const [note, setNote] = useState('');
  const [saved, setSaved] = useState(false);

  const handleSaved = () => {
    setSaved(true);
    setMood(null);
    setNote('');
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Как настроение?</h1>
      <p className={styles.subtitle}>Отметьте своё состояние и добавьте пару слов</p>

      <div className={styles.card}>
        <MoodSelector value={mood} onChange={setMood} />

        <textarea
          className={styles.note}
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Что произошло сегодня?.."
          rows={3}
        />

        {mood && <LogMoodButton mood={mood} note={note} onSaved={handleSaved} />}

        {saved && <div className={styles.success}>✓ Запись сохранена</div>}
      </div>
    </main>
  );
}

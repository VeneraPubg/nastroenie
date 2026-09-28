import { MOODS } from '@entities/mood-type';
import type { MoodValue } from '@entities/mood-type';
import styles from './MoodSelector.module.css';

type Props = {
  value: MoodValue | null;
  onChange: (m: MoodValue) => void;
};

export function MoodSelector({ value, onChange }: Props) {
  return (
    <div className={styles.group}>
      {MOODS.map((m) => (
        <button
          key={m.id}
          onClick={() => onChange(m.id)}
          className={`${styles.item} ${value === m.id ? styles.active : ''}`}
          style={value === m.id ? { borderColor: m.color } : undefined}
        >
          <span className={styles.emoji}>{m.emoji}</span>
        </button>
      ))}
    </div>
  );
}

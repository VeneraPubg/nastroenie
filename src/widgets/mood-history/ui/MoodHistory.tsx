import { MoodEntryCard } from '@entities/mood-entry';
import type { MoodEntry } from '@entities/mood-entry';

export function MoodHistory({ entries }: { entries: MoodEntry[] }) {
  return (
    <div>
      {entries.map((e) => (
        <MoodEntryCard key={e.id} entry={e} />
      ))}
    </div>
  );
}

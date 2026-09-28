export type MoodValue = 1 | 2 | 3 | 4 | 5;

export const MOODS = [
  { id: 1, emoji: '😢', color: '#e74c3c' },
  { id: 2, emoji: '🙁', color: '#e67e22' },
  { id: 3, emoji: '😐', color: '#f1c40f' },
  { id: 4, emoji: '🙂', color: '#2ecc71' },
  { id: 5, emoji: '😄', color: '#27ae60' },
] as const;

export const getMood = (id: MoodValue) => MOODS.find((m) => m.id === id)!;

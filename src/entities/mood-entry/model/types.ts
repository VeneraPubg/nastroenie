import type { MoodValue } from '@entities/mood-type';

export type MoodEntry = {
  id: string;
  date: string;
  mood: MoodValue;
  note: string;
};

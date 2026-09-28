import type { MoodEntry } from '../model/types';

const KEY = 'mood-diary';
const read = (): MoodEntry[] => JSON.parse(localStorage.getItem(KEY) ?? '[]');

export const moodEntryApi = {
  getAll: async (): Promise<MoodEntry[]> => read(),

  create: async (entry: Omit<MoodEntry, 'id'>): Promise<MoodEntry> => {
    const full: MoodEntry = { ...entry, id: crypto.randomUUID() };
    localStorage.setItem(KEY, JSON.stringify([...read(), full]));
    return full;
  },
};

import { Button } from '@shared/ui/Button';
import { moodEntryApi } from '@entities/mood-entry';
import type { MoodValue } from '@entities/mood-type';

type Props = {
  mood: MoodValue;
  note: string;
  onSaved?: () => void;
};

export function LogMoodButton({ mood, note, onSaved }: Props) {
  const save = async () => {
    await moodEntryApi.create({
      date: new Date().toISOString(),
      mood,
      note,
    });
    onSaved?.();
  };

  return <Button onClick={save}>Сохранить</Button>;
}

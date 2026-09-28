export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString('ru-RU');

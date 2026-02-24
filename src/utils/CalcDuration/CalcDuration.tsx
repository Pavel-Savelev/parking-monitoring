interface ITotal {
  date_start: string;
  date_end: string;
}

export function CountTotalTime({ date_start, date_end }: ITotal): string {
  // Парсим даты
  const start = new Date(date_start);
  const end = new Date(date_end);

  // Проверка на валидность
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return '0 мин';
  }

  // Разница в миллисекундах
  const diffMs = end.getTime() - start.getTime();

  // Конвертируем в минуты
  const totalMinutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Форматируем вывод
  if (hours > 0) {
    return `${hours} ч ${minutes} мин`;
  }
  return `${minutes} мин`;
}

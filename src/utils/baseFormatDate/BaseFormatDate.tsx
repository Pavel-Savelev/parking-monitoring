export function BaseFormatDate(
  date: Date,
  options?: {
    includeSeconds?: boolean;
    separator?: string;
  }
): string {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Некорректная дата');
  }

  const defaultOptions = {
    includeSeconds: false,
    separator: ' - '
  };

  const opts = { ...defaultOptions, ...options };

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  let timeString = `${hours}:${minutes}`;

  if (opts.includeSeconds) {
    const seconds = String(date.getSeconds()).padStart(2, '0');
    timeString += `:${seconds}`;
  }

  return `${day}.${month}.${year}${opts.separator}${timeString}`;
}

// Примеры использования:
const date = new Date('2026-02-19T20:58:31.612321');

console.log(BaseFormatDate(date));

console.log(BaseFormatDate(date, { includeSeconds: true }));

console.log(BaseFormatDate(date, { separator: ' в ' }));

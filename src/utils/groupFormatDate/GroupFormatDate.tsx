interface IGroup {
  date_start: string;
  date_end: string;
}

export function GroupFormatDate({ date_start, date_end }: IGroup) {
  // Парсим даты
  const startDate = new Date(date_start);
  const endDate = new Date(date_end);

  // Форматируем дату (ДД.ММ.ГГГГ)
  const formatDate = (date: Date): string => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  // Форматируем время (ЧЧ:ММ)
  const formatTime = (date: Date): string => {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  // Получаем отформатированные значения
  const formattedStartDate = formatDate(startDate);
  const formattedStartTime = formatTime(startDate);
  const formattedEndTime = formatTime(endDate);

  // Возвращаем JSX
  return (
    <div>
      {formattedStartDate} / {formattedStartTime} - {formattedEndTime}
    </div>
  );
}

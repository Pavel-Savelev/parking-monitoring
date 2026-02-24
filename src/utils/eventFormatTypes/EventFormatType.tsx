interface IEventType {
  type: string;
}

export function EventFormatType({ type }: IEventType): string {
  const types: Record<string, string> = {
    IMPACT: 'Повреждение',
    CV_EVENT: 'Событие',
    CONNECTOR_STATE_CHANGE: 'Изменение коннектора',
    STATION_STATE_UPDATE: 'Обновление станции',
    PARKING_STATUS: 'Статус парковки',
    PARKING_VIOLATION: 'Нарушение: занятие места'
  };

  return types[type] || type.replace(/_/g, ' ').toLowerCase();
}

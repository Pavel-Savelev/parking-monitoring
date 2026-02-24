import { useState, useMemo } from 'react';
import { EventsFilters } from './ui/EventFilterUI';
import { EventsTable } from './ui/EventTableUI';
import { IEvent } from 'shared/types';
import { useEvents } from '../../hooks/useEventsList';
import mockData from '../../mockData/events-stations.json';

export const EventsList = () => {
  const eventsData = useEvents();

  // проверяем есть ли подключение к апи и если его нет то выводим мок данные
  const data: IEvent[] = eventsData.events?.length
    ? (eventsData.events as IEvent[])
    : (mockData as IEvent[]);

  console.log('Mock data:', mockData);

  const [filters, setFilters] = useState({
    id: '', // фильтр по event.id
    station_id: '', // фильтр по station_id
    event_type: '', // фильтр по типу события
    start_time: '', // фильтр по дате начала
    end_time: '', // фильтр по дате окончания
    address: '' // фильтр по адресу
  });

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = useMemo(
    () =>
      data.filter((event) => {
        const eventDate = event.start_time
          ? new Date(event.start_time).getTime()
          : null;
        const from = filters.start_time
          ? new Date(filters.start_time).getTime()
          : null;
        const to = filters.end_time
          ? new Date(filters.end_time).getTime()
          : null;

        const dateMatch =
          (!from || (eventDate && eventDate >= from)) &&
          (!to || (eventDate && eventDate <= to));

        // Исправленные сравнения полей
        return (
          (!filters.id ||
            event.id?.toLowerCase().includes(filters.id.toLowerCase())) &&
          (!filters.station_id ||
            event.station_id
              ?.toLowerCase()
              .includes(filters.station_id.toLowerCase())) &&
          (!filters.event_type ||
            event.event_type
              ?.toLowerCase()
              .includes(filters.event_type.toLowerCase())) &&
          dateMatch &&
          (!filters.address ||
            event.address
              ?.toLowerCase()
              .includes(filters.address.toLowerCase()))
        );
      }),
    [data, filters]
  );

  const handleNavigate = (id: string, eventId: string) => {
    console.log('Navigate to station:', id, 'event:', eventId);
  };

  return (
    <>
      <EventsFilters filters={filters} onChange={handleChange} />
      <EventsTable data={filteredData} onItemClick={handleNavigate} />
    </>
  );
};

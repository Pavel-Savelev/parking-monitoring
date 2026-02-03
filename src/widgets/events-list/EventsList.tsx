import { useState, useMemo } from 'react';
import { EventsFilters } from './ui/EventFilterUI';
import { EventsTable } from './ui/EventTableUI';
import { IEventData } from 'shared/types';

interface Props {
  data: IEventData[];
}

export const EventsList = ({ data }: Props) => {
  const [filters, setFilters] = useState({
    serialNumber: '',
    stationName: '',
    event: '',
    date: '',
    durationTime: ''
  });

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = useMemo(
    () =>
      data.filter(
        (event) =>
          (!filters.serialNumber ||
            event.serialNumber
              ?.toLowerCase()
              .includes(filters.serialNumber.toLowerCase())) &&
          (!filters.stationName ||
            event.nameStation
              ?.toLowerCase()
              .includes(filters.stationName.toLowerCase())) &&
          (!filters.event ||
            event.eventName
              ?.toLowerCase()
              .includes(filters.event.toLowerCase())) &&
          (!filters.date || event.date?.includes(filters.date)) &&
          (!filters.durationTime ||
            event.durationEvent
              ?.toLowerCase()
              .includes(filters.durationTime.toLowerCase()))
      ),
    [data, filters]
  );

  const handleNavigate = (id: string, eventId: string) => {
    console.log('Navigate to', id, eventId); // здесь можно useNavigate, если нужен роутинг
  };

  return (
    <>
      <EventsFilters filters={filters} onChange={handleChange} />
      <EventsTable data={filteredData} onItemClick={handleNavigate} />
    </>
  );
};

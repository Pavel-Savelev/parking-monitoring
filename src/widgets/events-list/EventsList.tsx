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
    dateFrom: '',
    dateTo: '',
    durationTime: ''
  });

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = useMemo(
    () =>
      data.filter((event) => {
        const eventDate = event.date ? new Date(event.date).getTime() : null;
        const from = filters.dateFrom
          ? new Date(filters.dateFrom).getTime()
          : null;
        const to = filters.dateTo ? new Date(filters.dateTo).getTime() : null;

        const dateMatch =
          (!from || (eventDate && eventDate >= from)) &&
          (!to || (eventDate && eventDate <= to));

        return (
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
          dateMatch &&
          (!filters.durationTime ||
            event.durationEvent
              ?.toLowerCase()
              .includes(filters.durationTime.toLowerCase()))
        );
      }),
    [data, filters]
  );

  const handleNavigate = (id: string, eventId: string) => {
    console.log('Navigate to', id, eventId); // здесь можно useNavigate
  };

  return (
    <>
      <EventsFilters filters={filters} onChange={handleChange} />
      <EventsTable data={filteredData} onItemClick={handleNavigate} />
    </>
  );
};

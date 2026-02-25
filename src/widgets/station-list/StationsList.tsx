import { useState, useMemo } from 'react';
import { StationsFilters } from './ui/StationsFiltersUI';
import { StationsTable } from './ui/StationsTableUI';
import { IStationData } from '../../shared/types';
import { useStations } from '../../hooks/useStationsList';
import { useWebSocket } from '../../hooks/useWebSocket';

export function StationsList() {
  // const wb = useWebSocket('ws://192.168.21.224:8765/frontend/ws');
  // console.log(wb, 'Я ВЕБСОКЕТ');
  const data = useStations();
  const [filters, setFilters] = useState({
    address: '',
    station_id: '',
    ip: '',
    id: ''
  });
  const stations = data.stations;
  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = useMemo(
    () =>
      stations.filter(
        (station) =>
          (!filters.address ||
            station.address
              .toLowerCase()
              .includes(filters.address.toLowerCase())) &&
          (!filters.station_id ||
            station.station_id
              .toLowerCase()
              .includes(filters.station_id.toLowerCase())) &&
          (!filters.ip ||
            station.ip.toLowerCase().includes(filters.ip.toLowerCase())) &&
          (!filters.id ||
            station.id.toLowerCase().includes(filters.id.toLowerCase()))
        // (!filters.durationTime ||
        //   station.useTime
        //     .toLowerCase()
        //     .includes(filters.durationTime.toLowerCase()))
      ),
    [data, filters]
  );

  return (
    <>
      <StationsFilters filters={filters} onChange={handleChange} />
      <StationsTable data={filteredData} />
    </>
  );
}

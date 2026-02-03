import { useState, useMemo } from 'react';
import { StationsFilters } from './ui/StationsFiltersUI';
import { StationsTable } from './ui/StationsTableUI';
import { IStationData } from '../../shared/types';

interface IProps {
  data: IStationData[];
}

export function StationsList({ data }: IProps) {
  const [filters, setFilters] = useState({
    serialNumber: '',
    stationName: '',
    stationStatus: '',
    city: '',
    durationTime: ''
  });

  const handleChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const filteredData = useMemo(
    () =>
      data.filter(
        (station) =>
          (!filters.serialNumber ||
            station.serialNumber
              .toLowerCase()
              .includes(filters.serialNumber.toLowerCase())) &&
          (!filters.stationName ||
            station.nameStation
              .toLowerCase()
              .includes(filters.stationName.toLowerCase())) &&
          (!filters.stationStatus ||
            station.parkingStatus
              .toLowerCase()
              .includes(filters.stationStatus.toLowerCase())) &&
          (!filters.city ||
            station.city.toLowerCase().includes(filters.city.toLowerCase())) &&
          (!filters.durationTime ||
            station.useTime
              .toLowerCase()
              .includes(filters.durationTime.toLowerCase()))
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

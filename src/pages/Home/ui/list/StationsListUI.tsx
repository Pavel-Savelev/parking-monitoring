import styles from './StationListUI.module.css';
import { StationListFilterUI } from '../filter/StationListFiltersUI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IStationData } from '../../type';

interface IStationList {
  data: IStationData[];
}

export function StationsListUI({ data }: IStationList) {
  const optionsStationStatus = {};
  const [filters, setFilters] = useState({
    id: '',
    stationName: ''
  });
  const handleChange = (field: string) => (value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  function handleNavigate(serialNumber: string) {
    navigate(`/station/${serialNumber}`);
  }

  const filterList = [
    {
      name: 'Серийный номер',
      type: 'text' as const,
      value: filters.id,
      onChange: handleChange('id')
    },
    {
      name: 'Название станции',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationName')
    },
    {
      name: 'Статус парковки',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationStatus')
    },
    {
      name: 'Город',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationName')
    },
    {
      name: 'Длительность',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationStatus')
    }
  ];

  return (
    <div className={styles.stations_statistics}>
      <div className={styles.statin_filters}>
        {filterList.map((item, index) => (
          <StationListFilterUI data={item} key={index} />
        ))}
      </div>
      <ul className={styles.statin_list}>
        {data.map((station) => (
          <li
            key={station.serialNumber}
            onClick={() => handleNavigate(station.serialNumber)}
          >
            <span>ID: {station.serialNumber}</span>
            <span>{station.nameStation}</span>
            <span>{station.parkingStatus}</span>
            <span>{station.city}</span>
            <span>{station.useTime}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

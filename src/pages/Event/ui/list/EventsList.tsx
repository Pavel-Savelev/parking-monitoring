import styles from './EventsxList.module.css';
import { EventListFilterUI } from '../filter/EventListFiltersUI';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEventData } from '../../type';

interface IStationList {
  data: IEventData[];
}

export function EventsListUI({ data }: IStationList) {
  const optionsStationStatus = {};
  const [filters, setFilters] = useState({
    id: '',
    stationName: '',
    event: '',
    date: '',
    timer: ''
  });
  const handleChange = (field: string) => (value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/station');
  }

  const filterList = [
    {
      name: 'ID',
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
      name: 'Поиск по событию',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('event')
    },
    {
      name: 'Поиск по времени',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('date')
    },
    {
      name: 'Продолжительность',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('timer')
    }
  ];

  return (
    <div className={styles.stations_statistics}>
      <div className={styles.statin_filters}>
        {filterList.map((item, index) => (
          <EventListFilterUI data={item} key={index} />
        ))}
      </div>
      <ul className={styles.statin_list}>
        {data.map((station) => (
          <li key={station.id} onClick={handleNavigate}>
            <span>ID: {station.id}</span>
            <span>{station.nameStation}</span>
            <span>{station.eventName}</span>
            <span>{station.date}</span>
            <span>{station.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

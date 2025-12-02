import styles from './EventsxList.module.css';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IEventData } from '../type';
import { Input } from '../../../shared/ui/Input';
import { IItem } from '../../../shared/type';

interface IStationList {
  data: IEventData[];
}

export function EventsListUI({ data }: IStationList) {
  const [filters, setFilters] = useState({
    id: '',
    stationName: '',
    event: '',
    date: '',
    serialNumber: '',
    durationTime: ''
  });

  const handleChange = (field: string) => (value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  function handleNavigate(id: string, event_id: string) {
    navigate(`/station/${id}/${event_id}`);
  }

  const filterList: IItem[] = [
    {
      name: 'Серийный номер',
      type: 'text' as const,
      value: filters.serialNumber,
      onChange: handleChange('serialNumber'),
      placeholder: 'Введите'
    },
    {
      name: 'Название станции',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationName'),
      placeholder: 'Введите'
    },
    {
      name: 'Поиск по событию',
      type: 'text' as const,
      value: filters.event,
      onChange: handleChange('event'),
      placeholder: 'Введите'
    },
    {
      name: 'Поиск по времени',
      type: 'text' as const,
      value: filters.date,
      onChange: handleChange('date'),
      placeholder: 'Введите'
    },
    {
      name: 'Длительность',
      type: 'text' as const,
      value: filters.durationTime,
      onChange: handleChange('durationTime'),
      placeholder: 'Введите'
    }
  ];

  // Фильтрация данных
  const filteredData = useMemo(
    () =>
      data.filter((station) => {
        // Проверяем каждый фильтр
        const matchesSerialNumber = filters.serialNumber
          ? String(station.serialNumber || '')
              .toLowerCase()
              .includes(filters.serialNumber.toLowerCase())
          : true;

        const matchesStationName = filters.stationName
          ? String(station.nameStation || '')
              .toLowerCase()
              .includes(filters.stationName.toLowerCase())
          : true;

        const matchesStationEvent = filters.event
          ? String(station.eventName || '')
              .toLowerCase()
              .includes(filters.event.toLowerCase())
          : true;

        const matchesDate = filters.date
          ? String(station.date || '')
              .toLowerCase()
              .includes(filters.date.toLowerCase())
          : true;

        // Используем правильное поле для фильтрации длительности
        const matchesDurationTime = filters.durationTime
          ? String(station.durationEvent || station.durationEvent || '') // Проверяем разные возможные названия поля
              .toLowerCase()
              .includes(filters.durationTime.toLowerCase())
          : true;

        // Возвращаем true только если все активные фильтры совпадают
        return (
          matchesSerialNumber &&
          matchesStationName &&
          matchesStationEvent &&
          matchesDate &&
          matchesDurationTime
        );
      }),
    [data, filters]
  );

  return (
    <div className={styles.stations_statistics}>
      <div className={styles.statin_filters}>
        {filterList.map((item, index) => (
          <div className={styles.filter_item} key={index}>
            <label>{item.name}</label>
            <Input
              type={item.type}
              value={item.value}
              onChange={item.onChange}
              placeholder={item.placeholder}
            />
          </div>
        ))}
      </div>
      <ul className={styles.statin_list}>
        {filteredData.length > 0 ? (
          filteredData.map((station) => (
            <li
              key={station.id}
              onClick={() => handleNavigate(station.id, station.event_id)}
            >
              <span>{station.serialNumber}</span>
              <span>{station.nameStation}</span>
              <span>{station.eventName}</span>
              <span>{station.date}</span>
              <span>{station.durationEvent}</span>
              {/* Исправлено: отображаем длительность */}
            </li>
          ))
        ) : (
          <li className={styles.no_results}>
            Нет данных, соответствующих фильтрам
          </li>
        )}
      </ul>
    </div>
  );
}

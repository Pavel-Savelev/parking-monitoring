import styles from './StationListUI.module.css';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Input } from '../../../../shared/ui/Input';
import { IItem, IStationData } from '../../../../shared/type';

interface IStationList {
  data: IStationData[];
}

export function StationsListUI({ data }: IStationList) {
  const optionsStationStatus = {};
  const [filters, setFilters] = useState({
    id: '',
    stationName: '',
    stationStatus: '',
    serialNumber: '',
    city: '',
    durationTime: ''
  });
  const handleChange = (field: string) => (value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  function handleNavigate(id: string) {
    navigate(`/station/${id}`);
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
      name: 'Статус парковки',
      type: 'text' as const,
      value: filters.stationStatus,
      onChange: handleChange('stationStatus'),
      placeholder: 'Введите'
    },
    {
      name: 'Город',
      type: 'text' as const,
      value: filters.city,
      onChange: handleChange('city'),
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

  // Фильтрация
  const filteredData = useMemo(
    () =>
      data.filter((station) => {
        const matchesSerialNumber = filters.serialNumber
          ? station.serialNumber
              .toLowerCase()
              .includes(filters.serialNumber.toLowerCase())
          : true;

        const matchesStationName = filters.stationName
          ? station.nameStation
              .toLowerCase()
              .includes(filters.stationName.toLowerCase())
          : true;

        const matchesStationStatus = filters.stationStatus
          ? station.parkingStatus
              .toLowerCase()
              .includes(filters.stationStatus.toLowerCase())
          : true;

        const matchesCity = filters.city
          ? station.city.toLowerCase().includes(filters.city.toLowerCase())
          : true;

        const matchesDurationTime = filters.durationTime
          ? station.useTime
              .toLowerCase()
              .includes(filters.durationTime.toLowerCase())
          : true;

        return (
          matchesSerialNumber &&
          matchesStationName &&
          matchesStationStatus &&
          matchesCity &&
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
              key={station.serialNumber}
              onClick={() => handleNavigate(station.id)}
            >
              <span>{station.serialNumber}</span>
              <span>{station.nameStation}</span>
              <span>{station.parkingStatus}</span>
              <span>{station.city}</span>
              <span>{station.useTime}</span>
            </li>
          ))
        ) : (
          <div className={styles.no_results}>
            Нет данных, соответствующих фильтрам
          </div>
        )}
      </ul>
    </div>
  );
}

import styles from './StationListUI.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IStationData, IFilterName } from '../../type';
import { Input } from '../Input';

interface IPageFilterProp {
  data: IStationData[];
  names: IFilterName[];
}

export function StationsListUI({ data, names }: IPageFilterProp) {
  const optionsStationStatus = {};
  const [filters, setFilters] = useState({
    id: '',
    stationName: ''
  });
  const handleChange = (field: string) => (value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const navigate = useNavigate();

  function handleNavigate() {
    navigate('/station');
  }

  const filterNames: IFilterName[] = [
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
      name: 'Протяженность',
      type: 'text' as const,
      value: filters.stationName,
      onChange: handleChange('stationStatus')
    }
  ];

  return (
    <div className={styles.stations_statistics}>
      <div className={styles.statin_filters}>
        {filterNames.map((filterParam) => (
          <div className={styles.filter_item}>
            <label>{filterParam.name}</label>
            <Input
              type={filterParam.type}
              value={filterParam.value}
              onChange={filterParam.onChange}
              className={filterParam.className}
              placeholder={filterParam.placeholder}
            />
          </div>
        ))}
      </div>

      <div className={styles.statin_filters}></div>
      <ul className={styles.statin_list}>
        {data.map((station) => (
          <li key={station.serialNumber + station.id} onClick={handleNavigate}>
            <span>{}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

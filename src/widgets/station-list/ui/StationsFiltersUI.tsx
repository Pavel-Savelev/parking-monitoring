import { Input } from '../../../shared/ui/Input';
import styles from './StationsFiltersUI.module.css';

interface IProps {
  filters: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export function StationsFilters({ filters, onChange }: IProps) {
  const filterList = [
    { name: 'Серийный номер', field: 'serialNumber' },
    { name: 'Название станции', field: 'stationName' },
    { name: 'Статус парковки', field: 'stationStatus' },
    { name: 'Город', field: 'city' },
    { name: 'Длительность', field: 'durationTime' }
  ];

  return (
    <div className={styles.filter}>
      {filterList.map((item) => (
        <div key={item.field} className={styles.filterItem}>
          <label>{item.name}</label>
          <Input
            type='text'
            value={filters[item.field]}
            onChange={(value) => onChange(item.field, value)}
            placeholder='Введите'
          />
        </div>
      ))}
    </div>
  );
}

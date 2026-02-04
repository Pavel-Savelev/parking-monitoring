import { Input } from '../../../shared/ui/Input';
import { IItem } from '../../../shared/types';
import style from './EventFilterUI.module.css';

interface Props {
  filters: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const EventsFilters = ({ filters, onChange }: Props) => (
  <form className={style.filter}>
    {/* Серийный номер */}
    <div className={style.filterItem}>
      <label htmlFor='serialNumber'>Серийный номер</label>
      <Input
        id='serialNumber'
        type='text'
        value={filters.serialNumber}
        placeholder='Введите'
        onChange={(val) => onChange('serialNumber', val)}
      />
    </div>

    {/* Название станции */}
    <div className={style.filterItem}>
      <label htmlFor='stationName'>Название станции</label>
      <Input
        id='stationName'
        type='text'
        value={filters.stationName}
        placeholder='Введите'
        onChange={(val) => onChange('stationName', val)}
      />
    </div>

    {/* Событие */}
    <div className={style.filterItem}>
      <label htmlFor='event'>Поиск по событию</label>
      <Input
        id='event'
        type='text'
        value={filters.event}
        placeholder='Введите'
        onChange={(val) => onChange('event', val)}
      />
    </div>
    <div className={style.filterItem}>
      <label htmlFor='event'>Начало</label>
      <Input
        type='datetime-local'
        value={filters.dateFrom}
        onChange={(val) => onChange('dateFrom', val)}
      />
      <label htmlFor='event'>Конец</label>
      <Input
        type='datetime-local'
        value={filters.dateTo}
        onChange={(val) => onChange('dateTo', val)}
      />
    </div>
    <div className={style.filterItem}>
      <label htmlFor='stationName'>Общее время</label>
      <Input
        id='stationName'
        type='text'
        value={filters.stationName}
        placeholder='Введите'
        onChange={(val) => onChange('stationName', val)}
      />
    </div>
  </form>
);

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
      <label htmlFor='id'>Серийный номер</label>
      <Input
        id='id'
        type='text'
        value={filters.id}
        placeholder='Введите'
        onChange={(val) => onChange('id', val)}
      />
    </div>

    {/* Название станции */}
    <div className={style.filterItem}>
      <label htmlFor='station_id'>Название станции</label>
      <Input
        id='station_id'
        type='text'
        value={filters.station_id}
        placeholder='Введите'
        onChange={(val) => onChange('station_id', val)}
      />
    </div>

    <div className={style.filterItem}>
      <label htmlFor='event_type'>Поиск по событию</label>
      <select
        id='event_type'
        value={filters.event_type}
        onChange={(e) => onChange('event_type', e.target.value)}
        // className={style.select}
      >
        <option value=''>Все</option>
        <option value='IMPACT'>Повреждение</option>
        <option value='CV_EVENT'>Событие</option>
        <option value='CONNECTOR_STATE_CHANGE'>Изменение коннектора</option>
        <option value='STATION_STATE_UPDATE'>Обновление станции</option>
        <option value='PARKING_STATUS'>Статус парковки</option>
        <option value='PARKING_VIOLATION'>Нарушение: занятие места</option>
      </select>
    </div>
    <div className={style.filterItem}>
      <label htmlFor='start_time'>Начало</label>
      <Input
        type='datetime-local'
        value={filters.start_time}
        onChange={(val) => onChange('start_time', val)}
      />
      <label htmlFor='end_time'>Конец</label>
      <Input
        type='datetime-local'
        value={filters.end_time}
        onChange={(val) => onChange('end_time', val)}
      />
    </div>
    <div className={style.filterItem}>
      <label htmlFor='total'>Общее время</label>
      {/* <Input
        id='total'
        type='text'
        value={filters.total}
        placeholder='Введите'
        onChange={(val) => onChange('total', val)} */}
      {/* /> */}
    </div>
  </form>
);

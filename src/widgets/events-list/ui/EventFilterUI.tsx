import { Input } from '../../../shared/ui/Input';
import { IItem } from '../../../shared/types';
import style from './EventFilterUI.module.css';

interface Props {
  filters: Record<string, string>;
  onChange: (field: string, value: string) => void;
}

export const EventsFilters = ({ filters, onChange }: Props) => {
  const filterList: IItem[] = [
    {
      name: 'Серийный номер',
      type: 'text',
      value: filters.serialNumber,
      onChange: (val) => onChange('serialNumber', val),
      placeholder: 'Введите'
    },
    {
      name: 'Название станции',
      type: 'text',
      value: filters.stationName,
      onChange: (val) => onChange('stationName', val),
      placeholder: 'Введите'
    },
    {
      name: 'Поиск по событию',
      type: 'text',
      value: filters.event,
      onChange: (val) => onChange('event', val),
      placeholder: 'Введите'
    },
    {
      name: 'Поиск по времени',
      type: 'datetime-local',
      value: filters.date,
      onChange: (val) => onChange('date', val)
    },
    {
      name: 'Длительность',
      type: 'text',
      value: filters.durationTime,
      onChange: (val) => onChange('durationTime', val),
      placeholder: 'Введите'
    }
  ];

  return (
    <div className={style.filter}>
      {filterList.map((item, i) => (
        <div key={i} className={style.filter_item}>
          <label>{item.name}</label>
          <Input {...item} />
        </div>
      ))}
    </div>
  );
};

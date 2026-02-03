import { IEventData } from '../../../shared/types';
import styles from './EventTableUI.module.css';
interface Props {
  data: IEventData[];
  onItemClick: (id: string, eventId: string) => void;
}

export const EventsTable = ({ data, onItemClick }: Props) => {
  if (!data.length) return <div>Нет данных, соответствующих фильтрам</div>;

  return (
    <ul className={styles.list}>
      {data.map((event) => (
        <li
          className={styles.item}
          key={event.id}
          onClick={() => onItemClick(event.id, event.event_id)}
        >
          <span>{event.serialNumber}</span>
          <span>{event.nameStation}</span>
          <span>{event.eventName}</span>
          <span>{event.date}</span>
          <span>{event.durationEvent}</span>
        </li>
      ))}
    </ul>
  );
};

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
          key={event.station_id}
          onClick={() => onItemClick(event.station_id, event.event_id)}
        >
          <span>{event.serialNumber}</span>
          <span>{event.nameStation}</span>
          <span>{event.eventName}</span>
          <span className={styles.span_date}>{event.date}</span>
          <span className={styles.span_duration}>{event.durationEvent}</span>
        </li>
      ))}
    </ul>
  );
};

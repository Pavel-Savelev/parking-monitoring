import { IEvent } from '../../../shared/types';
import styles from './EventTableUI.module.css';
import { BaseFormatDate } from '../../../utils/baseFormatDate';
import { GroupFormatDate } from '../../../utils/groupFormatDate/GroupFormatDate';
import { CountTotalTime } from '../../../utils/CalcDuration';
import { EventFormatType } from '../../../utils/eventFormatTypes';
interface Props {
  data: IEvent[];
  onItemClick: (id: string, eventId: string) => void;
}

export const EventsTable = ({ data, onItemClick }: Props) => {
  if (!data.length) return <div>Нет данных, соответствующих фильтрам</div>;

  return (
    <ul className={styles.list}>
      {data.map((event) => (
        <li
          className={styles.item}
          key={`${event.id}-${event.station_id} `}
          onClick={() => onItemClick(event.station_id, event.id)}
        >
          <span className='eventId'>{event.id}</span>
          <span>{event.station_id}</span>
          <span>
            {EventFormatType({
              type: event.event_type
            })}
          </span>
          <span className={styles.span_date}>
            {GroupFormatDate({
              date_start: event.start_time,
              date_end: event.end_time
            })}
          </span>
          <span className={styles.span_duration}>
            {CountTotalTime({
              date_start: event.start_time,
              date_end: event.end_time
            })}
          </span>
        </li>
      ))}
    </ul>
  );
};

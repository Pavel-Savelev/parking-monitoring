import styles from './EventList.module.css';
import { EventItem } from './EventItem';
import { IEventStationData } from 'shared/types';

interface IEventProp {
  data: IEventStationData;
}

export function EventList({ data }: IEventProp) {
  return (
    <>
      <span className={styles.listName}>Список событий</span>
      <div className={styles.line} />
      <ul className={styles.list}>
        {data.events.map((event, index) => (
          <EventItem data={event} key={index} />
        ))}
      </ul>
    </>
  );
}

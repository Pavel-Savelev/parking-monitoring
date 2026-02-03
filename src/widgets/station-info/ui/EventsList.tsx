import styles from './EventList.module.css';
import { EventItem } from './EventItem';
import { IEventData } from 'shared/types';

interface IEventProp {
  data: IEventData[];
}

export function EventList({ data }: IEventProp) {
  return (
    <>
      <span className={styles.listName}>Список событий</span>
      <div className={styles.line} />
      <ul className={styles.list}>
        {data.map((event, index) => (
          <EventItem data={event} key={index} />
        ))}
      </ul>
    </>
  );
}

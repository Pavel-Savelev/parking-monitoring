import styles from './EventList.module.css';
import { EventItem } from '../../../Station/ui/EventItem/EventItem';
import { IEventData } from '../../../Station/Station';

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

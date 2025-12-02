import styles from './Events.module.css';
import { IEventData } from './type';
import eventStations from '../../mockData/events-stations.json';
import { EventsListUI } from './list/EventsList';

export const mockStations: IEventData[] = eventStations as IEventData[];

export const Events: React.FC = () => (
  <>
    <EventsListUI data={mockStations} />
  </>
);

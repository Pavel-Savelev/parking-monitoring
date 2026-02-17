import { IEventData } from '../../shared/types';
import eventStations from '../../mockData/events-stations.json';
import { EventsList } from '../../widgets/events-list/EventsList';

export const mockStations: IEventData[] = eventStations as IEventData[];

export const EventsPage: React.FC = () => (
  <>
    <EventsList data={mockStations} />
  </>
);

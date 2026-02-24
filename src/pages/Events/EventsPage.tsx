import { IEventData } from '../../shared/types';
import eventStations from '../../mockData/events-stations.json';
import { EventsList } from '../../widgets/events-list/EventsList';
// TODO переделать логику в виджеты и даже передачу данных апи

export const EventsPage: React.FC = () => (
  <>
    <EventsList />
  </>
);

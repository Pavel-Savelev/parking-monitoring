import { Connectors } from './ui/Connectors/Connectors';
import styles from './Station.module.css';
import { EventList } from './ui/EventsList/EventsList';
import { Monitor } from './ui/Monitor/Monitor';
import { Information } from './ui/Information/Information';
import { useParams } from 'react-router-dom';

interface IConnector {
  connectorType: string;
  connectorStatus: string;
  connectorName: string;
}

interface ICurrentEvent {
  event: string;
  date: string;
  address: string;
  typeAuto: string;
  parkingStatus: string;
  plateAuto: string;
  personFace: string;
}

export interface IEventData {
  id: string;
  date: string;
  eventName: string;
  plateAuto: string;
  typeAuto: 'electrical' | 'gas';
  address: string;
}

const currentEvent: ICurrentEvent = {
  event: 'Зарядка начата',
  date: '2024-01-15',
  address: 'ул. Ленина, д. 10',
  typeAuto: 'electrical',
  parkingStatus: 'nothing',
  plateAuto: 'А123ВС77',
  personFace: ''
};

const eventData: IEventData[] = [
  {
    id: '2',
    date: '2024-01-15',
    eventName: 'Зарядка завершена',
    plateAuto: 'А123ВС77',
    typeAuto: 'electrical',
    address: 'ул. Ленина, д. 10'
  },
  {
    id: '3',
    date: '2024-01-15',
    eventName: 'Заправка начата',
    plateAuto: 'Е456КХ77',
    typeAuto: 'gas',
    address: 'пр. Мира, д. 25'
  },
  {
    id: '4',
    date: '2024-01-15',
    eventName: 'Заправка завершена',
    plateAuto: 'Е456КХ77',
    typeAuto: 'gas',
    address: 'пр. Мира, д. 25'
  },
  {
    id: '5',
    date: '2024-01-15',
    eventName: 'Ошибка подключения',
    plateAuto: 'Н012СТ77',
    typeAuto: 'electrical',
    address: 'ул. Центральная, д. 5'
  },
  {
    id: '6',
    date: '2024-01-15',
    eventName: 'Зарядка начата',
    plateAuto: 'М789ОР77',
    typeAuto: 'electrical',
    address: 'ул. Зеленая, д. 15'
  },
  {
    id: '7',
    date: '2024-01-15',
    eventName: 'Заправка начата',
    plateAuto: 'Н012СТ77',
    typeAuto: 'gas',
    address: 'ш. Московское, д. 100'
  },
  {
    id: '8',
    date: '2024-01-15',
    eventName: 'Системная ошибка',
    plateAuto: 'Н012СТ77',
    typeAuto: 'electrical',
    address: 'ул. Садовая, д. 8'
  }
];

const data: IConnector[] = [
  { connectorName: 'GBT', connectorType: 'GBT', connectorStatus: 'Available' },
  {
    connectorName: 'Type-2',
    connectorType: 'Type2',
    connectorStatus: 'Charging'
  },
  {
    connectorName: 'Chademo',
    connectorType: 'Chademo',
    connectorStatus: 'Unavailable'
  }
];

export const StationCard: React.FC = () => {
  const { serialNumber } = useParams();

  return (
    <>
      <div className={styles.content_camera}>
        <Connectors data={data} />
        <Monitor />
        <Information data={currentEvent} />
      </div>
      <div className={styles.content_events}>
        <EventList data={eventData} />
      </div>
    </>
  );
};

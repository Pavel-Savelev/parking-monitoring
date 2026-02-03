// TODO Чтобы убрать ошибку перезагрузки нужно правильно расставить моковые данные дабы убрать хардкодинг
// TODO Для этого необходимо распределить все по ui компанентам и иазделить бизнес логику
// TODO Продумать JSON файлы для конкретной работы
import { useParams } from 'react-router-dom';
// import styles from './Station.module.css';
import { Monitor } from '../../widgets/station-info/ui/Monitor';
import { Information } from '../../widgets/station-info/ui/Information';
import { Connectors } from './ui/Connectors';
import { EventList } from './ui/EventsList';
import { IConnector, IEventData, IMainData } from 'shared/types';

interface IStationData {
  connectors: IConnector[];
  mainInfo: IMainData;
  events: IEventData[];
}

interface IStationDataProps {
  data: IStationData;
}

export const StationInfoPage: React.FC<IStationDataProps> = ({ data }) => {
  const { id, event_id } = useParams();
  console.log(id, event_id);

  return (
    <div className={styles.container}>
      <div className={styles.content_camera}>
        <Connectors data={data.connectors} />
        <Monitor />
        <Information data={data.mainInfo} />
      </div>
      <div className={styles.content_events}>
        <EventList data={data.events} />
      </div>
    </div>
  );
};

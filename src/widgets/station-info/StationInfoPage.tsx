// TODO Поменять размер текста на коннекторах
import { Monitor } from '../../widgets/station-info/ui/Monitor';
import { Information } from '../../widgets/station-info/ui/Information';
import { Connectors } from './ui/Connectors';
import { EventList } from './ui/EventsList';
import { IConnectors, IEventStationData, IMainData } from 'shared/types';
import styles from './StationInfoPage.module.css';

interface IStationDataProps {
  connectors: IConnectors;
  mainInfo: IMainData;
  events: IEventStationData;
}

export const StationInfoPage: React.FC<IStationDataProps> = ({
  connectors,
  mainInfo,
  events
}) => (
  <>
    <Connectors data={connectors} />
    <Monitor />
    <Information data={mainInfo} />
  </>
);

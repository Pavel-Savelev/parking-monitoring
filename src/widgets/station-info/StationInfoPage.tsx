// TODO Поменять размер текста на коннекторах
import { Monitor } from '../../widgets/station-info/ui/Monitor';
import { Information } from '../../widgets/station-info/ui/Information';
import { Connectors } from './ui/Connectors';
import { IConnectors, IEventStationData, IMainData } from 'shared/types';
import { VideoSection } from './ui/VideoList';

// prosto tak
const anyData = [
  {
    id: '12411',
    name: 'ESC',
    something: 'true',
    date: new Date(),
    event: 'connector down'
  },
  {
    id: '11111',
    name: 'ESC-11',
    something: 'true',
    date: new Date(),
    event: 'connector down'
  },
  {
    id: '123',
    name: 'ES-2C',
    something: 'true',
    date: new Date(),
    event: 'connector down'
  },
  {
    id: '1245',
    name: 'ESC-3',
    something: 'true',
    date: new Date(),
    event: 'connector down'
  },
  {
    id: '12455',
    name: 'ESC-4',
    something: 'true',
    date: new Date(),
    event: 'connector down'
  }
];

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
    <VideoSection data={anyData} />
  </>
);

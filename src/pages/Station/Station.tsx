import { StationInfoPage } from '../../widgets';
import stationConnectorsData from '../../mockData/station-connectors-info.json';
import stationEventsData from '../../mockData/station-events-info.json';
import stationSimpleData from '../../mockData/station-simple.json';
import { IConnector, IMainData, IEventData } from 'shared/types';

interface IStationData {
  connectors: IConnector[];
  mainInfo: IMainData;
  events: IEventData[];
}

export const StationPage: React.FC = () => {
  const mainInfoStation: IMainData = stationSimpleData as IMainData;
  const connectorsStation: IConnector[] = stationConnectorsData as IConnector[];
  const eventStation: IEventData[] = stationEventsData as IEventData[];

  const stationData: IStationData = {
    mainInfo: mainInfoStation,
    connectors: connectorsStation,
    events: eventStation
  };

  return <StationInfoPage data={stationData} />;
};

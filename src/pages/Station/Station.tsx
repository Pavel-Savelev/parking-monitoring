import { StationInfoPage } from '../../widgets';
import stationConnectorsData from '../../mockData/station-connectors-info.json';
import stationEventsData from '../../mockData/station-events-info.json';
import stationSimpleData from '../../mockData/station-main-data.json';
import { IConnectors, IMainData, IEventStationData } from 'shared/types';
import { useParams } from 'react-router-dom';
// TODO переделать логику в виджеты и даже передачу данных апи
export const StationPage: React.FC = () => {
  // id вызываем здесь и передаем в chilldren дальше
  const { id } = useParams();

  const mainInfoStation: IMainData[] = stationSimpleData as IMainData[];
  const connectorsStation: IConnectors[] =
    stationConnectorsData as IConnectors[];
  const eventStation: IEventStationData[] =
    stationEventsData as IEventStationData[];

  // Поиск нужного id
  const connectors = connectorsStation.filter((item) => {
    if (item.station_id.toString() === id) {
      return item;
    }
  });

  const info = mainInfoStation.filter((item) => {
    if (item.station_id.toString() === id) {
      return item;
    }
  });
  const events = eventStation.filter((item) => {
    if (item.station_id.toString() === id) {
      return item;
    }
  });

  if (!info[0] || !connectors[0] || !events[0]) {
    return <span>Station not found</span>;
  }

  return (
    <StationInfoPage
      connectors={connectors[0]}
      mainInfo={info[0]}
      events={events[0]}
    />
  );
};

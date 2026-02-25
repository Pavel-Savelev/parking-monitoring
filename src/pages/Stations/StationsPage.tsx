import { StationsList } from '../../widgets';
import stationData from '../../mockData/parking-stations.json';
import { IStationData } from '../../shared/types';
export const mockStationData = stationData as IStationData[];
// TODO переделать логику в виджеты и даже передачу данных апи
export const StationsPage: React.FC = () => (
  <>
    <StationsList />
  </>
);

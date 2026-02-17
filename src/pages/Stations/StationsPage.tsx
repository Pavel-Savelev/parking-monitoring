import { StationsList } from '../../widgets';
import stationData from '../../mockData/parking-stations.json';
import { IStationData } from '../../shared/types';
export const mockStationData = stationData as IStationData[];

export const StationsPage: React.FC = () => (
  <>
    <StationsList data={mockStationData} />
  </>
);

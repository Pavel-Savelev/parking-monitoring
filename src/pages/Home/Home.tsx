import styles from './Home.module.css';
import { StationsListUI } from './ui/list/StationsListUI';
import { IStationData } from './type';
import stationData from '../../mockData/parking-stations.json';
export const mockStationData: IStationData[] = stationData as IStationData[];

export const Home: React.FC = () => (
  <>
    <StationsListUI data={mockStationData} />
  </>
);

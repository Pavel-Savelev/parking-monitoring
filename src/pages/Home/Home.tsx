import styles from './Home.module.css';
import { StationsListUI } from './ui/list/StationsListUI';

import stationData from '../../mockData/parking-stations.json';
import { IStationData } from '../../shared/type';
export const mockStationData: IStationData[] = stationData as IStationData[];

export const Home: React.FC = () => (
  <>
    <StationsListUI data={mockStationData} />
  </>
);

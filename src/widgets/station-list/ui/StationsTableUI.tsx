import { useNavigate } from 'react-router-dom';
import { IStationData } from '../../../shared/types';
import styles from './StationsTableUI.module.css';

interface IProps {
  data: IStationData[];
}

export function StationsTable({ data }: IProps) {
  const navigate = useNavigate();

  return (
    <ul className={styles.list}>
      {data.length > 0 ? (
        data.map((station) => (
          <li
            className={styles.item}
            key={station.serialNumber}
            onClick={() => navigate(`/station/${station.id}`)}
          >
            <span>{station.serialNumber}</span>
            <span>{station.nameStation}</span>
            <span>{station.parkingStatus}</span>
            <span>{station.city}</span>
            <span>{station.useTime}</span>
          </li>
        ))
      ) : (
        <div className={styles.no_results}>
          Нет данных, соответствующих фильтрам
        </div>
      )}
    </ul>
  );
}

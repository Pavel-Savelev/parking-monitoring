import { useNavigate } from 'react-router-dom';
import { IStations } from '../../../shared/types';
import styles from './StationsTableUI.module.css';

interface IProps {
  data: IStations[];
}

const formatZones = (obj: Record<string, string>): string => {
  const values = Object.values(obj).filter((v) => v); // убираем пустые значения
  return values.length > 0 ? values.join(' | ') : 'Нет данных';
};

export function StationsTable({ data }: IProps) {
  const navigate = useNavigate();

  const handleNavigate = (id: string) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    navigate(`/station/${id}`);
  };

  const allZones = Array.from(
    new Set(
      data.flatMap((station) => [
        ...Object.keys(station.zone_status),
        ...Object.keys(station.duration)
      ])
    )
  ).sort();
  return (
    <div className={styles.container}>
      {/* Заголовки колонок */}

      <ul className={styles.list}>
        {data.length > 0 ? (
          data.map((station) => (
            <li
              className={styles.item}
              key={station.id}
              onClick={() => handleNavigate(station.id.toString())}
            >
              <span className={styles.id}>{station.id}</span>
              <span className={styles.stationId}>{station.station_id}</span>

              {/* Статусы зон */}
              <div className={styles.zones}>
                {allZones.map((zone) => {
                  const status = station.zone_status[zone];
                  if (!status) return null;
                  return (
                    <span
                      key={zone}
                      className={`${styles.zoneStatus} ${
                        status === 'FREE' ? styles.free : styles.occupied
                      }`}
                      title={`Зона ${zone}`}
                    >
                      {status}
                    </span>
                  );
                })}
                {Object.keys(station.zone_status).length === 0 && (
                  <span className={styles.noData}>Нет данных</span>
                )}
              </div>

              {/* Локация */}
              <span className={styles.location}>Казань, КГЭУ парковка</span>

              {/* Длительности */}
              <div className={styles.durations}>
                {allZones.map((zone) => {
                  const duration = station.duration[zone];
                  if (!duration) return null;
                  return (
                    <span
                      key={zone}
                      className={styles.duration}
                      title={`Зона ${zone}`}
                    >
                      {duration}
                    </span>
                  );
                })}
                {Object.keys(station.duration).length === 0 && (
                  <span className={styles.noData}>Нет данных</span>
                )}
              </div>
            </li>
          ))
        ) : (
          <div className={styles.noResults}>
            Нет данных, соответствующих фильтрам
          </div>
        )}
      </ul>
    </div>
  );
}

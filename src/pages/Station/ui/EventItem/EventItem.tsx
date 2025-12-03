import { useState } from 'react';
import styles from './EventItem.module.css';
import { IEventData } from '../../Station';

interface IEventProp {
  data: IEventData;
}

export function EventItem({ data }: IEventProp) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <li className={styles.item}>
      <div className={styles.header}>
        <div className={styles.main_info} onClick={toggleExpand}>
          <div className={styles.event_head}>
            <label className={styles.event_name}>{data.eventName}:</label>
            <span className={styles.date}>{data.date}</span>
          </div>
          <button
            className={`${styles.arrow} ${isExpanded ? styles.arrow_expanded : ''}`}
            onClick={toggleExpand}
            aria-label={isExpanded ? 'Свернуть детали' : 'Развернуть детали'}
          >
            ▼
          </button>
        </div>
      </div>
      <div className={styles.line} />
      <div className={`${styles.details} ${isExpanded ? styles.expanded : ''}`}>
        <div className={styles.detail_row}>
          <span className={styles.detail_label}>ID:</span>
          <span className={styles.detail_value}>{data.id}</span>
        </div>
        {data.plateAuto && (
          <div className={styles.detail_row}>
            <span className={styles.detail_label}>Номер авто:</span>
            <span className={styles.detail_value}>{data.plateAuto}</span>
          </div>
        )}
        <div className={styles.detail_row}>
          <span className={styles.detail_label}>Тип авто:</span>
          <span className={styles.detail_value}>
            {data.typeAuto === 'electrical' ? 'Электромобиль' : 'Бензиновый'}
          </span>
        </div>
        <div className={styles.detail_row}>
          <span className={styles.detail_label}>Адрес:</span>
          <span className={styles.detail_value}>{data.address}</span>
        </div>
        <div className={styles.goNext}>
          <button>Перейти</button>
        </div>
      </div>
    </li>
  );
}

import { useState } from 'react';
import styles from './EventItem.module.css';
import { IStationEvent } from 'shared/types';

interface IEventProp {
  data: IStationEvent;
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
            <svg
              width='20'
              height='20'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M4.22413 7.57194C3.84013 7.71594 3.63613 8.20794 3.82813 8.56794C3.91213 8.72394 5.70013 10.5599 7.78813 12.6479C11.3041 16.1639 11.6161 16.4399 12.0001 16.4399C12.3841 16.4399 12.7081 16.1519 16.3441 12.5039C19.0081 9.83994 20.2801 8.48394 20.2801 8.31594C20.2801 7.93194 19.8961 7.52394 19.5121 7.52394C19.2241 7.52394 18.5881 8.11194 15.5881 11.1119L12.0001 14.6999L8.43613 11.1479C6.46813 9.19194 4.77613 7.55994 4.68013 7.53594C4.58413 7.49994 4.38013 7.51194 4.22413 7.57194Z'
                fill='var(--color-icon)'
              />
            </svg>
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

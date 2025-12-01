import styles from './Information.module.css';
interface ICurrentEvent {
  event: string;
  date: string;
  address: string;
  typeAuto: string;
  parkingStatus: string;
  plateAuto: string;
  personFace: string;
}

interface ICurrentEventProp {
  data: ICurrentEvent;
}

export function Information({ data }: ICurrentEventProp) {
  return (
    <div className={styles.info}>
      <div className={styles.info_event}>
        <div className={styles.head}>
          <label>Информация</label>
          <span>Статус парковки: {data.parkingStatus}</span>
        </div>
        <div className={styles.line} />
        <div className={styles.list}>
          <div className={styles.item}>
            <label>Собитие:</label>
            <span>{data.event}</span>
          </div>
          <div className={styles.item}>
            <label>Время:</label>
            <span>{data.date}</span>
          </div>
          <div className={styles.item}>
            <label>Место:</label>
            <span>{data.address}</span>
          </div>
        </div>
      </div>
      <div className={styles.info_event}>
        <div className={styles.head}>
          <label>Информация о клиенте</label>
        </div>
        <div className={styles.line} />
        <div className={styles.list}>
          <div className={styles.item}>
            <label>Номер:</label>
            <span>{data.plateAuto}</span>
            <button>посмотреть</button>
          </div>
          <div className={styles.item}>
            <label>Лицо:</label>
            <span>{data.personFace}</span>
            <button>посмотреть</button>
          </div>
          <div className={styles.item}>
            <label>Тип ТС:</label>
            <span>{data.typeAuto}</span>
            <button>посмотреть</button>
          </div>
        </div>
      </div>
    </div>
  );
}

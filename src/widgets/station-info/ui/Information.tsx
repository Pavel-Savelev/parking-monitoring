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
          {/* <span>Статус парковки: {data.parkingStatus}</span> */}
        </div>
        <div className={styles.line} />
        <div className={styles.list}>
          <div className={styles.item}>
            <label>Номер станции:</label>
            <span>{data.address}</span>
          </div>
          <div className={styles.item}>
            <label>ssh:</label>
            <span>{data.address}</span>
          </div>
          <div className={styles.item}>
            <label>ip:</label>
            <span>{data.address}</span>
          </div>
          <div className={styles.item}>
            <label>то-то:</label>
            <span>{data.address}</span>
          </div>
          <div className={styles.item}>
            <label>кто-то:</label>
            <span>{data.address}</span>
          </div>
          <div className={styles.item}>
            <label>кому-то:</label>
            <span>{data.address}</span>
          </div>
        </div>
        <div className={styles.line} />
      </div>
    </div>
  );
}

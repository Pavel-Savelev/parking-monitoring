import styles from './Monitor.module.css';

// TODO make a button for api request to camera
export function Monitor() {
  return (
    <div className={styles.video}>
      <iframe
        src='http://192.168.21.162:5000/stream'
        title='Camera Monitor'
        width='100%'
        height='100%'
        frameBorder='0'
        allowFullScreen
        className={styles.stream}
      />
    </div>
  );
}

import styles from './Monitor.module.css';

interface MonitorProps {
  streamUrl?: string;
  title?: string;
}

export function Monitor({
  streamUrl = 'http://192.168.21.162:5000/stream',
  title = 'Camera Monitor'
}: MonitorProps) {
  return (
    <div className={styles.video}>
      <iframe
        src={streamUrl}
        title={title}
        width='100%'
        height='100%'
        frameBorder='0'
        allowFullScreen
        className={styles.stream}
      />
    </div>
  );
}

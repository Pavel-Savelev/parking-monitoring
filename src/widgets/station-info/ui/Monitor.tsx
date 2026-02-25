import styles from './Monitor.module.css';

interface MonitorProps {
  streamUrl?: string;
  title?: string;
}

export function Monitor({
  streamUrl = 'http://192.168.21.224:5000/api/live-stream'
}) {
  return (
    <div className={styles.container}>
      {/* Если API отдает поток изображений, img поймет это сам */}
      <img src={streamUrl} className={styles.video} alt='Live Stream' />
    </div>
  );
}

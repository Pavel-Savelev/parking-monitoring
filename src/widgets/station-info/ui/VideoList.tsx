import { Modal } from '@ui/Modal/Modal';
import styles from './VideoList.module.css';
import { useState } from 'react';

interface IVideo {
  name: string;
  something: string;
  date: Date;
  event: string;
}

interface IVideoProps {
  data: IVideo[];
}
// Простой вариант без selectedVideo
export function VideoSection({ data }: IVideoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);

  const formatDate = (date: Date) => {
    new Date(date).toLocaleDateString('ru-RU', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  return (
    <>
      <div className={styles.section}>
        {data.map((video, index) => (
          <div
            key={index}
            className={styles.video_content}
            onClick={() => {
              setCurrentVideo(video);
              setIsModalOpen(true);
            }}
          >
            <h3>{video.name}</h3>
            <p>{video.something}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setCurrentVideo(null);
        }}
        title={
          currentVideo
            ? `${currentVideo.name} - ${formatDate(currentVideo.date)}`
            : ''
        }
      >
        {currentVideo && (
          <div>
            <p>{currentVideo.something}</p>
            <div>
              <div className={styles.modal_video}>video</div>
              <div className={styles.modal_events}>{currentVideo.event}</div>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

import { Modal } from '@ui/Modal/Modal';
import styles from './VideoList.module.css';
import { useState } from 'react';
import VideoModal from '../../../widgets/videoModal/VideoModal';

interface IVideo {
  id: string;
  name: string;
  something: string;
  date: Date;
  event: string;
}

interface IVideoProps {
  data: IVideo[];
}

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
        {currentVideo && <VideoModal videoId={currentVideo.id} />}
        {/* Было videoId={id} - исправил на currentVideo.id */}
      </Modal>
    </>
  );
}

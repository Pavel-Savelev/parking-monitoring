import { Modal } from '@ui/Modal/Modal';
import styles from './VideoList.module.css';
import { useEffect, useState, useRef } from 'react'; // добавил useRef
import VideoModal from '../../../widgets/videoModal/VideoModal';
import { useLocation } from 'react-router-dom';

interface IVideo {
  id: string;
  name: string;
  something: string;
  date: Date;
  eventId: string;
}

interface IVideoProps {
  data: IVideo[];
}

export function VideoSection({ data }: IVideoProps) {
  // здесь вызываем по eventId в modal нужный нам запрос на скачивание видео

  const location = useLocation();
  const videoRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<IVideo | null>(null);

  // Прокрутка к видео
  useEffect(() => {
    if (location.state?.openModal) {
      const eventId = location.state.eventId;

      const videoToOpen = data.find(
        (video) => video.eventId === eventId || video.id === eventId
      );

      if (videoToOpen) {
        setCurrentVideo(videoToOpen);
        setIsModalOpen(true);

        // Прокручиваем к видео после открытия модалки
        setTimeout(() => {
          const element = videoRefs.current.get(videoToOpen.id);
          if (element) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
            // Добавляем подсветку
            element.classList.add(styles.highlight);
            setTimeout(() => {
              element.classList.remove(styles.highlight);
            }, 2000);
          }
        }, 100);
      }

      window.history.replaceState({}, document.title);
    }
  }, [location, data]);

  const handleVideoClick = (video: IVideo) => {
    setCurrentVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

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
            key={video.id || index}
            ref={(el) => {
              if (el) {
                videoRefs.current.set(video.id, el);
              } else {
                videoRefs.current.delete(video.id);
              }
            }}
            className={styles.video_content}
            onClick={() => handleVideoClick(video)}
          >
            <h3>{video.name}</h3>
            <p>{video.something}</p>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={
          currentVideo
            ? `${currentVideo.name} - ${formatDate(currentVideo.date)}`
            : ''
        }
      >
        {currentVideo && <VideoModal videoId={currentVideo.eventId} />}
      </Modal>
    </>
  );
}

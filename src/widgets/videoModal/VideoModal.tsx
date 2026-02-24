// components/VideoModal.tsx
import { useState, useEffect, useRef } from 'react';
import { useVideoBlob } from '../../hooks/useVideo';
import styles from './VideoModal.module.css';

interface VideoModalProps {
  videoId: string;
}

function VideoModal({ videoId }: VideoModalProps) {
  const { videoUrl, loading, progress, error } = useVideoBlob(videoId);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  const handleDownload = () => {
    if (videoUrl) {
      const link = document.createElement('a');
      link.href = videoUrl;
      link.download = `video-${videoId}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalBody}>
          {loading && (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner} />
              <p>Загрузка видео... {progress}%</p>
              <div className={styles.progressBar}>
                <div
                  className={styles.progressFill}
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {error && (
            <div className={styles.errorContainer}>
              <p className={styles.errorMessage}>{error}</p>
            </div>
          )}

          {videoUrl && !loading && !error && (
            <div className={styles.videoContainer}>
              <video
                ref={videoRef}
                src={videoUrl}
                controls
                autoPlay
                className={styles.videoPlayer}
                onError={(e) => console.error('Video error:', e)}
              />

              <div className={styles.videoControls}>
                <button onClick={handleDownload} className={styles.downloadBtn}>
                  Скачать видео
                </button>
                <button
                  onClick={handleFullscreen}
                  className={styles.fullscreenBtn}
                >
                  {isFullscreen ? 'Сжать' : 'На весь экран'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default VideoModal;

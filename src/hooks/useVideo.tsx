// hooks/useVideo.ts
import { useState, useEffect } from 'react';
import { getVideoBlob } from '../api/video-event/video-event';

export function useVideoBlob(videoId: string) {
  const [blob, setBlob] = useState<Blob | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!videoId) return;

    let objectUrl: string | null = null;
    const controller = new AbortController();

    const loadVideo = async () => {
      try {
        setLoading(true);
        setProgress(0);
        setError(null);

        // Эмуляция прогресса (если API не отдает реальный прогресс)
        const progressInterval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 90) {
              clearInterval(progressInterval);
              return 90;
            }
            return prev + 10;
          });
        }, 200);

        const blob = await getVideoBlob({
          id: videoId
        });

        clearInterval(progressInterval);
        setProgress(100);
        setBlob(blob);

        // Создаем URL для видео
        objectUrl = URL.createObjectURL(blob);
        setVideoUrl(objectUrl);
      } catch (err) {
        if (err instanceof Error && err.name === 'CanceledError') {
          return;
        }
        setError(err instanceof Error ? err.message : 'Ошибка загрузки видео');
      } finally {
        setLoading(false);
      }
    };

    loadVideo();

    // Очистка при размонтировании или изменении videoId
    return () => {
      controller.abort();
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [videoId]);

  return {
    blob,
    videoUrl,
    loading,
    progress,
    error
  };
}

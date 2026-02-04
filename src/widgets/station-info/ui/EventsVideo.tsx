import React, { useRef, useEffect } from 'react';

interface MonitorProps {
  src: string; // путь к mp4 файлу
  width?: number | string; // ширина видео
  height?: number | string; // высота видео
  autoPlay?: boolean; // автозапуск
  loop?: boolean; // повтор
  muted?: boolean; // без звука
  controls?: boolean; // стандартные контролы
}

export const Monitor: React.FC<MonitorProps> = ({
  src,
  width = '100%',
  height = '100%',
  autoPlay = true,
  loop = true,
  muted = true,
  controls = true
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  // пример использования ref
  useEffect(() => {
    if (videoRef.current && autoPlay) {
      videoRef.current.play().catch(() => {
        console.warn('Автозапуск видео заблокирован браузером');
      });
    }
  }, [autoPlay]);

  return (
    <div style={{ width, height }}>
      <video
        ref={videoRef}
        src={src}
        width='100%'
        height='100%'
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        style={{ objectFit: 'cover' }}
      />
    </div>
  );
};

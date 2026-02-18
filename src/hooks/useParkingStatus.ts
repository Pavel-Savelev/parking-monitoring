// если появятся проблемы с загрусзкой можно использовать const controller = new AbortController();

import { IParkingStatusByStatus } from 'shared/types';
import { getParkingStatus } from '../api/parking-status/parking-status.api';
import { useEffect, useState } from 'react';

export function useParkingStatus(station_id: string) {
  const [data, setData] = useState<IParkingStatusByStatus>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getParkingStatus({ station_id });
      setData(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, [station_id]);

  return {
    data,
    loading,
    error
  };
}

// более лучший варинт по мнению не моему
// export function useParkingStatus(station_id: string) {
// useEffect(() => {
//   // 1. Создаем "пульт" для этого эффекта
//   const controller = new AbortController();

//   const fetchData = async () => {
//     try {
//       // 2. Привязываем сигнал к запросу
//       const response = await axios.get(`/api/parking/${station_id}`, {
//         signal: controller.signal  // 👈 ключевой момент
//       });
//       setData(response.data);
//     } catch (err) {
//       // 4. Ловим отмену
//       if (axios.isCancel(err) || err.name === 'AbortError') {
//         console.log('Запрос отменен');
//         return;
//       }
//       setError(err.message);
//     }
//   };

//   fetchData();

//   // 3. При размонтировании или новой station_id - отменяем
//   return () => {
//     controller.abort(); // 🛑 Нажимаем красную кнопку
//     // Все запросы с этим signal прерываются!
//   };
// }, [station_id]);
// }

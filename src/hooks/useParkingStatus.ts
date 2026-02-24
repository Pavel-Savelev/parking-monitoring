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

// если появятся проблемы с загрусзкой можно использовать const controller = new AbortController();

import { getParkingStatus } from '../api/parking-status/parking-status.api';
import { useEffect, useState } from 'react';

export function useParkingStatus(station_id: string) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setLoading(true);
      setError(null);

      try {
        const res = await getParkingStatus({ station_id });
        if (!cancelled) setData(res);
      } catch (err) {
        if (!cancelled) setError(err as Error);
      } finally {
        if (!cancelled) setLoading(false);
      }
    }

    load();

    return () => {
      cancelled = true;
    };
  }, []);

  return { data, loading, error };
}

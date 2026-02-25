import { getAllStations } from '../api/all-stations/getStations';
import { useEffect, useState } from 'react';
import { IStations } from '../shared/types';

export function useStations() {
  const [stations, setStations] = useState<IStations[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fetchEvents = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await getAllStations();
      setStations(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Ошибка загрузки');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return {
    stations,
    loading,
    error
  };
}

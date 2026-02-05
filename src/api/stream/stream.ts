import { api } from '../index';

export async function getStream({ station_id }: { station_id: string }) {
  try {
    const res = await api.get(`/stream`);
    return res.data;
  } catch (err) {
    throw new Error('Ошибка запроса к онлайн трансляци', { cause: err });
  }
}

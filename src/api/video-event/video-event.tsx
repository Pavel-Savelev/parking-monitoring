import { api } from '../index';

export async function getVideoBlob({ id }: { id: string }) {
  try {
    const res = await api.get(`/api/events/${id}/video`, {
      responseType: 'blob'
    });
    return res.data;
  } catch (err) {
    throw new Error('Ошибка загрузки видео', { cause: err });
  }
}

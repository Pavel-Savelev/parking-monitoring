import { api } from '../../api';

export async function getAllEvents() {
  try {
    const res = await api.get('api/events');
    return res.data;
  } catch (err) {
    throw new Error('Не удалось получить список событий');
  }
}

import { api } from '../../api';

export async function getAllStations() {
  try {
    const res = await api.get('stations');
    return res.data;
  } catch (err) {
    throw new Error('Не удалось получить список событий');
  }
}

//TODO Сделать ошибки throw new Error

import { api } from '../index';

export async function getParkingStatus({ station_id }: { station_id: string }) {
  try {
    const res = await api.get(`/stations/${station_id}/parking-status`);
    return res.data;
  } catch (err) {
    throw new Error('Не удалось получить статус', { cause: err });
  }
}

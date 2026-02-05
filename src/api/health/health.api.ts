//TODO Сделать ошибки throw new Error
import { api } from '../index';

export async function getHealthServerStatus() {
  try {
    const res = await api.get('/health');
    return res.data;
  } catch (err) {
    throw new Error('Сервер недоступен', { cause: err });
  }
}

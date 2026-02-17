import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.BASE_URL || 'http://localhost:3000/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Интерсептор запроса - добавляем токен
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Интерсептор ответа - обрабатываем ошибки
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Очищаем localStorage при ошибке авторизации
      localStorage.removeItem('token');
      localStorage.removeItem('user');

      // Перенаправляем на логин
      window.location.href = '/login';
    }

    // Глобальная обработка других ошибок
    if (error.response?.status === 500) {
      console.error('Server error:', error);
      // Можно показать уведомление пользователю
    }

    // Пробрасываем ошибку дальше
    return Promise.reject(error);
  }
);

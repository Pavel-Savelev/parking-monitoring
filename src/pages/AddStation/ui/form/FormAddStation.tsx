import React, { useState, useEffect } from 'react';
import styles from './FormAddStation.module.css';

interface IFormStation {
  serialNumber: string;
  nameStation: string;
  ip: string;
  modification?: string;
  photo: string;
  address: string;
}

export function FormAddStation() {
  const [formData, setFormData] = useState<IFormStation>({
    serialNumber: '',
    nameStation: '',
    ip: '',
    modification: '',
    photo: '',
    address: ''
  });

  let buttonDisabled;

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedFileName(file.name);

    // Для предпросмотра
    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, photo: previewUrl }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
    // Здесь будет логика сохранения
  };

  const isFormValid = () =>
    formData.serialNumber.trim() !== '' &&
    formData.nameStation.trim() !== '' &&
    formData.address.trim() !== '' &&
    formData.ip.trim() !== '';

  // Очистка blob URL при размонтировании компонента
  useEffect(
    () => () => {
      if (formData.photo && formData.photo.startsWith('blob:')) {
        URL.revokeObjectURL(formData.photo);
      }
    },
    []
  );

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.formGroup}>
          <label htmlFor='serialNumber' className={styles.label}>
            Серийный номер *
          </label>
          <input
            id='serialNumber'
            name='serialNumber'
            type='text'
            value={formData.serialNumber}
            onChange={handleInputChange}
            className={styles.input}
            placeholder='Введите номер'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='nameStation' className={styles.label}>
            Название станции *
          </label>
          <input
            id='nameStation'
            name='nameStation'
            type='text'
            value={formData.nameStation}
            onChange={handleInputChange}
            className={styles.input}
            placeholder='Введите название'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='ip' className={styles.label}>
            IP *
          </label>
          <input
            id='ip'
            name='ip'
            type='text'
            value={formData.ip}
            onChange={handleInputChange}
            className={styles.input}
            placeholder='Пример: 192.168.1.1'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='address' className={styles.label}>
            Адрес *
          </label>
          <input
            id='address'
            name='address'
            type='text'
            value={formData.address}
            onChange={handleInputChange}
            className={styles.input}
            placeholder='Введите адрес'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='modification' className={styles.label}>
            Модификация
          </label>
          <input
            id='modification'
            name='modification'
            type='text'
            value={formData.modification}
            onChange={handleInputChange}
            className={styles.input}
            placeholder='Введите модификацию'
            required
          />
        </div>

        <button
          type='submit'
          className={`${styles.submitButton} ${!isFormValid() ? styles.submitButtonDisabled : ''}`}
          disabled={isFormValid()}
        >
          Сохранить
        </button>
      </form>

      <div className={styles.photo}>
        <div className={styles.imagesPlace}>
          {formData.photo ? (
            <img
              src={formData.photo}
              alt='Предварительный просмотр'
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '4px'
              }}
            />
          ) : (
            <span>Выберите изображение</span>
          )}
        </div>
        <div className={styles.choicePage}>
          {/* Скрытый input для файла */}
          <input
            id='photo'
            name='photo'
            type='file'
            accept='image/*'
            onChange={handleFileChange}
            className={styles.hiddenInput}
            required
          />
        </div>
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import styles from './FormAddStation.module.css';
import { Button } from '@ui/Button';
import { Input } from '@ui/Input';
import { isValidIp } from '../../utils/validation';

interface IFormStation {
  serialNumber: string;
  nameStation: string;
  ip: string;
  modification: string | null;
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

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const previewUrl = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, photo: previewUrl }));
  };

  const handleInputChange = (value: string, fieldName: string) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Данные формы:', formData);
  };

  const handleImagePlaceClick = () => {
    fileInputRef.current?.click();
  };

  const isFormValid = () =>
    formData.serialNumber.trim() == '' ||
    formData.nameStation.trim() == '' ||
    formData.address.trim() == '' ||
    formData.ip.trim() == '' ||
    !isValidIp(formData.ip);

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
            Серийный номер<span>*</span>
          </label>
          <Input
            id='serialNumber'
            name='serialNumber'
            type='text'
            value={formData.serialNumber}
            onChange={(value) => handleInputChange(value, 'serialNumber')}
            className={styles.input}
            placeholder='Введите номер'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='nameStation' className={styles.label}>
            Название станции<span>*</span>
          </label>
          <Input
            id='nameStation'
            name='nameStation'
            type='text'
            value={formData.nameStation}
            onChange={(value) => handleInputChange(value, 'nameStation')}
            className={styles.input}
            placeholder='Введите название'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='ip' className={styles.label}>
            IP<span>*</span>
          </label>
          <Input
            id='ip'
            name='ip'
            type='text'
            value={formData.ip}
            onChange={(value) => handleInputChange(value, 'ip')}
            className={styles.input}
            placeholder='Пример: 192.168.1.1'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='address' className={styles.label}>
            Адрес
            <span>*</span>
          </label>
          <Input
            id='address'
            name='address'
            type='text'
            value={formData.address}
            onChange={(value) => handleInputChange(value, 'address')}
            className={styles.input}
            placeholder='Введите адрес'
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor='modification' className={styles.label}>
            Модификация
          </label>
          <Input
            id='modification'
            name='modification'
            type='text'
            value={formData.modification ?? ''}
            onChange={(value) => handleInputChange(value, 'modification')}
            className={styles.input}
            placeholder='Введите модификацию'
          />
        </div>

        <Button
          type='submit'
          // className={`${styles.submitButton} ${!isFormValid() ? styles.submitButtonDisabled : ''}`}
          disabled={isFormValid()}
        >
          Сохранить
        </Button>
      </form>

      <div className={styles.photo}>
        <div className={styles.imagesPlace} onClick={handleImagePlaceClick}>
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
            <span>+</span>
          )}
        </div>

        {/* Кнопка для выбора фото */}
        <label htmlFor='photo-upload' className={styles.choicePage}>
          Выберите фото
        </label>

        {/* Скрытый input */}
        <input
          ref={fileInputRef}
          id='photo-upload'
          name='photo'
          type='file'
          accept='image/*'
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
    </div>
  );
}

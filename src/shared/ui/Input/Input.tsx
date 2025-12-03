import React, { forwardRef } from 'react';
import styles from './Input.module.css';

interface InputProps {
  type?:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local';
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  name?: string;
  autoComplete?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      type = 'text',
      value,
      onChange,
      placeholder,
      label,
      error,
      disabled = false,
      required = false,
      className = '',
      name,
      autoComplete,
      ...props
    },
    ref
  ) => (
    <div className={`${styles.inputContainer} ${className}`}>
      {label && (
        <label className={styles.label}>
          {label}
          {required && <span className={styles.required}>*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        name={name}
        autoComplete={autoComplete}
        className={`${styles.input} ${error ? styles.error : ''} ${
          disabled ? styles.disabled : ''
        }`}
        {...props}
      />
      {error && <span className={styles.errorText}>{error}</span>}
    </div>
  )
);

Input.displayName = 'Input';

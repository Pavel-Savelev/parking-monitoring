import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './ErrorLayout.module.css';

interface ErrorLayoutProps {
  statusCode: string;
  title: string;
  text: string;
  imageSrc: string;
}

export class ErrorLayout extends Component<ErrorLayoutProps> {
  render() {
    const { statusCode, title, text, imageSrc } = this.props;
    return (
      <div className={styles.errorPageContainer}>
        <div className={styles.errorContent}>
          <img
            src={imageSrc}
            alt={`Ошибка ${statusCode} - ${title}`}
            className={styles.errorImage}
          />

          <h2 className={styles.errorTitle}>{title}</h2>

          <p className={styles.errorText}>{text}</p>

          <div className={styles.buttonContainer}>
            <button type='button' className={styles.outlineButton}>
              Сообщить об ошибке
            </button>

            <Link to='/'>
              <button type='button' className={styles.primaryButton}>
                На главную
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

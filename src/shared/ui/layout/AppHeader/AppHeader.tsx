import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './AppHeader.module.css';
import Logo from '../../../../../public/images/icons/Logo.svg';
import { Input } from '@zlden/react-developer-burger-ui-components';

interface NavigationItem {
  label: string;
  href: string;
  icon?: string;
}

export const AppHeader: React.FC = (): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { label: 'Главная', href: '/' },
    { label: 'О нас', href: '/about' },
    { label: 'Контакты', href: '/contact' }
  ];

  return (
    <header className={styles.app_header}>
      <div className={styles.app_header_container}>
        <img src={Logo} alt='Logo' className={styles.logo} />
        <input type='text' className={styles.input} />
        <nav className={styles.app_nav}>
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href} className={styles.navLink}>
              {item.icon && <span>{item.icon}</span>}
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

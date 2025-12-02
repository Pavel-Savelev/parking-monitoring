import React from 'react';
import styles from './AppSidebar.module.css';
import { useNavigate, useLocation } from 'react-router-dom';
import IconParking from '../../../../../public/images/icons/iconsCompanents/Parking';
import IconListEvents from '../../../../../public/images/icons/iconsCompanents/ListEvents';
import IconAddStation from '../../../../../public/images/icons/iconsCompanents/AddStation';
import IconWarning from '../../../../../public/images/icons/iconsCompanents/Warning';
import IconSettings from '../../../../../public/images/icons/iconsCompanents/Settings';

interface SidebarItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

export const AppSidebar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const location = useLocation();

  const menu: SidebarItem[] = [
    { label: 'Станции', href: '/', icon: <IconParking /> },
    { label: 'События', href: '/events', icon: <IconListEvents /> },
    {
      label: 'Добавить станцию',
      href: '/add-station',
      icon: <IconAddStation />
    },
    {
      label: 'Нарушения',
      href: '/1',
      icon: <IconWarning />
    },
    {
      label: 'Настройки',
      href: '/2',
      icon: <IconSettings />
    }
  ];

  function handleNavigate(href: string): void {
    navigate(href);
  }

  const isActive = (href: string): boolean => {
    if (href === '/' && location.pathname === '/') {
      return true;
    }
    if (href !== '/') {
      return location.pathname.startsWith(href);
    }
    return false;
  };

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {menu.map((item, index) => (
          <div
            key={index}
            className={`${styles.navItem} ${isActive(item.href) ? styles.navItemActive : ''}`}
            onClick={() => handleNavigate(item.href)}
          >
            {item.icon}
            <button key={item.href}>{item.label}</button>
          </div>
        ))}
      </nav>
    </aside>
  );
};

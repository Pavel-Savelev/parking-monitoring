import React from 'react';
import styles from './AppSidebar.module.css';
import { useNavigate } from 'react-router-dom';

interface SidebarItem {
  label: string;
  href: string;
}

export const AppSidebar: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const menu: SidebarItem[] = [
    { label: 'Станции', href: '/' },
    { label: 'События', href: '/events' },
    { label: 'Добавить станцию', href: '/add-station' },
    { label: 'Станция', href: '/station' }
  ];

  function handleNavigate(href: string): void {
    navigate(href);
  }

  return (
    <aside className={styles.sidebar}>
      <nav className={styles.nav}>
        {menu.map((item) => (
          <button
            key={item.href}
            className={styles.navItem}
            onClick={() => handleNavigate(item.href)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

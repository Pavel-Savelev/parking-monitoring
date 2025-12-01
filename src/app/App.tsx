import { useLocation } from 'react-router-dom';

import { AppHeader } from '../shared/ui/layout/AppHeader/AppHeader';
import { AppSidebar } from '../shared/ui/layout/AppSidebar/AppSidebar';
import AppRouter from './providers/AppRouter';
import styles from './App.module.css';

const AUTH_ROUTES = ['/login', '/registration'];

const App = () => {
  const location = useLocation();
  const hideLayout = AUTH_ROUTES.includes(location.pathname);

  return (
    <div className={styles.app}>
      {!hideLayout && <AppHeader />}

      <div className={styles.contentWrapper}>
        {!hideLayout && <AppSidebar />}

        <main className={styles.main}>
          <AppRouter />
        </main>
      </div>

      {/* {!hideLayout && <AppFooter year={year} />} */}
    </div>
  );
};

export default App;

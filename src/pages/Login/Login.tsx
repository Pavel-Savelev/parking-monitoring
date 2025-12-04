import { LoginUI } from './ui/LoginUI';
import styles from './Login.module.css';

export const Login: React.FC = () => (
  <div className={styles.container}>
    <LoginUI />
  </div>
);

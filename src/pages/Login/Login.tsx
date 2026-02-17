import { LoginUI } from './ui/LoginUI';
import styles from './Login.module.css';
// TODO переделать логику в виджеты и даже передачу данных апи
export const Login: React.FC = () => (
  <div className={styles.container}>
    <LoginUI />
  </div>
);

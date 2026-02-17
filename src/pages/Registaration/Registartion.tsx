import { RegistrationUI } from '../Registaration/ui/RegistrationUI';
import styles from './Registration.module.css';
// TODO переделать логику в виджеты и даже передачу данных апи
export const Registration: React.FC = () => (
  <div className={styles.container}>
    <RegistrationUI />
  </div>
);

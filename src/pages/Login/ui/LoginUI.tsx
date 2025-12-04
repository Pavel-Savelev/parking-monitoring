import { Button } from '../../../shared/ui/Button';
import { Input } from '../../../shared/ui/Input';
import styles from './LoginUI.module.css';
import Logo from '../../../../public/images/icons/Logo.svg';

function handleChange() {}
export function LoginUI() {
  return (
    <div className={styles.login}>
      <img src={Logo} alt='Logo' className={styles.logo} />
      <div className={styles.form}>
        <h2 className={styles.name}>Войти</h2>
        <div className={styles.item}>
          <label>Логин</label>
          <Input
            value=''
            onChange={handleChange}
            placeholder={'Введите логин'}
          />
        </div>
        <div className={styles.item}>
          <label>Пароль</label>
          <Input
            value=''
            onChange={handleChange}
            placeholder={'Введите пароль'}
          />
        </div>
        <Button>Войти</Button>
      </div>
      <span className={styles.switch}>Зарегистрирвоаться</span>
    </div>
  );
}

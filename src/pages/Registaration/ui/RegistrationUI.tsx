import { Button } from '../../../shared/ui/Button';
import { Input } from '../../../shared/ui/Input';
import styles from './Registration.module.css';
import Logo from '../../../../public/images/icons/Logo.svg';

function handleChange() {}
export function RegistrationUI() {
  return (
    <div className={styles.login}>
      <img src={Logo} alt='Logo' className={styles.logo} />
      <div className={styles.form}>
        <h2 className={styles.name}>Регистрация</h2>
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
        <div className={styles.item}>
          <label>Повторите пароль</label>
          <Input
            value=''
            onChange={handleChange}
            placeholder={'Повторите пароль'}
          />
        </div>
        <Button>Зарегистрироваться</Button>
      </div>
      <span className={styles.switch}>Войти</span>
    </div>
  );
}

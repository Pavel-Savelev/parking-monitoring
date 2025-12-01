import { Input } from '../../../../shared/ui/Input';
import styles from './StationListFiltersUI.module.css';
interface IItem {
  name: string;
  className?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}

interface IItemProp {
  data: IItem;
}

export function StationListFilterUI({ data }: IItemProp) {
  return (
    <div className={styles.filter_item}>
      <label>{data.name}</label>
      <Input
        type={data.type}
        value={data.value}
        onChange={data.onChange}
        className={data.className}
        placeholder={data.placeholder}
      />
    </div>
  );
}

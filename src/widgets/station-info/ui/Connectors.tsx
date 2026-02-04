import styles from './Connectors.module.css';
import { useGetConnectorImage } from '../../../shared/hooks/getConnectorImages/useGetConnectorImage';
import { useConnectorStatusColor } from '../../../shared/hooks/getConnetctorStatusColor/useConnectorStatusColor';

import { IConnectors } from 'shared/types';

interface IDataProps {
  data: IConnectors;
}

export function Connectors({ data }: IDataProps) {
  return (
    <div className={styles.connectors_list}>
      {data.connectors.map((con, index) => {
        const connectorData = useGetConnectorImage(con.connectorType);
        const statusStyle = useConnectorStatusColor(con.connectorStatus);

        return (
          <li
            className={styles.connector}
            key={index}
            style={{
              color: statusStyle.color,
              backgroundColor: statusStyle.backgroundColor
            }}
          >
            <img
              src={connectorData.url}
              alt={con.connectorType}
              className={`${styles.connector_image} ${connectorData.className}`}
            />
            <label className={styles.connector_type}>{con.connectorName}</label>
          </li>
        );
      })}
    </div>
  );
}

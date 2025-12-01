import styles from './Connectors.module.css';
import { useGetConnectorImage } from '../../../../shared/hooks/getConnectorImages/useGetConnectorImage';
import { useConnectorStatusColor } from '../../../../shared/hooks/getConnetctorStatusColor/useConnectorStatusColor';

interface IConnector {
  connectorType: string;
  connectorStatus: string;
  connectorName: string;
}

interface IConnectorsProp {
  data: IConnector[];
}

export function Connectors({ data }: IConnectorsProp) {
  return (
    <div className={styles.connectors_list}>
      {data.map((con, index) => {
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

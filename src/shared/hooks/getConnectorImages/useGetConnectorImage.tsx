import styles from './useGetConnectorImage.module.css';

export function useGetConnectorImage(name: string): {
  url: string;
  className: string;
} {
  const connectors: Record<string, { url: string; className: string }> = {
    gbt: {
      url: '/images/connectors/gbt-icon.svg',
      className: styles.connector_gbt
    },
    chademo: {
      url: '/images/connectors/chademo-icon.svg',
      className: styles.connector_chademo
    },
    type2: {
      url: '/images/connectors/type-2-icon.svg',
      className: styles.connector_type2
    },
    ccs: {
      url: '/images/connectors/ccs.svg',
      className: styles.connector_ccs
    },
    type1: {
      url: '/images/connectors/type1.svg',
      className: styles.connector_type1
    }
  };

  const key = name.toLowerCase();
  return (
    connectors[key] || {
      url: '/images/connectors/default.png',
      className: styles.connector_default
    }
  );
}

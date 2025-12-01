// shared/hooks/useConnectorStatusColor.ts
export function useConnectorStatusColor(status: string): {
  color: string;
  backgroundColor: string;
  className: string;
} {
  const statusConfig: Record<
    string,
    { color: string; backgroundColor: string; className: string }
  > = {
    available: {
      color: '#241C57',
      backgroundColor: '#B0E0A3',
      className: 'status_available'
    },
    charging: {
      color: '#241C57',
      backgroundColor: '#FBD97A',
      className: 'status_charging'
    },
    occupied: {
      color: '#241C57',
      backgroundColor: '#000000ff',
      className: 'status_occupied'
    },
    unavailable: {
      color: '#241C57',
      backgroundColor: '#FF7477',
      className: 'status_unavailable'
    },
    offline: {
      color: '#241C57',
      backgroundColor: '#00040cff',
      className: 'status_offline'
    },
    reserved: {
      color: '#241C57',
      backgroundColor: '#000000ff',
      className: 'status_reserved'
    },
    error: {
      color: '#241C57',
      backgroundColor: '#000000ff',
      className: 'status_error'
    }
  };

  const normalizedStatus = status.toLowerCase().trim();
  return (
    statusConfig[normalizedStatus] || {
      color: '#6b7280',
      backgroundColor: '#f3f4f6',
      className: 'status_default'
    }
  );
}

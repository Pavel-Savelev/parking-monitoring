export interface IStationData {
  id: string;
  serialNumber: string;
  nameStation: string;
  parkingStatus: string;
  city: string;
  useTime: string;
  eventName?: string;
  time: {
    start: string;
    end: string;
  };
}

export interface IEventData {
  serialNumber: string;
  id: string;
  nameStation: string;
  eventName: string;
  date: string;
  durationEvent: string;
  event_id: string;
}

export interface IItem {
  name: string;
  className?: string;
  type:
    | 'text'
    | 'email'
    | 'password'
    | 'number'
    | 'tel'
    | 'url'
    | 'search'
    | 'date'
    | 'datetime-local';
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}
export interface IConnector {
  connectorType: string;
  connectorStatus: string;
  connectorName: string;
}

export interface IMainData {
  event: string;
  date: string;
  address: string;
  typeAuto: string;
  parkingStatus: string;
  plateAuto: string;
  personFace: string;
}

export interface IEventData {
  id: string;
  date: string;
  eventName: string;
  plateAuto: string;
  typeAuto: 'electrical' | 'gas';
  address: string;
}

import { connect } from 'http2';

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
  station_id: string;
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
interface IConnector {
  connectorType: string;
  connectorStatus: string;
  connectorName: string;
}

export interface IConnectors {
  station_id: string;
  connectors: IConnector[];
}

export interface IMainData {
  station_id: string;
  event: string;
  date: string;
  address: string;
  typeAuto: string;
  parkingStatus: string;
  plateAuto: string;
  personFace: string;
}

export interface IStationEvent {
  id: string;
  date: string;
  eventName: string;
  plateAuto: string;
  typeAuto: 'electrical' | 'gas';
  address: string;
}

export interface IEventStationData {
  station_id: string;
  events: IStationEvent[];
}

// API
// EVENTS
interface IZoneItem {
  id: string;
  status: 'FREE' | 'OCCUPIED';
  vehicle_type: string | null;
  plate: string | null;
}

interface IZones {
  eventType: string;
  zones: IZoneItem[];
}

export interface IEvent {
  id: string;
  station_id: string;
  event_type: string;
  address: string;
  end_time: string;
  start_time: string;
}

// STATIONS

export interface IStations {
  address: string;
  duration: IDuration;
  id: string;
  ip: string;
  station_id: string;
  zone_status: IZoneStatus;
}

interface IDuration {
  [key: string]: string;
}

interface IZoneStatus {
  [key: string]: string;
}

// PARKING_STATUS_BY_STATION_ID
export interface IParkingStatusByStatus {
  event_id: string;
  station_id: string;
  timestamp: number;
  payload: IZones[];
}

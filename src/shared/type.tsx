export interface IStationData{
    id:string
    serialNumber:string
    nameStation:string
    parkingStatus:string 
    city:string
    useTime:string
    eventName?:string
    time:{
        start:string
        end:string
    }   
}

export interface IItem {
  name: string;
  className?: string;
  type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'datetime-local';
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
}
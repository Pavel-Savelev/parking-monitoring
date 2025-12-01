export interface IFilterName{
    name:string;
    type: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search';
    value:string;
    onChange: (e: any) => void;
    className?: string;
    placeholder?: string;
}

export interface IStationData{
    id:string
    serialNumber:string
    nameStation:string
    parkingStatus?:string
    city?:string
    useTime?:string
    eventName?:string
    time?:{
        start:string
        end:string
    }   
}

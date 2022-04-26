interface ITimeValues {
    work: number,
    overTime: number,
    sickLeave: number,
    downTime: number
}

export interface IPerson {
    id: string;
    name: string;
    occupation: string,
    age: number;
    gender: string;
    email: string;
    country: string;
    phone: string;
    avatar: string;
    timeValues: ITimeValues;
}
export default IPerson;
interface ITimeValues {
    work: number,
    overTime: number,
    sickLeave: number,
    downTime: number
}

export interface IPerson {
    id: string;
    firstName: string;
    lastName: string;
    occupation: string,
    age: number;
    gender: string;
    email: string;
    country: string;
    phone: string;
    avatar: string;
    timeValues: ITimeValues;
    KPI: number;
}
export default IPerson;
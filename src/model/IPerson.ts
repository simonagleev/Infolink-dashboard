interface ITimeValues {
    work: number,
    overTime: number,
    sickLeave: number,
    downTime: number
}

interface IIndicatorValues {
    newChats: number;
    newSales: number;
    hoursWorked: number;
    lateArrivals: number;
    abscenceHours: number;
    overtime: number;
    downTime: number;
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
    indicatorValues: IIndicatorValues;
}
export default IPerson;
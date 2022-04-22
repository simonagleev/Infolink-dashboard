import { makeAutoObservable } from 'mobx';

interface ITimeUsage {
    work: number,
    overWork: number,
    sickLeave: number,
    absence: number,
}

interface IStuffData {
    id: string,
    occupation: string
    name: string,
    timeUsage: ITimeUsage,       
}


export class TimeLossService {

    stuffList: IStuffData[] = [
        {
            id: '1',
            occupation: 'assistant',
            name: 'John Brown',
            timeUsage: {
                work: 38,
                overWork: 4,
                sickLeave: 1,
                absence: 0,
            }
        },
        {
            id: '2',
            occupation: 'manager',
            name: 'John Gray',
            timeUsage: {
                work: 38,
                overWork: 4,
                sickLeave: 1,
                absence: 0,
            }
        },
        {
            id: '3',
            occupation: 'secretary',
            name: 'John Grene',
            timeUsage: {
                work: 38,
                overWork: 4,
                sickLeave: 1,
                absence: 0,
            }
        },
    ]

    constructor() {
        makeAutoObservable(this);
    }

    
};

export default TimeLossService;
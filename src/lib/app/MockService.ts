import { makeAutoObservable } from 'mobx';

export class MockService {

    constructor() {
        makeAutoObservable(this);
    }

    firstPage = {};
    secondPage = {};
    thirdPage = {};

};

export default MockService;

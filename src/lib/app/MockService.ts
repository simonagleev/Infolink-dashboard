import { makeAutoObservable } from 'mobx';

import homePage from '../../mock/home-page_ru.json';

export class MockService {
    mockData = home-page_ru
    constructor() {
        makeAutoObservable(this);
    }

    homePage = homePage;

};

export default MockService;

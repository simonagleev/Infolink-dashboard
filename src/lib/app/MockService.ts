import { makeAutoObservable } from 'mobx';
import { RowId } from 'react-declarative';

import { v4 as uuid } from 'uuid';

import homePage from '../../mock/home-page_ru.json';
import IPerson from '../../model/IPerson';


export class MockService {

    constructor() {
        makeAutoObservable(this);
    }

    homePage = homePage;
    
    innerProfiles = new Map<RowId, IPerson>(this.homePage.timeConsumption.map(p => [p.id, p]));

    one(id: string) {
        if (id === 'create') {
            return null;
        } else {
            return this.innerProfiles.get(id) || null;
        }
    };

    async remove(person: IPerson) {
        this.innerProfiles.delete(person.id)
    };

    delete(rows: RowId[]) {
        rows.forEach(i => {
          this.innerProfiles.delete(i)
        })
    };

    async save(person: IPerson) {
        if (person.id === 'create') {
          person.id = uuid();
        }
        // await fetch(...
        return this.innerProfiles.set(person.id, person);
    }
};

export default MockService;

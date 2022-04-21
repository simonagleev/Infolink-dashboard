import React from 'react'

import ioc from '../lib/ioc';

import Scenarios from '../widgets/Scenarios'
import SituationResume from '../widgets/SituationResume';

export const HomePage = () => {
    return (
        <>
            <Scenarios
                style={{ height: 300, width: 300}}
                data={ioc.mockService.homePage.scenarios}
            />
            <SituationResume
                style={{ height: 300, width: 300}}
                data={ioc.mockService.homePage.sc_resume}
            />
        </>

    );
}

export default HomePage;

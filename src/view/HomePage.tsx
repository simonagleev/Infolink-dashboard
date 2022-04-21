import React from 'react'

import ioc from '../lib/ioc';

import Scenarios from '../widgets/Scenarios'
import SituationResume from '../widgets/SituationResume';
import RevenueChart from '../widgets/RevenueChart';

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
            <RevenueChart
                style={{ height: 300, width: 300}}
                data={ioc.mockService.homePage.revenue}
            />
        </>

    );
}

export default HomePage;

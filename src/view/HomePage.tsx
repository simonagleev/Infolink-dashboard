import React from 'react'

import ioc from '../lib/ioc';

import Scenarios from '../widgets/Scenarios'

export const HomePage = () => {
    return (
        <Scenarios
            style={{ height: 300, width: 300}}
            data={ioc.mockService.homePage.scenarios}
        />
    );
}

export default HomePage;

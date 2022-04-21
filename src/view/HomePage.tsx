import React from 'react'

import { One } from 'react-declarative';
import {TypedField} from 'react-declarative';
import { FieldType } from 'react-declarative';

import Scenarios from '../widgets/Scenarios'
import SituationResume from '../widgets/SituationResume';
import RevenueChart from '../widgets/RevenueChart';
import Indicator from '../widgets/Indicator';

import ioc from '../lib/ioc';

const fields: TypedField[] = [
    {
        type: FieldType.Group,
        fields: [
            {
                type: FieldType.Group,
                fields: [
                    {
                        type: FieldType.Group,
                        columnsOverride: '7',
                        
                        fields: [
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                            {
                                type: FieldType.Hero,
                                height: '10vh',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            style={{ height: 300, width: 300}}
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                }, 
                            },
                        ]
                    },
                    {
                        type: FieldType.Hero,
                        height: '40vh',
                        columns: '4',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <Scenarios
                                    style={{ height: 300, width: 300}}
                                    data={ioc.mockService.homePage.scenarios}
                                />
                            )
                        }, 
                    },
                    {
                        type: FieldType.Hero,
                        height: '40vh',
                        columns: '4',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <RevenueChart
                                    style={{ height: 300, width: 300}}
                                    data={ioc.mockService.homePage.revenue}
                                />
                            )
                        }, 
                    },
                    {
                        type: FieldType.Hero,
                        height: '40vh',
                        columns: '4',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <SituationResume
                                    style={{ height: 300, width: 300}}
                                    data={ioc.mockService.homePage.sc_resume}
                                />
                            )
                        }, 
                    },
                ]
            }

        ]
    }
]

export const HomePage = () => {
    return (
        <>
            {/* <Scenarios
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
            <Indicator
                style={{ height: 300, width: 300}}
                data={ioc.mockService.homePage.indicators.communications.data}
            /> */}

            <One fields={fields}/>
        </>

    );
}

export default HomePage;

import React from 'react'

import { One } from 'react-declarative';
import { TypedField } from 'react-declarative';
import { FieldType } from 'react-declarative';

import Scenarios from '../widgets/Scenarios'
import SituationResume from '../widgets/SituationResume';
import RevenueChart from '../widgets/RevenueChart';
import Indicator from '../widgets/Indicator';

import ioc from '../lib/ioc';
import TimeLoss from '../widgets/TimeLoss';
import DynamicChart from '../widgets/DynamicChart';

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
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.scope.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.deadline.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.budget.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.quality.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.resources.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                desktopRight: '10px',
                                phoneBottom: '10px',
                                tabletBottom: '10px',
                                
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.communications.data}
                                        />
                                    )
                                },
                            },
                            {
                                type: FieldType.Hero,
                                height: '20vh',
                                columns: '1',
                                phoneColumns: '7',
                                tabletColumns: '7',
                                
                                minHeight: '225px',
                                maxHeight: '225px',
                                child: {
                                    type: FieldType.Component,
                                    element: () => (
                                        <Indicator
                                            data={ioc.mockService.homePage.indicators.bek.data}
                                        />
                                    )
                                },
                            },
                        ]
                    },
                    {
                        type: FieldType.Hero,
                        height: '45vh',
                        columns: '3',
                        tabletColumns: '12',
                        phoneColumns: '12',
                        top: '10px',
                        bottom: '10px',
                        phoneBottom: '10px',
                        tabletBottom: '10px',
                        minHeight: '500px',
                        maxHeight: '500px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <Scenarios
                                    data={ioc.mockService.homePage.scenarios}
                                />
                            )
                        },
                    },
                    {
                        type: FieldType.Hero,
                        height: '45vh',
                        columns: '6',
                        tabletColumns: '12',
                        phoneColumns: '12',
                        desktopBottom: '10px',
                        desktopTop: '10px',
                        desktopLeft: '10px',
                        desktopRight: '10px',
                        phoneMinHeight: '500px',
                        tabletMinHeight: '500px',
                        minHeight: '500px',
                        maxHeight: '500px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <RevenueChart
                                    data={ioc.mockService.homePage.revenue}
                                />
                            )
                        },
                    },
                    {
                        type: FieldType.Hero,
                        height: '45vh',
                        columns: '3',
                        tabletColumns: '12',
                        phoneColumns: '12',
                        top: '10px',
                        bottom: '10px',
                        phoneBottom: '10px',
                        tabletBottom: '10px',
                        minHeight: '500px',
                        maxHeight: '500px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <SituationResume
                                    data={ioc.mockService.homePage.sc_resume}
                                />
                            )
                        },
                    },
                    {
                        type: FieldType.Hero,
                        height: '40vh',
                        columns: '6',
                        tabletColumns: '12',
                        phoneColumns: '12',
                        phoneBottom: '10px',
                        tabletBottom: '10px',
                        desktopRight: '10px',
                        minHeight: '400px',
                        maxHeight: '400px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <TimeLoss/>
                            )
                        },
                    },
                    {
                        type: FieldType.Hero,
                        height: '40vh',
                        columns: '6',
                        tabletColumns: '12',
                        phoneColumns: '12',
                        phoneBottom: '10px',
                        tabletBottom: '10px',
                        minHeight: '400px',
                        maxHeight: '400px',
                        child: {
                            type: FieldType.Component,
                            element: () => (
                                <DynamicChart data={ioc.mockService.homePage.dynamicChartItems}/>
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

            <One fields={fields} />
        </>

    );
}

export default HomePage;

import React from 'react';

import IChartItem from '../widgets/DynamicChart/IChartItem';

import DynamicChart from '../widgets/DynamicChart';

export const DemoPage = () => {

    const items: IChartItem[] = [
        {
            code: 'plan',
            color: 'cyan',
            name: 'Контракт',
            values: [
                {
                    value: 25,
                    stamp: 1,
                },
                {
                    value: 50,
                    stamp: 2,
                },
                {
                    value: 100,
                    stamp: 3,
                }
            ]
        },
        {
            code: 'contract',
            color: 'magenta',
            name: 'План',
            values: [
                {
                    value: 15,
                    stamp: 1,
                },
                {
                    value: 35,
                    stamp: 2,
                },
                {
                    value: 95,
                    stamp: 3,
                }
            ]
        }
    ];

    return (
        <>
            <DynamicChart
                data={items}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
        </>
    );
};

export default DemoPage;

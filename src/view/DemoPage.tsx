import React from 'react';

import ColorProgressBar from '../components/common/ColorProgressBar';
import StockChart, { IChartItem } from '../components/common/StockChart';

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
            <StockChart
                items={items}
                style={{
                    height: 300,
                    width: 300,
                }}
            />
        </>
    );
};

export default DemoPage;

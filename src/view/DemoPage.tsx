import React from 'react';

import ColorProgressBar from '../components/common/ColorProgressBar';

export const DemoPage = () => {

    const data = {
        done: {
            color: 'cyan',
            title: 'Поле 1',
            value: 10
        },
        inWork: {
            color: 'magenta',
            title: 'Поле 1',
            value: 10
        },
        notDone: {
            color: 'orange',
            title: 'Поле 1',
            value: 10
        },
        offset: {
            color: 'green',
            title: 'Поле 1',
            value: 10
        },
    };

    return (
        <>
            <ColorProgressBar
                data={data}
            />
        </>
    );
};

export default DemoPage;

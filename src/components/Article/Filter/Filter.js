import React, { useState } from 'react';
import { Cascader } from 'antd';

import './Filter.scss';

const options = [
    {
        value: 'false',
        label: '교내 실적',
        children: [
            {
                value: 'Layer7',
                label: 'Layer7',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'Unifox',
                label: 'Unifox',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'TeamLog',
                label: 'TeamLog',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'Nefus',
                label: 'Nefus',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ],
            },
            {
                value: 'Emotion',
                label: 'Emotion',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ],
            },
            {
                value: null,
                label: '모든 동아리',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
        ],
    },
    {
        value: 'true',
        label: '교외 실적',
        children: [
            {
                value: 'Layer7',
                label: 'Layer7',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'Unifox',
                label: 'Unifox',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'TeamLog',
                label: 'TeamLog',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
            {
                value: 'Nefus',
                label: 'Nefus',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ],
            },
            {
                value: 'Emotion',
                label: 'Emotion',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ],
            },
            {
                value: null,
                label: '모든 동아리',
                children: [
                    {
                        value: 'iot',
                        label: 'IOT',
                    },
                    {
                        value: 'web',
                        label: 'WEB',
                    },
                    {
                        value: 'app',
                        label: 'APP',
                    },
                    {
                        value: 'security',
                        label: 'SECURITY',
                    },
                    {
                        value: 'ai',
                        label: 'AI',
                    },
                    {
                        value: 'algorithm',
                        label: 'ALGORITHM',
                    },
                    {
                        value: 'network',
                        label: 'NETWORK',
                    },
                ]
            },
        ],
    },
];

const Filter = ({ handleToggleCategory, handleChangeClub, handleChangekind }) => {
    const onChange = (value) => {
        handleToggleCategory(value[0])
        handleChangeClub(value[1])
        handleChangekind(value[2])
    }

    return (
        <div className="filter-base">
            <div className="filter">
                <Cascader options={options} onChange={onChange} changeOnSelect />
            </div>
        </div>
    );
};

export default Filter;


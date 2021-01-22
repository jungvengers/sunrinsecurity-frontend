import React from 'react';
import { Radio } from 'antd';

const Category = ({ isContestWork, toggleIsContestWork }) => {
    const handleChange = (e) => toggleIsContestWork(e.target.value);
    return (
        <Radio.Group value={isContestWork} onChange={handleChange}>
            <Radio value={true}>외부 실적</Radio>
            <Radio value={false}>교내 실적</Radio>
        </Radio.Group>
    );
};

export default React.memo(Category);

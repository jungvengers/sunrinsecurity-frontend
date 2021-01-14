import React from 'react';
import { Radio } from 'antd';

const Category = ({ toggleIsContestWork }) => {
    const handleChange = (e) => toggleIsContestWork(e.target.value);
    return (
        <Radio.Group onChange={handleChange}>
            <Radio value={true}>대회 실적</Radio>
            <Radio value={false}>개인 프로젝트</Radio>
        </Radio.Group>
    );
};

export default React.memo(Category);

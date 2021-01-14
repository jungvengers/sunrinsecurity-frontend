import React from 'react';
import { Checkbox } from 'antd';

const Club = ({ addClub }) => {
    const clubOptions = ['Layer7', 'Unifox', 'Nefus', 'TeamLog', 'Emotion'];
    const handleChange = (checkValues) => addClub(checkValues);
    return <Checkbox.Group options={clubOptions} onChange={handleChange} />;
};

export default React.memo(Club);

import React from 'react';
import { Checkbox } from 'antd';

const Club = ({ clubs, addClub }) => {
    const clubOptions = ['Layer7', 'Unifox', 'Nefus', 'TeamLog', 'Emotion'];
    const handleChange = (checkValues) => addClub(checkValues);
    return <Checkbox.Group value={clubs} options={clubOptions} onChange={handleChange} />;
};

export default React.memo(Club);

import React from 'react';
import { Checkbox } from 'antd';

const Kind = ({ addKind }) => {
    const kindOptions = ['iot', 'web', 'app', 'security', 'ai', 'algorithm', 'network'];
    const handleChange = (checkValues) => addKind(checkValues);
    return <Checkbox.Group options={kindOptions} onChange={handleChange} />;
};

export default React.memo(Kind);

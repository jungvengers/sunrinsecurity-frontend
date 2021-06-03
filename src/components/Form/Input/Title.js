import React from 'react';
import { Input } from 'antd';

const Title = ({ title, changeTitle }) => {
    const handleChange = (e) => changeTitle(e.target.value);
    return <Input value={title} placeholder="제목..." onChange={handleChange} />;
};

export default React.memo(Title);

import React from 'react';
import { Input } from 'antd';

const Content = ({ content, changeContent }) => {
    const handleChange = (e) => changeContent(e.target.value);
    return (
        <Input.TextArea
            value={content}
            autoSize={{ minRows: 6, maxRows: 10 }}
            onChange={handleChange}
            allowClear={true}
        />
    );
};

export default React.memo(Content);

import React from 'react';
import { Form, Input } from 'antd';

import { LinkOutlined } from '@ant-design/icons';

const Video = ({ youtubeURLs, addYoutubeURL }) => {
    const handleChange = (e) => addYoutubeURL(e.target.value);
    return (
        <Form.Item>
            <Input
                placeholder="링크1 링크2 링크3"
                value={youtubeURLs}
                onChange={handleChange}
                prefix={<LinkOutlined />}
            />
        </Form.Item>
    );
};

export default React.memo(Video);

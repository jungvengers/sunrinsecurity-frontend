import React from 'react';
import { Input } from 'antd';

import { UserOutlined, LinkOutlined } from '@ant-design/icons';

const TextField = ({ state, setState, kind, placeholder }) => {
    const handleChange = (e) => setState(e.target.value);
    const switchIcon = () => {
        switch (kind) {
            case 'title':
                return null;
            case 'participants':
                return <UserOutlined className="site-form-item-icon" />;
            case 'video':
                return <LinkOutlined />;
        }
    };
    return <Input value={state} placeholder={placeholder} onChange={handleChange} prefix={switchIcon()} />;
};

export default React.memo(TextField);

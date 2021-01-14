import React, { useState } from 'react';
import { Input } from 'antd';

import { UserOutlined } from '@ant-design/icons';

const Participant = ({ participants, addParticipant }) => {
    const handleChange = (e) => addParticipant(e.target.value);
    return (
        <Input
            placeholder="김선린 이선린 박선린"
            onChange={handleChange}
            prefix={<UserOutlined className="site-form-item-icon" />}
        />
    );
};

export default React.memo(Participant);

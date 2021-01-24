import React from 'react';
import { Button } from 'antd';

import history from '../../utils/lib/history';

import './ManageItem.scss';

const ManageItem = ({ title, content, createdDate, id, deleteNotice }) => {
    const handleDelete = () => deleteNotice(id);
    const handleManage = () => history.push(`/admin/edit/notice/${id}`);
    const parseDate = () => {
        var d = new Date(createdDate);
        return d.toLocaleString();
    };
    return (
        <div className="ManageItem">
            <div className="ManageItem-date">
                <b>{parseDate()}</b>
            </div>
            <div className="ManageItem-title">
                <h2>{title}</h2>
            </div>
            <div className="ManageItem-content">
                <p>{content.length > 200 ? content.slice(0, 200) + '...' : content}</p>
            </div>
            <div className="ManageItem-buttons">
                <Button danger onClick={handleDelete}>
                    삭제
                </Button>
                <Button onClick={handleManage}>수정</Button>
            </div>
        </div>
    );
};

export default ManageItem;

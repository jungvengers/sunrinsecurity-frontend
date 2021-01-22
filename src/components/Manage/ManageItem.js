import React from 'react';
import { Button, Image } from 'antd';

import history from '../../utils/lib/history';

import './ManageItem.scss';

const ManageItem = ({ content, files, createDate, id, deleteArticle }) => {
    const handleDelete = () => deleteArticle(id);
    const handleManage = () => history.push(`/admin/edit/${id}`);
    const parseDate = () => {
        var d = new Date(createDate);
        return d.toLocaleString();
    };
    return (
        <div className="ManageItem">
            <div className="ManageItem-date">
                <b>{parseDate()}</b>
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

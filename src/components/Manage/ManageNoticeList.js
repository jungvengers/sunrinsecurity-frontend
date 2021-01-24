import React, { useEffect } from 'react';
import { Spin, Card, Result } from 'antd';

import ManageNoticeItem from './ManageNoticeItem';

import './ManageList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ManageNoticeList = ({ notices, readingStatus, readListNotice, deleteNotice }) => {
    useEffect(() => {
        const queryStringData = {
            writer: localStorage.getItem('username'),
        };
        readListNotice(queryStringData);
    }, [readListNotice]);
    return (
        <div className="ManageList">
            {readingStatus.loading ? (
                <Spin indicator={<LoadingOutlined style={{ marginTop: '15px', fontSize: '40px' }} spin />} />
            ) : notices.length > 0 ? (
                notices.map((noticle, idx) => (
                    <Card hoverable style={{ width: '60%', minWidth: '700px', marginTop: '15px' }} key={idx}>
                        <ManageNoticeItem
                            title={noticle.title}
                            content={noticle.content}
                            createdDate={noticle.createdAt}
                            id={noticle._id}
                            deleteNotice={deleteNotice}
                        />
                    </Card>
                ))
            ) : (
                <Result title="게시물이 없습니다." />
            )}
        </div>
    );
};

export default ManageNoticeList;

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin, Card, Result } from 'antd';

import ManageNoticeItem from './ManageNoticeItem';

import './ManageList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ManageNoticeList = ({ notices, readingStatus, readListNotice, deleteNotice }) => {
    const getNotices = () => {
        const queryStringData = {
            perPage: 1,
        };
        readListNotice(queryStringData);
    };
    useEffect(() => {
        getNotices();
    }, []);
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

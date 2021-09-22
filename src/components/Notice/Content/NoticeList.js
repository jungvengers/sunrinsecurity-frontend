import React, { useState, useEffect } from 'react';
import { Table, Space, Button } from 'antd';

import history from '../../../utils/lib/history';

import './NoticeList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const NoticeList = ({ notices, readingStatus, readListNotice }) => {
    useEffect(() => {
        const queryStringData = {
            perPage: 1,
        };
        readListNotice(queryStringData);
    }, []);

    const isMobile = /iPhone|iPad|iPod|Android/i.test(window.navigator.userAgent);
    const columns = [
        {
            title: '제목',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: '작성자',
            dataIndex: 'writer',
            key: 'writer',
        },
        {
            title: '작성일',
            dataIndex: 'createdAt',
            key: 'createdAt',
        },
        {
            dataIndex: 'action',
            key: 'action',
        },
    ];
    const data = [];
    notices.map((notice, idx) =>
        data.push({
            key: idx,
            title: notice.title,
            writer: notice.writer,
            createdAt: notice.createdAt.slice(0, 10),
            action: (
                <Button
                    onClick={() => {
                        history.push(`/notice/${notice._id}`);
                    }}>
                    자세히 보기
                </Button>
            ),
        })
    );
    return (
        <div className="NoticeList" id="scrollableDiv">
            <Table
                size={isMobile ? 'small' : null}
                loading={readingStatus.loading}
                dataSource={data}
                columns={columns}
            />
        </div>
    );
};

export default NoticeList;

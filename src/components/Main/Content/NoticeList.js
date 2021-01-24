import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin, Card, Result } from 'antd';

import NoticeItem from './NoticeItem';

import './NoticeList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const NoticeList = ({ notices, readingStatus, readNotice, readMoreNotice }) => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const queryStringData = {
            perPage,
            currentPage: 1,
        };
        readNotice(queryStringData);
        setCurrentPage(2);
    }, [perPage, readNotice]);

    const getNotice = () => {
        const queryStringData = {
            perPage,
            currentPage,
        };
        readMoreNotice(queryStringData);
        setCurrentPage(currentPage + 1);
    };
    return (
        <div className="NoticeList" id="scrollableDiv">
            <InfiniteScroll
                className="infiniteScrollWrapper"
                dataLength={notices.length}
                next={getNotice}
                hasMore={true}
                scrollableTarget="scrollableDiv">
                {readingStatus.loading ? (
                    <Spin
                        indicator={<LoadingOutlined style={{ margin: '20 auto', fontSize: '40px' }} spin />}
                    />
                ) : notices.length > 0 ? (
                    notices.map((notice) => {
                        return (
                            <Card
                                title={notice.title}
                                style={{ width: '100%', marginTop: '15px' }}
                                key={notice._id}>
                                <NoticeItem
                                    content={notice.content}
                                    files={notice.images}
                                    youtubeURLs={notice.youtubeURLs}
                                    id={notice._id}
                                />
                            </Card>
                        );
                    })
                ) : (
                    <Result title="해당 게시물을 찾을 수 없습니다." />
                )}
            </InfiniteScroll>
        </div>
    );
};

export default NoticeList;

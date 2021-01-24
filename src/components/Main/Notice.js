import React from 'react';
import { Layout } from 'antd';

import Header from './Header/Header';
import NoticeList from './Content/NoticeList';

const Notice = ({ notices, readingStatus, readNotice, readMoreNotice }) => {
    return (
        <Layout className="Notice" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '90%', overflow: 'hidden' }}>
                <NoticeList
                    notices={notices}
                    readingStatus={readingStatus}
                    readNotice={readNotice}
                    readMoreNotice={readMoreNotice}
                />
            </Layout>
        </Layout>
    );
};

export default Notice;

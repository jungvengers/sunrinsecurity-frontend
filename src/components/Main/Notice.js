import React from 'react';
import { Layout } from 'antd';

import Header from './Header/Header';
import NoticeList from './Content/NoticeList';

const Notice = ({ notices, readingStatus, readListNotice }) => {
    return (
        <Layout className="Notice" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '100%', overflow: 'hidden' }}>
                <NoticeList notices={notices} readingStatus={readingStatus} readListNotice={readListNotice} />
                <Layout.Footer
                    className="Notice-footer"
                    style={{
                        height: '15%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '1.5rem',
                        padding: 0,
                    }}>
                    정보보호과 @ 2021 Created by 19학번 김연규, 조강연, 양원준
                </Layout.Footer>
            </Layout>
        </Layout>
    );
};

export default Notice;

import React, { useEffect } from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import NoticeList from './Content/NoticeList';
import validationToken from '../../utils/lib/validationToken';

const Notice = ({ notices, readingStatus, readListNotice }) => {
    useEffect(() => validationToken(), []);
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
                </Layout.Footer>
            </Layout>
        </Layout>
    );
};

export default Notice;

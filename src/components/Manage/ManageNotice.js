import React from 'react';

import Header from '../Main/Header/Header';
import ManageNoticeList from './ManageNoticeList';

import history from '../../utils/lib/history';

import './Manage.scss';

const ManageNotice = ({ notices, readingStatus, readListNotice, deleteNotice }) => {
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Manage">
            <Header />
            <ManageNoticeList
                notices={notices}
                readingStatus={readingStatus}
                readListNotice={readListNotice}
                deleteNotice={deleteNotice}
            />
        </div>
    );
};

export default ManageNotice;

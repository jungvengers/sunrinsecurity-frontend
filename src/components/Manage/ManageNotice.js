import React, { useEffect } from 'react';

import Header from '../Main/Header/Header';
import ManageNoticeList from './ManageNoticeList';
import history from '../../utils/lib/history';
import validationToken from '../../utils/lib/validationToken';

import './Manage.scss';

const ManageNotice = ({ notices, readingStatus, readListNotice, deleteNotice }) => {
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) history.push('/');
        validationToken();
    });
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

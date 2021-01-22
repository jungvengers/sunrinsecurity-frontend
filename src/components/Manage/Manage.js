import React from 'react';

import Header from '../Main/Header/Header';
import ManageList from './ManageList';

import history from '../../utils/lib/history';

import './Manage.scss';

const Manage = ({ articles, readingStatus, readListArticle, deleteArticle }) => {
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Manage">
            <Header />
            <ManageList
                articles={articles}
                readingStatus={readingStatus}
                readListArticle={readListArticle}
                deleteArticle={deleteArticle}
            />
        </div>
    );
};

export default Manage;

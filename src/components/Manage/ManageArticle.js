import React from 'react';

import Header from '../Main/Header/Header';
import ManageArticleList from './ManageArticleList';

import history from '../../utils/lib/history';

import './Manage.scss';

const ManageArticle = ({ articles, readingStatus, readListArticle, deleteArticle }) => {
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Manage">
            <Header />
            <ManageArticleList
                articles={articles}
                readingStatus={readingStatus}
                readListArticle={readListArticle}
                deleteArticle={deleteArticle}
            />
        </div>
    );
};

export default ManageArticle;

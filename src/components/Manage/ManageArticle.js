import React, { useEffect } from 'react';

import Header from '../Main/Header/Header';
import ManageArticleList from './ManageArticleList';
import validationToken from '../../utils/lib/validationToken';
import history from '../../utils/lib/history';

import './Manage.scss';

const ManageArticle = ({ articles, readingStatus, readListArticle, deleteArticle }) => {
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) history.push('/');
        validationToken();
    }, []);
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

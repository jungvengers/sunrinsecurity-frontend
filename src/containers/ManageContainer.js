import React from 'react';
import { connect } from 'react-redux';
import Manage from '../components/Manage/Manage';
import { readListArticleAsync, deleteArticleAsync } from '../store/actions/manageAction';

const ManageContainer = ({ articles, readListArticle, readListArticleAsync, deleteArticleAsync }) => {
    return (
        <Manage
            articles={articles}
            readingStatus={readListArticle}
            readListArticle={readListArticleAsync}
            deleteArticle={deleteArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ manage }) => ({
        articles: manage.articles,
        readListArticle: manage.readListArticle,
    }),
    // mapDispatchToProps
    { readListArticleAsync, deleteArticleAsync }
)(ManageContainer);

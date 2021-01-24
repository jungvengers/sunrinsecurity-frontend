import React from 'react';
import { connect } from 'react-redux';
import ManageArticle from '../components/Manage/ManageArticle';
import { readListArticleAsync, deleteArticleAsync } from '../store/actions/manageArticleAction';

const ManageArticleContainer = ({ articles, readListArticle, readListArticleAsync, deleteArticleAsync }) => {
    return (
        <ManageArticle
            articles={articles}
            readingStatus={readListArticle}
            readListArticle={readListArticleAsync}
            deleteArticle={deleteArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ manageArticle }) => ({
        articles: manageArticle.articles,
        readListArticle: manageArticle.readListArticle,
    }),
    // mapDispatchToProps
    { readListArticleAsync, deleteArticleAsync }
)(ManageArticleContainer);

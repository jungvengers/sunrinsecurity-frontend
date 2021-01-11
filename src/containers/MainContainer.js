import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { readArticleAsync, readMoreArticleAsync, deleteArticleAsync } from '../store/actions/articleAction';

const MainContainer = ({ articles, readArticleAsync, readMoreArticleAsync, deleteArticleAsync }) => {
    return (
        <Main
            articles={articles}
            readArticle={readArticleAsync}
            readMoreArticle={readMoreArticleAsync}
            deleteArticle={deleteArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ article }) => ({
        articles: article.articles,
    }),
    // mapDispatchToProps
    { readArticleAsync, readMoreArticleAsync, deleteArticleAsync }
)(MainContainer);

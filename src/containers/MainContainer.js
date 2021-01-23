import React from 'react';
import { connect } from 'react-redux';
import Main from '../components/Main/Main';
import { readArticleAsync, readMoreArticleAsync } from '../store/actions/articleAction';

const MainContainer = ({ articles, readArticle, readArticleAsync, readMoreArticleAsync }) => {
    return (
        <Main
            articles={articles}
            readingStatus={readArticle}
            readArticle={readArticleAsync}
            readMoreArticle={readMoreArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ article }) => ({
        articles: article.articles,
        readArticle: article.readArticle,
    }),
    // mapDispatchToProps
    { readArticleAsync, readMoreArticleAsync }
)(MainContainer);

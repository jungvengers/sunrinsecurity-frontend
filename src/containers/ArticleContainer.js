import React from 'react';
import { connect } from 'react-redux';
import Article from '../components/Article/Article';
import { readArticleAsync, readMoreArticleAsync } from '../store/actions/articleAction';

const ArticleContainer = ({ articles, readArticle, readArticleAsync, readMoreArticleAsync }) => {
    return (
        <Article
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
)(ArticleContainer);
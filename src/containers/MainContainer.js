import React from 'react';
import { connect } from 'react-redux';
import Articles from '../components/Main/Articles';
import { addArticle, removeArticle } from '../modules/article';

const MainContainer = ({ articles, addArticle, removeArticle }) => {
    return <Articles articles={articles} addArticle={addArticle} removeArticle={removeArticle} />;
};

export default connect(
    // mapStateToProps
    ({ article }) => ({
        articles: article.articles,
    }),
    // mapDispatchToProps
    { addArticle, removeArticle }
)(MainContainer);

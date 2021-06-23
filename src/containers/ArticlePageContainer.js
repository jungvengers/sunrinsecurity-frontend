import React from 'react';
import { connect } from 'react-redux';
import ArticlePage from '../components/Article/Content/ArticlePage';
import { readAnArticleAsync } from '../store/actions/articleAction';

const ArticlePageContainer = ({
    match,
    title,
    participants,
    clubs,
    kinds,
    content,
    files,
    youtubeURLs,
    readAnArticle,
    readAnArticleAsync,
}) => {
    return (
        <ArticlePage
            match={match}
            title={title}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            files={files}
            youtubeURLs={youtubeURLs}
            readingStatus={readAnArticle}
            readAnArticle={readAnArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ article }) => ({
        title: article.title,
        content: article.content,
        files: article.files, 
        youtubeURLs: article.youtubeURLs,
        participants: article.participants,
        clubs: article.clubs,
        kinds: article.kinds,
        readAnArticle: article,
    }),
    // mapDispatchToProps
    { readAnArticleAsync }
)(ArticlePageContainer);

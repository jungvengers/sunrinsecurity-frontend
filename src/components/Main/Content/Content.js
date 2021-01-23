import React from 'react';
import { Layout } from 'antd';

import ArticleList from './ArticleList';

const Content = ({ articles, clubs, kinds, category, readingStatus, readArticle, readMoreArticle }) => {
    return (
        <Layout.Content
            className="site-layout-background"
            style={{
                height: '100%',
                padding: '24, 24, 0, 24',
                margin: 0,
                minHeight: 280,
            }}>
            <ArticleList
                category={category}
                clubs={clubs}
                kinds={kinds}
                articles={articles}
                readingStatus={readingStatus}
                readArticle={readArticle}
                readMoreArticle={readMoreArticle}
            />
        </Layout.Content>
    );
};

export default Content;

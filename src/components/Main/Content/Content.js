import React from 'react';
import { Layout } from 'antd';

import ArticleList from './ArticleList';

const Content = ({ articles, clubs, kinds, category, readArticle, readMoreArticle, deleteArticle }) => {
    return (
        <Layout.Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
            }}>
            <ArticleList
                category={category}
                clubs={clubs}
                kinds={kinds}
                articles={articles}
                readArticle={readArticle}
                readMoreArticle={readMoreArticle}
                deleteArticle={deleteArticle}
            />
        </Layout.Content>
    );
};

export default Content;

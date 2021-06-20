import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import Header from '../Header/Header';
import ArticleList from './Content/ArticleList';
import validationToken from '../../utils/lib/validationToken';

const Article = ({ articles, readingStatus, readArticle, readMoreArticle }) => {
    const [category, setCategory] = useState(null);
    const [clubs, setClubs] = useState([]);
    const [kinds, setKinds] = useState([]);

    const handleToggleCategory = (value) => setCategory(value);
    const handleChangeClub = (value) => setClubs(value);
    const handleChangekind = (value) => setKinds(value);

    useEffect(() => validationToken(), []);
    return (
        <Layout className="Article" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '90%', overflow: 'hidden' }}>
                <Layout.Content
                    className="site-layout-background"
                    style={{
                        height: '100%',
                        padding: '24, 24, 0, 24',
                        margin: 0,
                        minHeight: 280,
                    }}>
                    <ArticleList
                        articles={articles}
                        category={category}
                        clubs={clubs}
                        kinds={kinds}
                        readingStatus={readingStatus}
                        readArticle={readArticle}
                        readMoreArticle={readMoreArticle}
                        handleToggleCategory={handleToggleCategory}
                        handleChangeClub={handleChangeClub}
                        handleChangekind={handleChangekind}
                    />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Article;

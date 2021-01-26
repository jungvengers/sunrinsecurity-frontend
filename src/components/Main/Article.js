import React, { useState, useEffect } from 'react';
import { Layout } from 'antd';

import Side from './Side/Side';
import Header from './Header/Header';
import ArticleList from './Content/ArticleList';
import validationToken from '../../utils/lib/validationToken';

const Article = ({ articles, readingStatus, readArticle, readMoreArticle }) => {
    const [category, setCategory] = useState(null);
    const [clubs, setClubs] = useState([]);
    const [kinds, setKinds] = useState([]);

    const handleToggleCategory = (e) => setCategory(e.key);
    const handleAddClub = (e) => setClubs(clubs.concat(e.key));
    const handleDeleteClub = (e) => setClubs(clubs.filter((club) => club !== e.key));
    const handleAddkind = (e) => setKinds(kinds.concat(e.key));
    const handleDeleteKind = (e) => setKinds(kinds.filter((kind) => kind !== e.key));

    useEffect(() => validationToken(), []);
    return (
        <Layout className="Article" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '90%', overflow: 'hidden' }}>
                <Side
                    handleToggleCategory={handleToggleCategory}
                    handleAddClub={handleAddClub}
                    handleDeleteClub={handleDeleteClub}
                    handleAddkind={handleAddkind}
                    handleDeleteKind={handleDeleteKind}
                />
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
                    />
                </Layout.Content>
            </Layout>
        </Layout>
    );
};

export default Article;

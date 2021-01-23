import React, { useState } from 'react';
import { Layout } from 'antd';

import Side from './Side/Side';
import Header from './Header/Header';
import Content from './Content/Content';

const Main = ({ articles, readingStatus, readArticle, readMoreArticle }) => {
    const [category, setCategory] = useState(null);
    const [clubs, setClubs] = useState([]);
    const [kinds, setKinds] = useState([]);

    const handleToggleCategory = (e) => setCategory(e.key);
    const handleAddClub = (e) => setClubs(clubs.concat(e.key));
    const handleDeleteClub = (e) => setClubs(clubs.filter((club) => club !== e.key));
    const handleAddkind = (e) => setKinds(kinds.concat(e.key));
    const handleDeleteKind = (e) => setKinds(kinds.filter((kind) => kind !== e.key));

    return (
        <Layout className="Main" style={{ height: '100vh' }}>
            <Header />
            <Layout style={{ height: '90%', overflow: 'hidden' }}>
                <Side
                    handleToggleCategory={handleToggleCategory}
                    handleAddClub={handleAddClub}
                    handleDeleteClub={handleDeleteClub}
                    handleAddkind={handleAddkind}
                    handleDeleteKind={handleDeleteKind}
                />
                <Content
                    articles={articles}
                    category={category}
                    clubs={clubs}
                    kinds={kinds}
                    readingStatus={readingStatus}
                    readArticle={readArticle}
                    readMoreArticle={readMoreArticle}
                />
            </Layout>
        </Layout>
    );
};

export default Main;

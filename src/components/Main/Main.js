import React, { useState } from 'react';
import { Layout } from 'antd';

import Sider from './Side/Sider';
import Header from './Header/Header';
import Content from './Content/Content';

const Main = ({ articles, readArticle, readMoreArticle, deleteArticle }) => {
    const [category, setCategory] = useState(null);
    const [clubs, setClubs] = useState([]);
    const [kinds, setKinds] = useState([]);
    const { Footer } = Layout;

    const handleToggleCategory = (e) => setCategory(e.key);
    const handleAddClub = (e) => setClubs(clubs.concat(e.key));
    const handleDeleteClub = (e) => setClubs(clubs.filter((club) => club !== e.key));
    const handleAddkind = (e) => setKinds(kinds.concat(e.key));
    const handleDeleteKind = (e) => setKinds(kinds.filter((kind) => kind !== e.key));

    return (
        <Layout className="Main">
            <Header />
            <Layout>
                <Sider
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
                    readArticle={readArticle}
                    readMoreArticle={readMoreArticle}
                    deleteArticle={deleteArticle}
                />
            </Layout>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    );
};

export default Main;

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from 'axios';

import Article from './Article';

import { ARTICLE_API_URL } from '../../config/config';

import './Articles.scss';

const Articles = ({ articles, addArticle, removeArticle }) => {
    const [articlePerPage, setArticlePerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => getArticles(), []);

    const getArticles = () => {
        axios.get(`${ARTICLE_API_URL}?per_page=${articlePerPage}&page=${currentPage}`).then((res) => {
            console.log(res.data.articles);
            addArticle(res.data.articles);
        });
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="Articles">
            <InfiniteScroll
                dataLength={articles.length}
                next={getArticles}
                hasMore={true}
                loader={<h4>Loading...</h4>}>
                {articles.map((article) => (
                    <Article
                        clubs={article.clubs}
                        content={article.content}
                        cetegory={article.isContestWork}
                        kinds={article.kinds}
                        participants={article.participants}
                        key={article._id}
                        id={article._id}
                        removeArticle={removeArticle}
                    />
                ))}
            </InfiniteScroll>
        </div>
    );
};

export default Articles;

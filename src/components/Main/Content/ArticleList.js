import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Card } from 'antd';

import ArticleItem from './ArticleItem';

import './ArticleList.scss';

const ArticleList = ({ articles, category, clubs, kinds, readArticle, readMoreArticle, deleteArticle }) => {
    const [articlePerPage, setArticlePerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    console.log(articles);
    useEffect(() => {
        const queryStringData = {
            articlePerPage,
            currentPage: 1,
            category,
            clubs,
            kinds,
        };
        readArticle(queryStringData);
        setCurrentPage(2);
    }, [category, clubs, kinds]);

    const getArticles = () => {
        const queryStringData = {
            articlePerPage,
            currentPage,
            category,
            clubs,
            kinds,
        };
        readMoreArticle(queryStringData);
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="ArticleList">
            <InfiniteScroll
                className="infiniteScrollWrapper"
                dataLength={articles.length}
                next={getArticles}
                hasMore={true}>
                {articles
                    ? articles.map((article) => {
                          return (
                              <Card
                                  title={article.isContestWork ? '대회실적' : '개인 프로젝트'}
                                  style={{ width: '100%', marginTop: '15px' }}
                                  key={article._id}>
                                  <ArticleItem
                                      clubs={article.clubs}
                                      content={article.content}
                                      files={article.images}
                                      kinds={article.kinds}
                                      participants={article.participants}
                                      youtubeURLs={article.youtubeURLs}
                                      deleteArticle={deleteArticle}
                                      id={article._id}
                                  />
                              </Card>
                          );
                      })
                    : '해당 게시물을 찾을 수 없습니다.'}
            </InfiniteScroll>
        </div>
    );
};

export default ArticleList;

import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin, Card, Result } from 'antd';

import ArticleItem from './ArticleItem';

import './ArticleList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ArticleList = ({ articles, category, clubs, kinds, readingStatus, readArticle, readMoreArticle }) => {
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
    console.log(readingStatus.loading);
    return (
        <div className="ArticleList" id="scrollableDiv">
            <InfiniteScroll
                className="infiniteScrollWrapper"
                dataLength={articles.length}
                next={getArticles}
                hasMore={true}
                scrollableTarget="scrollableDiv">
                {readingStatus.loading ? (
                    <Spin
                        indicator={<LoadingOutlined style={{ margin: '20 auto', fontSize: '40px' }} spin />}
                    />
                ) : articles.length > 0 ? (
                    articles.map((article) => {
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
                                    id={article._id}
                                />
                            </Card>
                        );
                    })
                ) : (
                    <Result title="해당 게시물을 찾을 수 없습니다." />
                )}
            </InfiniteScroll>
        </div>
    );
};

export default ArticleList;

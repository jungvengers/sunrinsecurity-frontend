import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Spin, Card, Result } from 'antd';

import ArticleItem from './ArticleItem';
import Filters from '../Filter/Filter';

import './ArticleList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ArticleList = ({ articles, category, clubs, kinds, readingStatus, readArticle, readMoreArticle, handleToggleCategory, handleChangeClub, handleChangekind }) => {
    const [perPage, setPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        const queryStringData = {
            perPage,
            currentPage: 1,
            category,
            clubs,
            kinds,
        };
        readArticle(queryStringData);
        setCurrentPage(2);
    }, [category, clubs, kinds, perPage, readArticle]);

    const getArticles = () => {
        const queryStringData = {
            perPage,
            currentPage,
            category,
            clubs,
            kinds,
        };
        readMoreArticle(queryStringData);
        setCurrentPage(currentPage + 1);
    };
    return (
        <div className="ArticleList" id="scrollableDiv">
            <InfiniteScroll
                className="infiniteScrollWrapper"
                dataLength={articles.length}
                next={getArticles}
                hasMore={true}
                scrollableTarget="scrollableDiv">
                <Filters
                    className="Filter"
                    handleToggleCategory={handleToggleCategory}
                    handleChangeClub={handleChangeClub}
                    handleChangekind={handleChangekind}
                />
                {readingStatus.loading ? (
                    <Spin
                        indicator={<LoadingOutlined style={{ margin: '20 auto', fontSize: '50px' }} spin />}
                    />
                ) : articles.length > 0 ? (
                    articles.map((article) => {
                        return (
                            <Card
                                title={article.isContestWork ? '외부실적' : '교내실적'}
                                style={{ width: '100%', textAlign: 'left', marginTop: '15px' }}
                                key={article._id}>
                                <ArticleItem
                                    clubs={article.clubs}
                                    content={article.content}
                                    files={article.images}
                                    kinds={article.kinds}
                                    participants={article.participants}
                                    youtubeURLs={article.youtubeURLs}
                                    id={article._id}
                                    urls={article._id}
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

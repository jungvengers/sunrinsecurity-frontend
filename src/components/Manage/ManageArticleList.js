import React, { useEffect } from 'react';
import { Spin, Card, Result } from 'antd';

import ManageArticleItem from './ManageArticleItem';

import './ManageList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ManageArticleList = ({ articles, readingStatus, readListArticle, deleteArticle }) => {
    useEffect(() => {
        const queryStringData = {
            perPage: 1,
        };
        readListArticle(queryStringData);
    }, [readListArticle]);
    return (
        <div className="ManageList">
            {readingStatus.loading ? (
                <Spin indicator={<LoadingOutlined style={{ marginTop: '15px', fontSize: '40px' }} spin />} />
            ) : articles.length > 0 ? (
                articles.map((article, idx) => (
                    <Card hoverable style={{ width: '60%', minWidth: '700px', marginTop: '15px' }} key={idx}>
                        <ManageArticleItem
                            content={article.content}
                            createdDate={article.createdAt}
                            id={article._id}
                            deleteArticle={deleteArticle}
                        />
                    </Card>
                ))
            ) : (
                <Result title="게시물이 없습니다." />
            )}
        </div>
    );
};

export default ManageArticleList;

import React, { useEffect } from 'react';
import { Spin, Card, Result } from 'antd';

import ManageItem from './ManageItem';

import './ManageList.scss';
import { LoadingOutlined } from '@ant-design/icons';

const ManageList = ({ articles, readingStatus, readListArticle, deleteArticle }) => {
    useEffect(() => {
        const queryStringData = {
            writer: localStorage.getItem('username'),
        };
        readListArticle(queryStringData);
    }, []);
    return (
        <div className="ManageList">
            {readingStatus.loading ? (
                <Spin indicator={<LoadingOutlined style={{ marginTop: '15px', fontSize: '40px' }} spin />} />
            ) : articles.length > 0 ? (
                articles.map((article) => (
                    <Card hoverable style={{ width: '100%', marginTop: '15px' }}>
                        <ManageItem
                            content={article.content}
                            files={article.images}
                            createDate={article.createdAt}
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

export default ManageList;

import React from 'react';
import { Image } from 'antd';

import './ArticleItem.scss';

const ArticleItem = ({ clubs, content, images, kinds, participants, id, deleteArticle }) => {
    return (
        <div className="ArticleItem">
            <div className={images.length < 4 ? 'ArticleItem-images-few' : 'ArticleItem-images-lot'}>
                <Image.PreviewGroup>
                    {images.map((image, idx) => (
                        <div key={idx} className="ArticleItem-image-wrapper">
                            <Image src={`https://api.jungvengers.com/media/${image}`} />
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
            <div className="ArticleItem-content">
                <p>{content}</p>
            </div>
            <div className="ArticleItem-detail-info">
                <div className="ArticleItem-participants">
                    <h2>참여자</h2>
                    {participants.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </div>
                <div className="ArticleItem-clubs">
                    <h2>기여한 동아리</h2>
                    {clubs.map((club, idx) => (
                        <li key={idx}>{club}</li>
                    ))}
                </div>
                <div className="ArticleItem-kinds">
                    <h2>분야</h2>
                    {kinds.map((kind, idx) => (
                        <li key={idx}>{kind}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ArticleItem;

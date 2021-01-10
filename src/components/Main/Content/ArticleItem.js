import React from 'react';
import { Image } from 'antd';

import './ArticleItem.scss';

const LargeViewArticle = ({ clubs, content, images, kinds, participants, id, deleteArticle }) => {
    const deletePost = () => {
        deleteArticle(id);
    };
    return (
        <div className="LargeViewArticle">
            <div
                className={images.length < 4 ? 'LargeViewArticle-images-few' : 'LargeViewArticle-images-lot'}>
                <Image.PreviewGroup>
                    {images.map((image, idx) => (
                        <div key={idx} className="LargeViewArticle-image-wrapper">
                            <Image src={`https://api.jungvengers.com/media/${image}`} />
                        </div>
                    ))}
                </Image.PreviewGroup>
            </div>
            <div className="LargeViewArticle-content">
                <p>{content}</p>
            </div>
            <div className="LargeViewArticle-detail-info">
                <div className="LargeViewArticle-participants">
                    <h2>참여자</h2>
                    {participants.map((name, idx) => (
                        <li key={idx}>{name}</li>
                    ))}
                </div>
                <div className="LargeViewArticle-clubs">
                    <h2>기여한 동아리</h2>
                    {clubs.map((club, idx) => (
                        <li key={idx}>{club}</li>
                    ))}
                </div>
                <div className="LargeViewArticle-kinds">
                    <h2>분야</h2>
                    {kinds.map((kind, idx) => (
                        <li key={idx}>{kind}</li>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LargeViewArticle;

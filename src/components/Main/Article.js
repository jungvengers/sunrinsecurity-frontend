import React from 'react';
import axios from 'axios';

import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { ARTICLE_API_URL } from '../../config/config';

import './Article.scss';

const Article = ({ clubs, content, category, kinds, participants, id, removeArticle }) => {
    const deletePost = async () => {
        const headers = {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
        };
        await axios.delete(`${ARTICLE_API_URL}/${id}`, headers);
        removeArticle(id);
    };

    return (
        <div className="Article">
            <h2>{category ? '대회실적' : '개인 프로젝트'}</h2>
            <div className="participants">
                {kinds.map((kind, idx) => (
                    <li key={idx}>{kind}</li>
                ))}
            </div>
            <div className="participants">
                {participants.map((name, idx) => (
                    <li key={idx}>
                        {clubs[idx]} 소속 {name}
                    </li>
                ))}
            </div>
            <p dangerouslySetInnerHTML={{ __html: content }}></p>
            {localStorage.getItem('accessToken') && (
                <div className="ArticleButton">
                    <AiOutlineDelete className="img" onClick={deletePost} />
                    <AiOutlineEdit className="img" />
                </div>
            )}
        </div>
    );
};

export default Article;

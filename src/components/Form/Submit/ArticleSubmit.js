import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { formValidation } from '../../../utils/lib/validationCheck';
import { splitParticipants, splitYoutubeURLs } from '../../../utils/lib/splitString';

import './Submit.scss';

const ArticleSubmit = ({ submitData, uploadArticleStatus, participants, youtubeURLs, fetchArticle }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClose = () => setIsModalVisible(false);
    const handleCancel = () => (document.location.pathname = '/article');
    const handleSave = async () => {
        submitData.participants = splitParticipants(participants);
        submitData.youtubeURLs = splitYoutubeURLs(youtubeURLs);
        const [result, missingFieldName] = formValidation(submitData, [
            'title',
            'participants',
            'kinds',
            'isContestWork',
            'thumbnail',
            'content',
        ]);

        if (result) fetchArticle(submitData);
        else
            Modal.warning({
                title: '모든 양식을 채워주세요.',
                content: `${missingFieldName} 칸을(를) 채워주세요.`,
            });
    };

    console.log(uploadArticleStatus);
    return (
        <div className="Submit">
            <Modal title="양식 미작성" visible={isModalVisible} onOk={handleClose} onCancel={handleClose}>
                <p>모든 양식을 채워주세요.</p>
            </Modal>
            <Button type="primary" onClick={handleCancel} danger>
                취소
            </Button>
            <Button type="primary" loading={uploadArticleStatus.loading} onClick={handleSave}>
                저장
            </Button>
        </div>
    );
};

export default React.memo(ArticleSubmit);

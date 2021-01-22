import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { formValidation } from '../../../utils/lib/validationCheck';
import { splitParticipants, splitYoutubeURLs } from '../../../utils/lib/splitString';
import history from '../../../utils/lib/history';

import './Submit.scss';

const Submit = ({ submitData, participants, youtubeURLs, fetchArticle }) => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleClose = () => setIsModalVisible(false);
    const handleCancel = () => (document.location.pathname = '/');
    const handleSave = async () => {
        submitData.participants = splitParticipants(participants);
        submitData.youtubeURLs = splitYoutubeURLs(youtubeURLs);
        const [result, missingFieldName] = formValidation(submitData, [
            'participants',
            'kinds',
            'isContestWork',
            'content',
        ]);
        if (result) {
            setIsLoading(true);
            fetchArticle(submitData);
        } else {
            Modal.warning({
                title: '모든 양식을 채워주세요.',
                content: `${missingFieldName} 칸을(를) 채워주세요.`,
            });
        }
    };

    return (
        <div className="Submit">
            <Modal title="양식 미작성" visible={isModalVisible} onOk={handleClose} onCancel={handleClose}>
                <p>모든 양식을 채워주세요.</p>
            </Modal>
            <Button type="primary" onClick={handleCancel} danger>
                취소
            </Button>
            <Button type="primary" loading={isLoading} onClick={handleSave}>
                저장
            </Button>
        </div>
    );
};

export default React.memo(Submit);

import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { formValidation } from '../../utils/lib/validationCheck';
import { splitParticipants, splitYoutubeURLs } from '../../utils/lib/splitString';
import history from '../../utils/lib/history';

import './Submit.scss';

const Submit = ({
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    youtubeURLs,
    uploadArticleAsync,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClose = () => setIsModalVisible(false);
    const handleCancel = () => history.push('/');
    const handleClick = async () => {
        const data = {
            participants: splitParticipants(participants),
            clubs,
            kinds,
            isContestWork,
            imageFiles,
            youtubeURLs: splitYoutubeURLs(youtubeURLs),
            content,
        };
        const [result, missingFieldName] = formValidation(data, [
            'participants',
            'kinds',
            'isContestWork',
            'content',
        ]);
        if (result) {
            uploadArticleAsync(data);
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
            <Button type="primary" onClick={handleClick}>
                저장
            </Button>
        </div>
    );
};

export default React.memo(Submit);

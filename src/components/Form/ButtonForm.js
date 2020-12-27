import React, { useState } from 'react';
import { Modal, Button } from 'antd';

import { formValidation } from '../../utils/lib/validationCheck';
import history from '../../utils/lib/history';

import './ButtonForm.scss';

const ButtonForm = ({
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    uploadArticleAsync,
}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleClose = () => setIsModalVisible(false);

    const handleClick = async () => {
        const data = {
            isContestWork,
            participants,
            clubs,
            content,
            kinds,
            imageFiles,
        };
        if (formValidation(data)) {
            uploadArticleAsync(data);
        } else {
            Modal.warning({
                title: '모든 양식을 채워주세요.',
                //TODO 어떤 영역 안채웠는지 메시징
                content: '모든 양식을 채워주세요.',
            });
        }
    };
    return (
        <div className="ButtonForm">
            <Modal title="양식 미작성" visible={isModalVisible} onOk={handleClose} onCancel={handleClose}>
                <p>모든 양식을 채워주세요.</p>
            </Modal>
            <Button type="primary" onClick={handleClick}>
                저장
            </Button>
            <Button type="primary" onClick={() => history.push('/')} danger>
                취소
            </Button>
        </div>
    );
};

export default ButtonForm;

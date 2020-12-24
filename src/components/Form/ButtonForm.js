import React from 'react';
import { useHistory } from 'react-router';

import { formValidation } from '../../utils/lib/validationCheck';

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
    const history = useHistory();

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
            alert('모든 양식을 채워주세요.');
        }
    };
    return (
        <div className="ButtonForm">
            <input
                type="button"
                className="ButtonForm-cancel"
                value="취소"
                onClick={() => history.push('/')}
            />
            <input type="button" className="ButtonForm-save" value="저장" onClick={handleClick} />
        </div>
    );
};

export default ButtonForm;

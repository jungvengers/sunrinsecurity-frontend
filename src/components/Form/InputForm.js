import React from 'react';
import WysiwygEditor from './WysiwygEditor';

import './InputForm.scss';

const InputForm = ({
    content,
    uploadedImages,
    toggleCategory,
    addParticipant,
    addClub,
    addKind,
    changeContent,
    addImage,
}) => {
    const handleKeyPress = (e, setState) => {
        if (e.target.value === '' || e.target.value === ' ') return;
        if (e.key === 'Enter') {
            setState(e.target.value);
            e.target.value = '';
        }
    };

    const handleChange = (newState, setState) => setState(newState);

    return (
        <div className="InputForm">
            <input
                type="text"
                className="participants"
                placeholder="참여자"
                onKeyPress={(e) => handleKeyPress(e, addParticipant)}
            />
            <input
                type="text"
                className="clubs"
                placeholder="소속"
                onKeyPress={(e) => handleKeyPress(e, addClub)}
            />
            <input
                type="text"
                className="kinds"
                placeholder="분야"
                onKeyPress={(e) => handleKeyPress(e, addKind)}
            />
            <select
                name="category"
                className="category"
                onChange={(e) => handleChange(e.target.value === 'true', toggleCategory)}>
                <option value={null}>카테고리 선택</option>
                <option value={true}>대회 실적</option>
                <option value={false}>개인 프로젝트</option>
            </select>
            <WysiwygEditor
                content={content}
                uploadedImages={uploadedImages}
                changeContent={changeContent}
                addImage={addImage}
            />
        </div>
    );
};

export default InputForm;

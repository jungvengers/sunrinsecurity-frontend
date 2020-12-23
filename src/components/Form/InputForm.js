import React from 'react';

import './InputForm.scss';

const InputForm = ({ toggleIsContestWork, addParticipant, addClub, addKind, changeContent }) => {
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
                className="InputForm-participants"
                placeholder="참여자"
                onKeyPress={(e) => handleKeyPress(e, addParticipant)}
            />
            <input
                type="text"
                className="InputForm-clubs"
                placeholder="소속"
                onKeyPress={(e) => handleKeyPress(e, addClub)}
            />
            <input
                type="text"
                className="InputForm-kinds"
                placeholder="분야"
                onKeyPress={(e) => handleKeyPress(e, addKind)}
            />
            <select
                name="category"
                className="InputForm-category"
                onChange={(e) => handleChange(e.target.value === 'true', toggleIsContestWork)}>
                <option value={null}>카테고리 선택</option> //TODO 카테고리 이름 재구성
                <option value={true}>대회 실적</option>
                <option value={false}>개인 프로젝트</option>
            </select>
            <textarea
                className="InputForm-content"
                cols="30"
                rows="10"
                onChange={(e) => changeContent(e.target.value)}></textarea>
        </div>
    );
};

export default InputForm;

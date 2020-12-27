import React from 'react';

import InputForm from './InputForm';
import PreviewForm from './PreviewForm';
import ButtonForm from './ButtonForm';

import history from '../../utils/lib/history';

import './Form.scss';

const Form = ({
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    uploadArticleAsync,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    changeContent,
}) => {
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Form">
            <h2>정보보호과 홍보 페이지</h2>
            <p>게시글 작성 페이지</p>
            <div>
                <div className="Form-left">
                    <InputForm
                        imageFiles={imageFiles}
                        toggleIsContestWork={toggleIsContestWork}
                        addParticipant={addParticipant}
                        addClub={addClub}
                        addKind={addKind}
                        addImageFile={addImageFile}
                        removeImageFile={removeImageFile}
                        changeContent={changeContent}
                    />
                    <ButtonForm
                        isContestWork={isContestWork}
                        participants={participants}
                        clubs={clubs}
                        kinds={kinds}
                        content={content}
                        imageFiles={imageFiles}
                        uploadArticleAsync={uploadArticleAsync}
                    />
                </div>
                <div className="Form-right">
                    <PreviewForm participants={participants} clubs={clubs} kinds={kinds} />
                </div>
            </div>
        </div>
    );
};

export default Form;

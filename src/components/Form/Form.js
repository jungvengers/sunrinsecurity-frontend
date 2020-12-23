import React from 'react';

import InputForm from './InputForm';
import PreviewForm from './PreviewForm';
import ButtonForm from './ButtonForm';
import ImageForm from './ImageForm';

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
    changeContent,
}) => {
    return (
        <div className="Form">
            <h2>정보보호과 홍보 페이지</h2>
            <p>게시글 작성 페이지</p>
            <div>
                <div className="Form-left">
                    <InputForm
                        toggleIsContestWork={toggleIsContestWork}
                        addParticipant={addParticipant}
                        addClub={addClub}
                        addKind={addKind}
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
                    <ImageForm addImageFile={addImageFile} />
                </div>
            </div>
        </div>
    );
};

export default Form;

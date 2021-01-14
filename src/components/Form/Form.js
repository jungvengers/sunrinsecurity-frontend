import React, { useState } from 'react';

import Header from '../Main/Header/Header';
import Input from './Input/Input';
import Submit from './Submit';

import history from '../../utils/lib/history';

import './Form.scss';

const Form = ({
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    youtubeURLs,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    addYoutubeURL,
    changeContent,
    uploadArticleAsync,
}) => {
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="Form">
            <Header />
            <div>
                <Input
                    imageFiles={imageFiles}
                    youtubeURLs={youtubeURLs}
                    participants={participants}
                    toggleIsContestWork={toggleIsContestWork}
                    addClub={addClub}
                    addKind={addKind}
                    addImageFile={addImageFile}
                    removeImageFile={removeImageFile}
                    changeContent={changeContent}
                    addParticipant={addParticipant}
                    addYoutubeURL={addYoutubeURL}
                />
                <Submit
                    isContestWork={isContestWork}
                    participants={participants}
                    clubs={clubs}
                    kinds={kinds}
                    content={content}
                    imageFiles={imageFiles}
                    youtubeURLs={youtubeURLs}
                    uploadArticleAsync={uploadArticleAsync}
                />
            </div>
        </div>
    );
};

export default Form;

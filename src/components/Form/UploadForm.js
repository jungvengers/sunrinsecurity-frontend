import React, { useState } from 'react';

import Header from '../Main/Header/Header';
import Input from './Input/Input';
import Submit from './Submit/Submit';

import history from '../../utils/lib/history';
import { splitParticipants, splitYoutubeURLs } from '../../utils/lib/splitString';

import './UploadForm.scss';

const UploadForm = ({
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
    uploadArticle,
}) => {
    const submitData = {
        clubs,
        kinds,
        isContestWork,
        files: imageFiles,
        content,
    };
    if (!localStorage.getItem('accessToken')) history.push('/');
    return (
        <div className="UploadForm">
            <Header />
            <div>
                <Input
                    participants={participants}
                    clubs={clubs}
                    kinds={kinds}
                    isContestWork={isContestWork}
                    content={content}
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
                    submitData={submitData}
                    participants={participants}
                    youtubeURLs={youtubeURLs}
                    fetchArticle={uploadArticle}
                />
            </div>
        </div>
    );
};

export default UploadForm;

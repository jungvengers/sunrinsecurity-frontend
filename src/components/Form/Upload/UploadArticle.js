import React, { useEffect } from 'react';

import Header from '../../Header/Header';
import Input from '../Input/Input';
import ArticleSubmit from '../Submit/ArticleSubmit';
import history from '../../../utils/lib/history';
import validationToken from '../../../utils/lib/validationToken';

import './UploadArticle.scss';

const UploadArticle = ({
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
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) history.push('/');
        validationToken();
    }, []);
    return (
        <div className="UploadArticle">
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
                    toggleIsContestWork={toggleIsContestWork}
                    addClub={addClub}
                    addKind={addKind}
                    addImageFile={addImageFile}
                    removeImageFile={removeImageFile}
                    changeContent={changeContent}
                    addParticipant={addParticipant}
                    addYoutubeURL={addYoutubeURL}
                />
                <ArticleSubmit
                    submitData={submitData}
                    participants={participants}
                    youtubeURLs={youtubeURLs}
                    fetchArticle={uploadArticle}
                />
            </div>
        </div>
    );
};

export default UploadArticle;

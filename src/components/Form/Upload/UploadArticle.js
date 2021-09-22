import React, { useEffect } from 'react';

import Header from '../../Header/Header';
import Input from '../Input/Input';
import ArticleSubmit from '../Submit/ArticleSubmit';
import history from '../../../utils/lib/history';
import validationToken from '../../../utils/lib/validationToken';

import './UploadArticle.scss';

const UploadArticle = ({
    title,
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    thumbnail,
    youtubeURLs,
    changeTitle,
    uploadArticleStatus,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    addThumbnailFile,
    removeThumbnailFile,
    addYoutubeURL,
    changeContent,
    uploadArticle,
}) => {
    const submitData = {
        title,
        clubs,
        kinds,
        isContestWork,
        files: imageFiles,
        thumbnail,
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
                    title={title}
                    participants={participants}
                    clubs={clubs}
                    kinds={kinds}
                    isContestWork={isContestWork}
                    content={content}
                    imageFiles={imageFiles}
                    thumbnail={thumbnail}
                    youtubeURLs={youtubeURLs}
                    changeTitle={changeTitle}
                    toggleIsContestWork={toggleIsContestWork}
                    addClub={addClub}
                    addKind={addKind}
                    addImageFile={addImageFile}
                    removeImageFile={removeImageFile}
                    addThumbnailFile={addThumbnailFile}
                    removeThumbnailFile={removeThumbnailFile}
                    changeContent={changeContent}
                    addParticipant={addParticipant}
                    addYoutubeURL={addYoutubeURL}
                />
                <ArticleSubmit
                    submitData={submitData}
                    participants={participants}
                    youtubeURLs={youtubeURLs}
                    uploadArticleStatus={uploadArticleStatus}
                    fetchArticle={uploadArticle}
                />
            </div>
        </div>
    );
};

export default UploadArticle;

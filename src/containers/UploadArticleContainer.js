import React from 'react';
import { connect } from 'react-redux';
import UploadArticle from '../components/Form/Upload/UploadArticle';
import {
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
    changeTitle,
    uploadArticleAsync,
} from '../store/actions/uploadAction';

const UploadArticleContainer = ({
    title,
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    thumbnail,
    youtubeURLs,
    uploadArticle,
    changeTitle,
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
    uploadArticleAsync,
}) => {
    return (
        <UploadArticle
            title={title}
            isContestWork={isContestWork}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            imageFiles={imageFiles}
            thumbnail={thumbnail}
            youtubeURLs={youtubeURLs}
            changeTitle={changeTitle}
            uploadArticleStatus={uploadArticle}
            toggleIsContestWork={toggleIsContestWork}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            addImageFile={addImageFile}
            removeImageFile={removeImageFile}
            addThumbnailFile={addThumbnailFile}
            removeThumbnailFile={removeThumbnailFile}
            addYoutubeURL={addYoutubeURL}
            changeContent={changeContent}
            uploadArticle={uploadArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ upload }) => ({
        title: upload.title,
        isContestWork: upload.isContestWork,
        participants: upload.participants,
        clubs: upload.clubs,
        kinds: upload.kinds,
        content: upload.content,
        imageFiles: upload.imageFiles,
        thumbnail: upload.thumbnail,
        youtubeURLs: upload.youtubeURLs,
        uploadArticle: upload.uploadArticle,
    }),
    // mapDispatchToProps
    {
        toggleIsContestWork,
        addParticipant,
        addClub,
        addKind,
        addImageFile,
        removeImageFile,
        addThumbnailFile,
        removeThumbnailFile,
        addYoutubeURL,
        changeTitle,
        changeContent,
        uploadArticleAsync,
    }
)(UploadArticleContainer);

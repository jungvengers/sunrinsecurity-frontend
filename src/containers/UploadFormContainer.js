import React from 'react';
import { connect } from 'react-redux';
import UploadForm from '../components/Form/UploadForm';
import {
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    addYoutubeURL,
    changeContent,
    uploadArticleAsync,
} from '../store/actions/uploadAction';

const UploadFormContainer = ({
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
    return (
        <UploadForm
            isContestWork={isContestWork}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            imageFiles={imageFiles}
            youtubeURLs={youtubeURLs}
            toggleIsContestWork={toggleIsContestWork}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            addImageFile={addImageFile}
            removeImageFile={removeImageFile}
            addYoutubeURL={addYoutubeURL}
            changeContent={changeContent}
            uploadArticle={uploadArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ upload }) => ({
        isContestWork: upload.isContestWork,
        participants: upload.participants,
        clubs: upload.clubs,
        kinds: upload.kinds,
        content: upload.content,
        imageFiles: upload.imageFiles,
        youtubeURLs: upload.youtubeURLs,
    }),
    // mapDispatchToProps
    {
        toggleIsContestWork,
        addParticipant,
        addClub,
        addKind,
        addImageFile,
        removeImageFile,
        addYoutubeURL,
        changeContent,
        uploadArticleAsync,
    }
)(UploadFormContainer);
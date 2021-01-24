import React from 'react';
import { connect } from 'react-redux';
import EditArticle from '../components/Form/Edit/EditArticle';
import {
    readAnArticleAsync,
    updateArticleAsync,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    removeUploadedImageFile,
    addYoutubeURL,
    changeContent,
} from '../store/actions/manageArticleAction';

const EditArticleContainer = ({
    match,
    id,
    participants,
    clubs,
    kinds,
    isContestWork,
    uploadedFiles,
    files,
    youtubeURLs,
    content,
    readAnArticleAsync,
    updateArticleAsync,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    removeUploadedImageFile,
    addYoutubeURL,
    changeContent,
}) => {
    return (
        <EditArticle
            match={match}
            id={id}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            isContestWork={isContestWork}
            uploadedFiles={uploadedFiles}
            files={files}
            youtubeURLs={youtubeURLs}
            content={content}
            readAnArticle={readAnArticleAsync}
            updateArticle={updateArticleAsync}
            toggleIsContestWork={toggleIsContestWork}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            addImageFile={addImageFile}
            removeImageFile={removeImageFile}
            removeUploadedImageFile={removeUploadedImageFile}
            addYoutubeURL={addYoutubeURL}
            changeContent={changeContent}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ manageArticle }) => ({
        id: manageArticle.id,
        participants: manageArticle.participants,
        clubs: manageArticle.clubs,
        kinds: manageArticle.kinds,
        isContestWork: manageArticle.isContestWork,
        uploadedFiles: manageArticle.uploadedFiles,
        files: manageArticle.files,
        youtubeURLs: manageArticle.youtubeURLs,
        content: manageArticle.content,
    }),
    // mapDispatchToProps
    {
        readAnArticleAsync,
        updateArticleAsync,
        toggleIsContestWork,
        addParticipant,
        addClub,
        addKind,
        addImageFile,
        removeImageFile,
        removeUploadedImageFile,
        addYoutubeURL,
        changeContent,
    }
)(EditArticleContainer);

import React from 'react';
import { connect } from 'react-redux';
import EditForm from '../components/Form/EditForm';
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
} from '../store/actions/manageAction';

const EditFormContainer = ({
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
        <EditForm
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
    ({ manage }) => ({
        id: manage.id,
        participants: manage.participants,
        clubs: manage.clubs,
        kinds: manage.kinds,
        isContestWork: manage.isContestWork,
        uploadedFiles: manage.uploadedFiles,
        files: manage.files,
        youtubeURLs: manage.youtubeURLs,
        content: manage.content,
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
)(EditFormContainer);

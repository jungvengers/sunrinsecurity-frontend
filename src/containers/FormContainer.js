import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import {
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    changeContent,
    uploadArticleAsync,
} from '../store/actions/formAction';

const FormContainer = ({
    isContestWork,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    changeContent,
    uploadArticleAsync,
}) => {
    return (
        <Form
            isContestWork={isContestWork}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            imageFiles={imageFiles}
            toggleIsContestWork={toggleIsContestWork}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            addImageFile={addImageFile}
            removeImageFile={removeImageFile}
            changeContent={changeContent}
            uploadArticleAsync={uploadArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ form }) => ({
        isContestWork: form.isContestWork,
        participants: form.participants,
        clubs: form.clubs,
        kinds: form.kinds,
        content: form.content,
        imageFiles: form.imageFiles,
    }),
    // mapDispatchToProps
    {
        toggleIsContestWork,
        addParticipant,
        addClub,
        addKind,
        addImageFile,
        removeImageFile,
        changeContent,
        uploadArticleAsync,
    }
)(FormContainer);

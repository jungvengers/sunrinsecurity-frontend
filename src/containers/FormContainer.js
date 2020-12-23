import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import {
    toggleCategory,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    changeContent,
    uploadArticleAsync,
} from '../store/actions/formAction';

const FormContainer = ({
    category,
    participants,
    clubs,
    kinds,
    content,
    imageFiles,
    toggleCategory,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    changeContent,
    uploadArticleAsync,
}) => {
    return (
        <Form
            category={category}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            imageFiles={imageFiles}
            toggleCategory={toggleCategory}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            addImageFile={addImageFile}
            changeContent={changeContent}
            uploadArticleAsync={uploadArticleAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ form }) => ({
        category: form.category,
        participants: form.participants,
        clubs: form.clubs,
        kinds: form.kinds,
        content: form.content,
        imageFiles: form.imageFiles,
    }),
    // mapDispatchToProps
    {
        toggleCategory,
        addParticipant,
        addClub,
        addKind,
        addImageFile,
        changeContent,
        uploadArticleAsync,
    }
)(FormContainer);

import React from 'react';
import { connect } from 'react-redux';
import Form from '../components/Form/Form';
import {
    toggleCategory,
    addParticipant,
    addClub,
    addKind,
    changeContent,
    addImage,
} from '../store/actions/formAction';

const FormContainer = ({
    category,
    participants,
    clubs,
    kinds,
    content,
    uploadedImages,
    toggleCategory,
    addParticipant,
    addClub,
    addKind,
    changeContent,
    addImage,
}) => {
    return (
        <Form
            category={category}
            participants={participants}
            clubs={clubs}
            kinds={kinds}
            content={content}
            uploadedImages={uploadedImages}
            toggleCategory={toggleCategory}
            addParticipant={addParticipant}
            addClub={addClub}
            addKind={addKind}
            changeContent={changeContent}
            addImage={addImage}
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
        uploadedImages: form.uploadedImages,
    }),
    // mapDispatchToProps
    { toggleCategory, addParticipant, addClub, addKind, changeContent, addImage }
)(FormContainer);

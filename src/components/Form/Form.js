import React from 'react';

import InputForm from './InputForm';
import PreviewForm from './PreviewForm';
import ButtonForm from './ButtonForm';

import './Form.scss';

const Form = ({
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
        <div className="Form">
            <InputForm
                content={content}
                uploadedImages={uploadedImages}
                toggleCategory={toggleCategory}
                addParticipant={addParticipant}
                addClub={addClub}
                addKind={addKind}
                changeContent={changeContent}
                addImage={addImage}
            />
            <PreviewForm participants={participants} clubs={clubs} kinds={kinds} />
            <ButtonForm
                category={category}
                participants={participants}
                clubs={clubs}
                kinds={kinds}
                content={content}
                uploadedImages={uploadedImages}
            />
        </div>
    );
};

export default Form;

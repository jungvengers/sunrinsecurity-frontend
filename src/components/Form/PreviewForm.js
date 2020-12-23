import React from 'react';

import './PreviewForm.scss';

const PreviewForm = ({ participants, clubs, kinds }) => {
    return (
        <div className="PreviewForm">
            <div className="PreviewForm-section">
                <p>참가자</p>
                <div className="PreviewForm-preview-data">
                    {participants.map((item) => (
                        <span>{item}</span>
                    ))}
                </div>
            </div>
            <div className="PreviewForm-section">
                <p>소속</p>
                <div className="PreviewForm-preview-data">
                    {clubs.map((item) => (
                        <span>{item}</span>
                    ))}
                </div>
            </div>
            <div className="PreviewForm-section">
                <p>분야</p>
                <div className="PreviewForm-preview-data">
                    {kinds.map((item) => (
                        <span>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreviewForm;

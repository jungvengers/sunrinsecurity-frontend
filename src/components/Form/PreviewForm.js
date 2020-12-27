import React from 'react';

import './PreviewForm.scss';

const PreviewForm = ({ participants, clubs, kinds }) => {
    return (
        <div className="PreviewForm">
            <div className="PreviewForm-section">
                <p>참가자</p>
                <div className="PreviewForm-preview-data">
                    {participants.map((item, key) => (
                        <span key={key}>{item}</span>
                    ))}
                </div>
            </div>
            <div className="PreviewForm-section">
                <p>소속</p>
                <div className="PreviewForm-preview-data">
                    {clubs.map((item, key) => (
                        <span key={key}>{item}</span>
                    ))}
                </div>
            </div>
            <div className="PreviewForm-section">
                <p>분야</p>
                <div className="PreviewForm-preview-data">
                    {kinds.map((item, key) => (
                        <span key={key}>{item}</span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PreviewForm;

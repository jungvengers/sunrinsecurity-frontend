import React from 'react';

import './ImageForm.scss';

const ImageForm = ({ addImageFile }) => {
    const handleChange = (e) => {
        const images = e.target.files;
        Array.from(images).forEach((image) => {
            // 파일 사이즈 체킹
            if (image.size / (1000 * 1000) >= 10) {
                alert('이미지 크기는 개당 10MB 이하로 첨부하여 주세요. \n(다시 첨부하여 주세요.)');
                e.target.value = null;
                return;
            }
        });

        if (images.length > 0) addImageFile(images);
    };
    return (
        <div className="ImageForm">
            <p>사진</p>
            <input className="ImageForm-file-input" type="file" multiple onChange={handleChange} />
        </div>
    );
};

export default ImageForm;

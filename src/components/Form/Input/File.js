import React from 'react';
import { Upload, message } from 'antd';

import { InboxOutlined } from '@ant-design/icons';

const File = ({ imageFiles, addImageFile, removeImageFile }) => {
    const props = {
        fileList: imageFiles,
        beforeUpload: (file) => {
            // 파일 사이즈 체킹
            if (file.size / (1000 * 1000) >= 10) {
                message.error(`${file.name} 업로드 실패(첨부파일은 10MB까지 허용됩니다.)`);
                return false;
            }
            addImageFile(file);
            return false;
        },
        onRemove: (file) => {
            removeImageFile(file);
        },
    };
    return (
        <Upload.Dragger {...props} accept="image/png, image/jpg, image/jpeg, .pdf, .zip" multiple>
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="ant-upload-text">클릭하거나 파일을 여기로 드래그하세요.</p>
            <p className="ant-upload-hint">
                첨부 형식은 jpg, jpeg, png, zip, pdf이며, 첨부 용량은 개당 최대 10MB까지 허용합니다.
            </p>
        </Upload.Dragger>
    );
};

export default React.memo(File);

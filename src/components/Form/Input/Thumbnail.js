import React from 'react';
import { Upload, Button, message } from 'antd';

import { InboxOutlined, UploadOutlined } from '@ant-design/icons';

const Thumbnail = ({ thumbnail, addThumbnailFile, removeThumbnailFile }) => {
    const props = {
        fileList: null,
        beforeUpload: (file) => {
            // 파일 사이즈 체킹
            if (file.size / (1000 * 1000) >= 10) {
                message.error(`${file.name} 업로드 실패(첨부파일은 10MB까지 허용됩니다.)`);
                return false;
            }

            addThumbnailFile(file);
            return false;
        },
        onRemove: () => {
            removeThumbnailFile();
        },
    };
    return (
        <Upload {...props} accept="image/png, image/jpg, image/jpeg">
            <Button icon={<UploadOutlined />}>Upload jpg, jpeg, png only</Button>
        </Upload>
    );
};

export default React.memo(Thumbnail);

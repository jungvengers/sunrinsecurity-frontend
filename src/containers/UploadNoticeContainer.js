import React from 'react';
import { connect } from 'react-redux';
import UploadNotice from '../components/Form/Upload/UploadNotice';
import {
    changeTitle,
    changeContent,
    addImageFile,
    removeImageFile,
    addYoutubeURL,
    uploadNoticeAsync,
} from '../store/actions/uploadAction';

const UploadNoticeContainer = ({
    title,
    content,
    imageFiles,
    youtubeURLs,
    changeTitle,
    changeContent,
    addImageFile,
    removeImageFile,
    addYoutubeURL,
    uploadNoticeAsync,
}) => {
    return (
        <UploadNotice
            title={title}
            content={content}
            imageFiles={imageFiles}
            youtubeURLs={youtubeURLs}
            changeTitle={changeTitle}
            changeContent={changeContent}
            addImageFile={addImageFile}
            removeImageFile={removeImageFile}
            addYoutubeURL={addYoutubeURL}
            uploadNotice={uploadNoticeAsync}
        />
    );
};

export default connect(
    ({ upload }) => ({
        title: upload.title,
        content: upload.content,
        imageFiles: upload.imageFiles,
        youtubeURLs: upload.youtubeURLs,
    }),
    {
        changeTitle,
        changeContent,
        addImageFile,
        removeImageFile,
        addYoutubeURL,
        uploadNoticeAsync,
    }
)(UploadNoticeContainer);

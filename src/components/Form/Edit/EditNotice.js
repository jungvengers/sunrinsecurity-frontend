import React, { useEffect } from 'react';
import { Form, Upload, message } from 'antd';

import { InboxOutlined, CloudServerOutlined, DeleteOutlined } from '@ant-design/icons';

import Header from '../../Header/Header';
import NoticeSubmit from '../Submit/NoticeSubmit';
import Title from '../Input/Title';
import Video from '../Input/Video';
import Content from '../Input/Content';
import history from '../../../utils/lib/history';
import validationToken from '../../../utils/lib/validationToken';

import './EditArticle.scss';
import { InfoCircleOutlined } from '@ant-design/icons';

const EditArticle = ({
    match,
    id,
    uploadedFiles,
    files,
    youtubeURLs,
    title,
    content,
    readAnNotice,
    updateNotice,
    addImageFile,
    removeImageFile,
    removeUploadedImageFile,
    addYoutubeURL,
    changeTitle,
    changeContent,
}) => {
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) history.push('/');
        validationToken();
        readAnNotice(match.params.id);
    }, [readAnNotice, match.params.id]);
    const props = {
        fileList: files,
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
    const submitData = {
        id,
        files,
        fileNames: uploadedFiles,
        title,
        content,
    };
    return (
        <div className="EditArticle">
            <Header />
            <div>
                <Form layout="vertical" className="Input">
                    <Form.Item label="제목">
                        <Title title={title} changeTitle={changeTitle} />
                    </Form.Item>
                    <Form.Item label="내용">
                        <Content content={content} changeContent={changeContent} />
                    </Form.Item>
                    <Form.Item label="업로드된 영상 링크 및 파일">
                        {uploadedFiles.map((filename) => (
                            <div className="EditArticle-uploaded-file">
                                <div>
                                    <CloudServerOutlined style={{ marginRight: '8px' }} />
                                    <span>{filename}</span>
                                </div>
                                <DeleteOutlined
                                    className="EditArticle-del-icon"
                                    onClick={() => removeUploadedImageFile(filename)}
                                />
                            </div>
                        ))}
                    </Form.Item>
                    <Form.Item label="파일">
                        <Upload.Dragger
                            {...props}
                            accept="image/png, image/jpg, image/jpeg, .pdf, .zip"
                            multiple>
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">클릭하거나 파일을 여기로 드래그하세요.</p>
                            <p className="ant-upload-hint">
                                첨부 형식은 jpg, jpeg, png, zip, pdf이며, 첨부 용량은 개당 최대 10MB까지
                                허용합니다.
                            </p>
                        </Upload.Dragger>
                    </Form.Item>
                    <Form.Item
                        label="영상"
                        tooltip={{
                            title: '유튜브 영상의 고유번호를 입력해주세요.',
                            icon: <InfoCircleOutlined />,
                        }}>
                        <Video youtubeURLs={youtubeURLs} addYoutubeURL={addYoutubeURL} />
                    </Form.Item>
                </Form>
                <NoticeSubmit submitData={submitData} youtubeURLs={youtubeURLs} fetchArticle={updateNotice} />
            </div>
        </div>
    );
};

export default EditArticle;

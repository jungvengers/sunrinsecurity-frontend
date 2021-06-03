import React, { useEffect } from 'react';
import { Form } from 'antd';

import Header from '../../Main/Header/Header';
import Submit from '../Submit/NoticeSubmit';
import Title from '../Input/Title';
import Content from '../Input/Content';
import File from '../Input/File';
import Video from '../Input/Video';
import history from '../../../utils/lib/history';
import validationToken from '../../../utils/lib/validationToken';

import './UploadNotice.scss';
import { InfoCircleOutlined } from '@ant-design/icons';

const UploadNotice = ({
    title,
    content,
    imageFiles,
    youtubeURLs,
    changeTitle,
    changeContent,
    addImageFile,
    removeImageFile,
    addYoutubeURL,
    uploadNotice,
}) => {
    const submitData = {
        title,
        content,
        files: imageFiles,
    };
    useEffect(() => {
        if (!localStorage.getItem('accessToken')) history.push('/');
        validationToken();
    }, []);
    return (
        <div className="UploadNotice">
            <Header />
            <div>
                <Form layout="vertical" className="Input">
                    <Form.Item label="제목">
                        <Title title={title} changeTitle={changeTitle} />
                    </Form.Item>
                    <Form.Item label="내용">
                        <Content content={content} changeContent={changeContent} />
                    </Form.Item>
                    <Form.Item label="파일">
                        <File
                            imageFiles={imageFiles}
                            addImageFile={addImageFile}
                            removeImageFile={removeImageFile}
                        />
                    </Form.Item>
                    <Form.Item
                        label="영상"
                        tooltip={{
                            title: '유튜브 영상의 링크를 작성해주세요.',
                            icon: <InfoCircleOutlined />,
                        }}>
                        <Video youtubeURLs={youtubeURLs} addYoutubeURL={addYoutubeURL} />
                    </Form.Item>
                </Form>
                <Submit submitData={submitData} youtubeURLs={youtubeURLs} fetchArticle={uploadNotice} />
            </div>
        </div>
    );
};

export default UploadNotice;

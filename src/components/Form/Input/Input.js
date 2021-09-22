import React from 'react';
import { Form } from 'antd';

import TextField from './TextField';
import Club from './Club';
import Kind from './Kind';
import Category from './Category';
import Thumbnail from './Thumbnail';
import File from './File';
import Content from './Content';

import './Input.scss';
import { InfoCircleOutlined } from '@ant-design/icons';

const Input = ({
    title,
    participants,
    clubs,
    kinds,
    isContestWork,
    content,
    imageFiles,
    thumbnail,
    youtubeURLs,
    changeTitle,
    toggleIsContestWork,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    addThumbnailFile,
    removeThumbnailFile,
    changeContent,
    addParticipant,
    addYoutubeURL,
}) => {
    return (
        <Form layout="vertical" className="Input">
            <Form.Item label="제목">
                <TextField
                    state={title}
                    setState={changeTitle}
                    kind="title"
                    placeholder="제목을 입력해주세요."
                />
            </Form.Item>
            <Form.Item label="참여자">
                <TextField
                    state={participants}
                    setState={addParticipant}
                    kind="participants"
                    placeholder="김선린 이선린 박선린"
                />
            </Form.Item>
            <Form.Item label="소속">
                <Club clubs={clubs} addClub={addClub} />
            </Form.Item>
            <Form.Item label="분야">
                <Kind kinds={kinds} addKind={addKind} />
            </Form.Item>
            <Form.Item label="카테고리">
                <Category isContestWork={isContestWork} toggleIsContestWork={toggleIsContestWork} />
            </Form.Item>
            <Form.Item label="썸네일">
                <Thumbnail
                    thumbnail={thumbnail}
                    addThumbnailFile={addThumbnailFile}
                    removeThumbnailFile={removeThumbnailFile}
                />
            </Form.Item>
            <Form.Item label="파일">
                <File imageFiles={imageFiles} addImageFile={addImageFile} removeImageFile={removeImageFile} />
            </Form.Item>
            <Form.Item
                label="영상"
                tooltip={{
                    title: '유튜브 영상의 링크를 작성해주세요.',
                    icon: <InfoCircleOutlined />,
                }}>
                <TextField
                    state={youtubeURLs}
                    setState={addYoutubeURL}
                    kind="video"
                    placeholder="링크1 링크2 링크3"
                />
            </Form.Item>
            <Form.Item label="내용">
                <Content content={content} changeContent={changeContent} />
            </Form.Item>
        </Form>
    );
};

export default React.memo(Input);

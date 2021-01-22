import React, { useState } from 'react';
import { Form } from 'antd';

import Participant from './Participant';
import Club from './Club';
import Kind from './Kind';
import Category from './Category';
import File from './File';
import Video from './Video';
import Content from './Content';

import './Input.scss';
import { InfoCircleOutlined } from '@ant-design/icons';

const Input = ({
    participants,
    clubs,
    kinds,
    isContestWork,
    content,
    imageFiles,
    youtubeURLs,
    toggleIsContestWork,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    changeContent,
    addParticipant,
    addYoutubeURL,
}) => {
    return (
        <Form layout="vertical" className="Input">
            <Form.Item label="참여자">
                <Participant participants={participants} addParticipant={addParticipant} />
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
            <Form.Item label="파일">
                <File imageFiles={imageFiles} addImageFile={addImageFile} removeImageFile={removeImageFile} />
            </Form.Item>
            <Form.Item
                label="영상"
                tooltip={{
                    title: '유튜브 영상의 링크를 작성해주세요.',
                    icon: <InfoCircleOutlined />,
                }}>
                <Video youtubeURLs={youtubeURLs} addYoutubeURL={addYoutubeURL} />
            </Form.Item>
            <Form.Item label="내용">
                <Content content={content} changeContent={changeContent} />
            </Form.Item>
        </Form>
    );
};

export default React.memo(Input);

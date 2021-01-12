import React, { useState } from 'react';
import { Form, Modal, Upload, Radio, Checkbox, Input, Button, message, Space } from 'antd';

import { formValidation } from '../../../utils/lib/validationCheck';

import {
    InfoCircleOutlined,
    UserOutlined,
    InboxOutlined,
    PlusOutlined,
    MinusCircleOutlined,
} from '@ant-design/icons';

import './Input.scss';

const Inputs = ({
    imageFiles,
    toggleIsContestWork,
    addParticipant,
    addClub,
    addKind,
    addImageFile,
    removeImageFile,
    changeContent,
}) => {
    const [participant, setParticipant] = useState('');
    const [club, setClub] = useState('');

    const { Dragger } = Upload;

    const plainOptions = ['iot', 'web', 'app', 'security', 'ai', 'algorithm', 'network'];
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
    const handleChange = (newState, setState) => setState(newState);
    const handleClick = () => {
        if (formValidation({ participant, club })) {
            addParticipant(participant);
            addClub(club);
            setParticipant('');
            setClub('');
        } else {
            Modal.warning({
                title: '모든 양식을 채줘주세요.',
                content: '참여자, 소속 칸을 채워주세요.',
            });
        }
    };

    return (
        <Form layout="vertical" className="Input">
            <Form.Item label="참여자" rules={[{ required: true, message: 'Please input your username!' }]}>
                <Input
                    placeholder="김선린, 이선린, 박선린..."
                    value={participant}
                    onChange={(e) => handleChange(e.target.value, setParticipant)}
                    prefix={<UserOutlined className="site-form-item-icon" />}
                />
            </Form.Item>
            <Form.Item label="소속">
                <Radio.Group
                    size="large"
                    value={club}
                    onChange={(e) => handleChange(e.target.value, setClub)}>
                    <Radio.Button value="Layer7">Layer7</Radio.Button>
                    <Radio.Button value="Unifox">Unifox</Radio.Button>
                    <Radio.Button value="Nefus">Nefus</Radio.Button>
                    <Radio.Button value="TeamLog">TeamLog</Radio.Button>
                    <Radio.Button value="Emotion">Emotion</Radio.Button>
                </Radio.Group>
            </Form.Item>
            <Form.Item label="분야">
                <Checkbox.Group options={plainOptions} onChange={(checkValues) => addKind(checkValues)} />
            </Form.Item>
            <Form.Item label="카테고리">
                <Radio.Group onChange={(e) => toggleIsContestWork(e.target.value)}>
                    <Radio value={true}>대회 실적</Radio>
                    <Radio value={false}>개인 프로젝트</Radio>
                </Radio.Group>
            </Form.Item>
            <Form.Item
                label="사진"
                tooltip={{
                    title: '첨부 형식: jpg, jpeg, png',
                    icon: <InfoCircleOutlined />,
                }}>
                <Dragger {...props} accept="image/png, image/jpg, image/jpeg" multiple>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">클릭하거나 파일을 여기로 드래그하세요.</p>
                    <p className="ant-upload-hint">
                        첨부 형식은 jpg, jpeg, png이며, 첨부 용량은 개당 최대 10MB까지 허용합니다.
                    </p>
                </Dragger>
            </Form.Item>
            <Form.List name="users">
                {(fields, { add, remove }) => (
                    <>
                        {fields.map((field) => (
                            <Space key={field.key} style={{ display: 'flex' }} align="baseline">
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'first']}
                                    fieldKey={[field.fieldKey, 'first']}
                                    rules={[{ required: true, message: 'Missing first name' }]}>
                                    <Input placeholder="https://www.youtube.com/..." />
                                </Form.Item>
                                <MinusCircleOutlined onClick={() => remove(field.name)} />
                            </Space>
                        ))}
                        <Form.Item>
                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                Add field
                            </Button>
                        </Form.Item>
                    </>
                )}
            </Form.List>
            <Form.Item label="내용">
                <Input.TextArea
                    autoSize={{ minRows: 8, maxRows: 10 }}
                    onChange={(e) => changeContent(e.target.value)}
                    allowClear={true}
                />
            </Form.Item>
        </Form>
    );
};

export default Inputs;

import React, { useEffect } from "react";
import { Form } from "antd";

import Header from "../../Header/Header";
import NoticeSubmit from "../Submit/NoticeSubmit";
import TextField from "../Input/TextField";
import Content from "../Input/Content";
import File from "../Input/File";
import history from "../../../utils/lib/history";
import validationToken from "../../../utils/lib/validationToken";

import "./UploadNotice.scss";
import { InfoCircleOutlined } from "@ant-design/icons";

const UploadNotice = ({
  title,
  content,
  imageFiles,
  youtubeURLs,
  uploadNoticeStatus,
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
    if (!localStorage.getItem("accessToken")) history.push("/");
    validationToken();
  }, []);

  return (
    <div className="UploadNotice">
      <Header />
      <div>
        <Form layout="vertical" className="Input">
          <Form.Item label="제목">
            <TextField
              state={title}
              setState={changeTitle}
              kind="title"
              placeholder="제목을 입력해주세요."
            />
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
              title: "유튜브 영상의 링크를 작성해주세요.",
              icon: <InfoCircleOutlined />,
            }}
          >
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
        <NoticeSubmit
          submitData={submitData}
          youtubeURLs={youtubeURLs}
          fetchStatus={uploadNoticeStatus}
          fetchArticle={uploadNotice}
        />
      </div>
    </div>
  );
};

export default UploadNotice;

import React from "react";
import { connect } from "react-redux";
import EditNotice from "../components/Form/Edit/EditNotice";
import {
  readAnNoticeAsync,
  updateNoticeAsync,
  changeTitle,
  changeContent,
  addImageFile,
  removeImageFile,
  removeUploadedImageFile,
  addYoutubeURL,
} from "../store/actions/manageNoticeAction";

const EditNoticeContainer = ({
  match,
  id,
  uploadedFiles,
  files,
  youtubeURLs,
  title,
  content,
  updateNoticeStatus,
  readAnNoticeAsync,
  updateNoticeAsync,
  addImageFile,
  removeImageFile,
  removeUploadedImageFile,
  addYoutubeURL,
  changeTitle,
  changeContent,
}) => {
  return (
    <EditNotice
      match={match}
      id={id}
      uploadedFiles={uploadedFiles}
      files={files}
      youtubeURLs={youtubeURLs}
      title={title}
      content={content}
      updateNoticeStatus={updateNoticeStatus}
      readAnNotice={readAnNoticeAsync}
      updateNotice={updateNoticeAsync}
      addImageFile={addImageFile}
      removeImageFile={removeImageFile}
      removeUploadedImageFile={removeUploadedImageFile}
      addYoutubeURL={addYoutubeURL}
      changeTitle={changeTitle}
      changeContent={changeContent}
    />
  );
};

export default connect(
  // mapStateToProps
  ({ manageNotice }) => ({
    id: manageNotice.id,
    title: manageNotice.title,
    content: manageNotice.content,
    uploadedFiles: manageNotice.uploadedFiles,
    files: manageNotice.files,
    youtubeURLs: manageNotice.youtubeURLs,
    updateNoticeStatus: manageNotice.updateNotice,
  }),
  // mapDispatchToProps
  {
    readAnNoticeAsync,
    updateNoticeAsync,
    changeTitle,
    changeContent,
    addImageFile,
    removeImageFile,
    removeUploadedImageFile,
    addYoutubeURL,
  }
)(EditNoticeContainer);

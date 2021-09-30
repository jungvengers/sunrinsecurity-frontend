import React, { useState } from "react";
import { Modal, Button } from "antd";

import { formValidation } from "../../../utils/lib/validationCheck";
import { splitYoutubeURLs } from "../../../utils/lib/splitString";

import "./Submit.scss";

const NoticeSubmit = ({
  submitData,
  youtubeURLs,
  fetchStatus,
  fetchArticle,
}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClose = () => setIsModalVisible(false);
  const handleCancel = () => (document.location.pathname = "/notice");
  const handleSave = async () => {
    submitData.youtubeURLs = splitYoutubeURLs(youtubeURLs);
    const [result, missingFieldName] = formValidation(submitData, [
      "title",
      "content",
    ]);
    if (result) {
      fetchArticle(submitData);
    } else {
      Modal.warning({
        title: "모든 양식을 채워주세요.",
        content: `${missingFieldName} 칸을(를) 채워주세요.`,
      });
    }
  };
  console.log(fetchStatus);
  return (
    <div className="Submit">
      <Modal
        title="양식 미작성"
        visible={isModalVisible}
        onOk={handleClose}
        onCancel={handleClose}
      >
        <p>모든 양식을 채워주세요.</p>
      </Modal>
      <Button type="primary" onClick={handleCancel} danger>
        취소
      </Button>
      <Button type="primary" loading={fetchStatus.loading} onClick={handleSave}>
        저장
      </Button>
    </div>
  );
};

export default React.memo(NoticeSubmit);

import React from 'react';
import { connect } from 'react-redux';
import NoticeItem from '../components/Main/Content/NoticeItem';
import { readAnNoticeAsync } from '../store/actions/noticeAction';

const NoticeContainer = ({
    match,
    title,
    content,
    files,
    youtubeURLs,
    createdAt,
    updatedAt,
    writer,
    readAnNotice,
    readAnNoticeAsync,
}) => {
    return (
        <NoticeItem
            match={match}
            title={title}
            content={content}
            files={files}
            youtubeURLs={youtubeURLs}
            createdAt={createdAt}
            updatedAt={updatedAt}
            writer={writer}
            readingStatus={readAnNotice}
            readAnNotice={readAnNoticeAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ notice }) => ({
        title: notice.title,
        content: notice.content,
        files: notice.files,
        youtubeURLs: notice.youtubeURLs,
        createdAt: notice.createdAt,
        updatedAt: notice.updatedAt,
        writer: notice.writer,
        readAnNotice: notice.readAnNotice,
    }),
    // mapDispatchToProps
    { readAnNoticeAsync }
)(NoticeContainer);

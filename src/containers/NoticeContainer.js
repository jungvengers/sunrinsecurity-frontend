import React from 'react';
import { connect } from 'react-redux';
import Notice from '../components/Notice/Notice';
import { readListNoticeAsync } from '../store/actions/noticeAction';

const NoticeContainer = ({ notices, readListNotice, readListNoticeAsync }) => {
    return <Notice notices={notices} readingStatus={readListNotice} readListNotice={readListNoticeAsync} />;
};

export default connect(
    // mapStateToProps
    ({ notice }) => ({
        notices: notice.notices,
        readListNotice: notice.readListNotice,
    }),
    // mapDispatchToProps
    { readListNoticeAsync }
)(NoticeContainer);

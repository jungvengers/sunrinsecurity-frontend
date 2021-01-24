import React from 'react';
import { connect } from 'react-redux';
import Notice from '../components/Main/Notice';
import { readNoticeAsync, readMoreNoticeAsync } from '../store/actions/noticeAction';

const NoticeContainer = ({ notices, readNotice, readNoticeAsync, readMoreNoticeAsync }) => {
    return (
        <Notice
            notices={notices}
            readingStatus={readNotice}
            readNotice={readNoticeAsync}
            readMoreNotice={readMoreNoticeAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ notice }) => ({
        notices: notice.notices,
        readNotice: notice.readNotice,
    }),
    // mapDispatchToProps
    { readNoticeAsync, readMoreNoticeAsync }
)(NoticeContainer);

import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home/Home';
import { readListNoticeAsync } from '../store/actions/noticeAction';

const HomeContainer = ({ notices, readListNotice, readListNoticeAsync }) => {
    return <Home notices={notices} readingStatus={readListNotice} readListNotice={readListNoticeAsync} />;
};

export default connect(
    // mapStateToProps
    ({ notice }) => ({
        notices: notice.notices,
        readListNotice: notice.readListNotice,
    }),
    // mapDispatchToProps
    { readListNoticeAsync }
)(HomeContainer);

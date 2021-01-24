import React from 'react';
import { connect } from 'react-redux';
import ManageNotice from '../components/Manage/ManageNotice';
import { readListNoticeAsync, deleteNoticeAsync } from '../store/actions/manageNoticeAction';

const ManageNoticeContainer = ({ notices, readListNotice, readListNoticeAsync, deleteNoticeAsync }) => {
    return (
        <ManageNotice
            notices={notices}
            readingStatus={readListNotice}
            readListNotice={readListNoticeAsync}
            deleteNotice={deleteNoticeAsync}
        />
    );
};

export default connect(
    // mapStateToProps
    ({ manageNotice }) => ({
        notices: manageNotice.notices,
        readListNotice: manageNotice.readListNotice,
    }),
    // mapDispatchToProps
    { readListNoticeAsync, deleteNoticeAsync }
)(ManageNoticeContainer);

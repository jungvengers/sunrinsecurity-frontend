import { createAction } from 'redux-actions';

export const INIT_NOTICE = 'notice/INIT_NOTICE';
export const ADD_NOTICE = 'notice/ADD_NOTICE';
export const REMOVE_NOTICE = 'notice/REMOVE_NOTICE';

export const READ_NOTICE_LOADING = 'notice/READ_NOTICE_LOADING';
export const READ_NOTICE_SUCCESS = 'notice/READ_NOTICE_SUCCESS';
export const READ_NOTICE_ERROR = 'notice/READ_NOTICE_ERROR';

export const READ_MORE_NOTICE_LOADING = 'notice/READ_MORE_NOTICE_LOADING';
export const READ_MORE_NOTICE_SUCCESS = 'notice/READ_MORE_NOTICE_SUCCESS';
export const READ_MORE_NOTICE_ERROR = 'notice/READ_MORE_NOTICE_ERROR';

export const readNoticeAsync = createAction(READ_NOTICE_LOADING, (input) => input);
export const readMoreNoticeAsync = createAction(READ_MORE_NOTICE_LOADING, (input) => input);

import { createAction } from 'redux-actions';

export const READ_LIST_NOTICE_LOADING = 'notice/READ_LIST_NOTICE_LOADING';
export const READ_LIST_NOTICE_SUCCESS = 'notice/READ_LIST_NOTICE_SUCCESS';
export const READ_LIST_NOTICE_ERROR = 'notice/READ_LIST_NOTICE_ERROR';

export const READ_AN_NOTICE_LOADING = 'notice/READ_AN_NOTICE_LOADING';
export const READ_AN_NOTICE_SUCCESS = 'notice/READ_AN_NOTICE_SUCCESS';
export const READ_AN_NOTICE_ERROR = 'notice/READ_AN_NOTICE_ERROR';

export const INIT_NOTICE = 'notice/INIT_NOTICE';

export const readListNoticeAsync = createAction(READ_LIST_NOTICE_LOADING, (input) => input);
export const readAnNoticeAsync = createAction(READ_AN_NOTICE_LOADING, (input) => input);

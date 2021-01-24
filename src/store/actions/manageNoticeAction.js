import { createAction } from 'redux-actions';

export const INIT_NOTICE = 'manage/INIT_NOTICE';
export const REMOVE_NOTICE = 'manage/REMOVE_NOTICE';

export const READ_LIST_NOTICE_LOADING = 'manage/READ_LIST_NOTICE_LOADING';
export const READ_LIST_NOTICE_SUCCESS = 'manage/READ_LIST_NOTICE_SUCCESS';
export const READ_LIST_NOTICE_ERROR = 'manage/READ_LIST_NOTICE_ERROR';

export const READ_AN_NOTICE_LOADING = 'manage/READ_AN_NOTICE_LOADING';
export const READ_AN_NOTICE_SUCCESS = 'manage/READ_AN_NOTICE_SUCCESS';
export const READ_AN_NOTICE_ERROR = 'manage/READ_AN_NOTICE_ERROR';

export const UPDATE_NOTICE_LOADING = 'manage/UPDATE_NOTICE_LOADING';
export const UPDATE_NOTICE_SUCCESS = 'manage/UPDATE_NOTICE_SUCCESS';
export const UPDATE_NOTICE_ERROR = 'manage/UPDATE_NOTICE_ERROR';

export const DELETE_NOTICE_LOADING = 'manage/DELETE_NOTICE_LOADING';
export const DELETE_NOTICE_SUCCESS = 'manage/DELETE_NOTICE_SUCCES';
export const DELETE_NOTICE_ERROR = 'manage/DELETE_NOTICE_ERROR';

//TODO 액션 이름 업데이트
export const CHANGE_TITLE = 'manage/CHANGE_TITLE';
export const ADD_IMAGE_FILE = 'manage/ADD_IMAGE_FILE';
export const REMOVE_IMAGE_FILE = 'manage/REMOVE_IMAGE_FILE';
export const REMOVE_UPLOADED_IMAGE_FILE = 'manage/REMOVE_UPLOADED_IMAGE_FILE';
export const ADD_YOUTUBE_URLS = 'manage/YOUTUBE_URLS';
export const CHANGE_CONTENT = 'manage/CHANGE_CONTENT';

export const readListNoticeAsync = createAction(READ_LIST_NOTICE_LOADING, (input) => input);
export const readAnNoticeAsync = createAction(READ_AN_NOTICE_LOADING, (input) => input);
export const deleteNoticeAsync = createAction(DELETE_NOTICE_LOADING, (input) => input);
export const updateNoticeAsync = createAction(UPDATE_NOTICE_LOADING, (input) => input);
export const changeTitle = createAction(CHANGE_TITLE, (input) => input);
export const addImageFile = createAction(ADD_IMAGE_FILE, (input) => input);
export const removeImageFile = createAction(REMOVE_IMAGE_FILE, (input) => input);
export const removeUploadedImageFile = createAction(REMOVE_UPLOADED_IMAGE_FILE, (input) => input);
export const addYoutubeURL = createAction(ADD_YOUTUBE_URLS, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);

import { createAction } from 'redux-actions';

export const UPLOAD_ARTICLE_LOADING = 'upload/UPLOAD_ARTICLE_LOADING';
export const UPLOAD_ARTICLE_SUCCESS = 'upload/UPLOAD_ARTICLE_SUCCESS';
export const UPLOAD_ARTICLE_ERROR = 'upload/UPLOAD_ARTICLE_ERROR';

export const UPLOAD_NOTICE_LOADING = 'upload/UPLOAD_NOTICE_LOADING';
export const UPLOAD_NOTICE_SUCCESS = 'upload/UPLOAD_NOTICE_SUCCESS';
export const UPLOAD_NOTICE_ERROR = 'upload/UPLOAD_NOTICE_ERROR';

export const CHANGE_TITLE = 'upload/CHANGE_TITLE';
export const ADD_PARTICIPANT = 'upload/ADD_PARTICIPANT';
export const ADD_CLUB = 'upload/ADD_CLUB';
export const ADD_KIND = 'upload/ADD_KIND';
export const TOGGLE_IS_CONTEST_WORK = 'upload/TOGGLE_CATEGORY';
export const ADD_IMAGE_FILE = 'upload/ADD_IMAGE_FILE';
export const REMOVE_IMAGE_FILE = 'upload/REMOVE_IMAGE_FILE';
export const ADD_IMAGE_NAME = 'upload/ADD_IMAGE_NAME';
export const ADD_YOUTUBE_URLS = 'upload/YOUTUBE_URLS';
export const CHANGE_CONTENT = 'upload/CHANGE_CONTENT';

export const uploadArticleAsync = createAction(UPLOAD_ARTICLE_LOADING, (input) => input);
export const uploadNoticeAsync = createAction(UPLOAD_NOTICE_LOADING, (input) => input);
export const changeTitle = createAction(CHANGE_TITLE, (input) => input);
export const addParticipant = createAction(ADD_PARTICIPANT, (input) => input);
export const addClub = createAction(ADD_CLUB, (input) => input);
export const addKind = createAction(ADD_KIND, (input) => input);
export const toggleIsContestWork = createAction(TOGGLE_IS_CONTEST_WORK, (input) => input);
export const addImageFile = createAction(ADD_IMAGE_FILE, (input) => input);
export const removeImageFile = createAction(REMOVE_IMAGE_FILE, (input) => input);
export const addYoutubeURL = createAction(ADD_YOUTUBE_URLS, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);

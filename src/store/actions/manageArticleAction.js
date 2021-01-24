import { createAction } from 'redux-actions';

export const INIT_ARTICLE = 'manage/INIT_ARTICLE';
export const REMOVE_ARTICLE = 'manage/REMOVE_ARTICLE';

export const READ_LIST_ARTICLE_LOADING = 'manage/READ_LIST_ARTICLE_LOADING';
export const READ_LIST_ARTICLE_SUCCESS = 'manage/READ_LIST_ARTICLE_SUCCESS';
export const READ_LIST_ARTICLE_ERROR = 'manage/READ_LIST_ARTICLE_ERROR';

export const READ_AN_ARTICLE_LOADING = 'manage/READ_AN_ARTICLE_LOADING';
export const READ_AN_ARTICLE_SUCCESS = 'manage/READ_AN_ARTICLE_SUCCESS';
export const READ_AN_ARTICLE_ERROR = 'manage/READ_AN_ARTICLE_ERROR';

export const UPDATE_ARTICLE_LOADING = 'manage/UPDATE_ARTICLE_LOADING';
export const UPDATE_ARTICLE_SUCCESS = 'manage/UPDATE_ARTICLE_SUCCESS';
export const UPDATE_ARTICLE_ERROR = 'manage/UPDATE_ARTICLE_ERROR';

export const DELETE_ARTICLE_LOADING = 'manage/DELETE_ARTICLE_LOADING';
export const DELETE_ARTICLE_SUCCESS = 'manage/DELETE_ARTICLE_SUCCES';
export const DELETE_ARTICLE_ERROR = 'manage/DELETE_ARTICLE_ERROR';

//TODO 액션 이름 업데이트
export const ADD_PARTICIPANT = 'manage/ADD_PARTICIPANT';
export const ADD_CLUB = 'manage/ADD_CLUB';
export const ADD_KIND = 'manage/ADD_KIND';
export const TOGGLE_IS_CONTEST_WORK = 'manage/TOGGLE_CATEGORY';
export const ADD_IMAGE_FILE = 'manage/ADD_IMAGE_FILE';
export const REMOVE_IMAGE_FILE = 'manage/REMOVE_IMAGE_FILE';
export const REMOVE_UPLOADED_IMAGE_FILE = 'manage/REMOVE_UPLOADED_IMAGE_FILE';
export const ADD_YOUTUBE_URLS = 'manage/YOUTUBE_URLS';
export const CHANGE_CONTENT = 'manage/CHANGE_CONTENT';

export const readListArticleAsync = createAction(READ_LIST_ARTICLE_LOADING, (input) => input);
export const readAnArticleAsync = createAction(READ_AN_ARTICLE_LOADING, (input) => input);
export const deleteArticleAsync = createAction(DELETE_ARTICLE_LOADING, (input) => input);
export const updateArticleAsync = createAction(UPDATE_ARTICLE_LOADING, (input) => input);
export const addParticipant = createAction(ADD_PARTICIPANT, (input) => input);
export const addClub = createAction(ADD_CLUB, (input) => input);
export const addKind = createAction(ADD_KIND, (input) => input);
export const toggleIsContestWork = createAction(TOGGLE_IS_CONTEST_WORK, (input) => input);
export const addImageFile = createAction(ADD_IMAGE_FILE, (input) => input);
export const removeImageFile = createAction(REMOVE_IMAGE_FILE, (input) => input);
export const removeUploadedImageFile = createAction(REMOVE_UPLOADED_IMAGE_FILE, (input) => input);
export const addYoutubeURL = createAction(ADD_YOUTUBE_URLS, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);

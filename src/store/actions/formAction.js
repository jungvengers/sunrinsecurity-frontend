import { createAction } from 'redux-actions';

export const UPLOAD_ARTICLE_LOADING = 'article/UPLOAD_ARTICLE_LOADING';
export const UPLOAD_ARTICLE_SUCCESS = 'article/UPLOAD_ARTICLE_SUCCESS';
export const UPLOAD_ARTICLE_ERROR = 'article/UPLOAD_ARTICLE_ERROR';

export const TOGGLE_IS_CONTEST_WORK = 'form/TOGGLE_CATEGORY';
export const ADD_PARTICIPANT = 'form/ADD_PARTICIPANT';
export const ADD_CLUB = 'form/ADD_CLUB';
export const ADD_KIND = 'form/ADD_KIND';
export const ADD_IMAGE_FILE = 'form/ADD_IMAGE_FILE';
export const ADD_IMAGE_NAME = 'form/ADD_IMAGE_NAME';
export const CHANGE_CONTENT = 'form/CHANGE_CONTENT';

export const uploadArticleAsync = createAction(UPLOAD_ARTICLE_LOADING, (input) => input);
export const toggleIsContestWork = createAction(TOGGLE_IS_CONTEST_WORK, (input) => input);
export const addParticipant = createAction(ADD_PARTICIPANT, (input) => input);
export const addClub = createAction(ADD_CLUB, (input) => input);
export const addKind = createAction(ADD_KIND, (input) => input);
export const addImageFile = createAction(ADD_IMAGE_FILE, (input) => input);
export const changeContent = createAction(CHANGE_CONTENT, (input) => input);

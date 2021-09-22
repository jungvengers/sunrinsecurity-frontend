import { handleActions } from 'redux-actions';

import * as actions from '../actions/uploadAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    title: '',
    participants: [],
    clubs: [],
    kinds: [],
    isContestWork: null,
    imageFiles: [],
    thumbnail: null,
    youtubeURLs: [],
    content: '',
    uploadArticle: reducerUtils.initial(),
};

const form = handleActions(
    {
        [actions.CHANGE_TITLE]: (state, action) => ({
            ...state,
            title: action.payload,
        }),
        [actions.ADD_PARTICIPANT]: (state, action) => ({
            ...state,
            participants: action.payload,
        }),
        [actions.ADD_CLUB]: (state, action) => ({
            ...state,
            clubs: action.payload,
        }),
        [actions.ADD_KIND]: (state, action) => ({
            ...state,
            kinds: action.payload,
        }),
        [actions.TOGGLE_IS_CONTEST_WORK]: (state, action) => ({
            ...state,
            isContestWork: action.payload,
        }),
        [actions.ADD_IMAGE_FILE]: (state, action) => ({
            ...state,
            imageFiles: state.imageFiles.concat(action.payload),
        }),
        [actions.REMOVE_IMAGE_FILE]: (state, action) => ({
            ...state,
            imageFiles: state.imageFiles.filter((imageFile) => imageFile.name !== action.payload.name),
        }),
        [actions.ADD_THUMBNAIL_FILE]: (state, action) => ({
            ...state,
            thumbnail: action.payload,
        }),
        [actions.REMOVE_THUMBNAIL_FILE]: (state, action) => ({
            ...state,
            thumbnail: null,
        }),
        [actions.ADD_YOUTUBE_URLS]: (state, action) => ({
            ...state,
            youtubeURLs: action.payload,
        }),
        [actions.CHANGE_CONTENT]: (state, action) => ({
            ...state,
            content: action.payload,
        }),
        // 글 업로드
        [actions.UPLOAD_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            uploadArticle: reducerUtils.loading(),
        }),
        [actions.UPLOAD_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            uploadArticle: reducerUtils.success(action.payload),
        }),
        [actions.UPLOAD_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            uploadArticle: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default form;

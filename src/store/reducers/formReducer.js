import { handleActions } from 'redux-actions';

import * as actions from '../actions/formAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    isContestWork: null,
    participants: [],
    clubs: [],
    kinds: [],
    content: '',
    imageFiles: [],
    uploadArticle: reducerUtils.initial(),
};

const form = handleActions(
    {
        [actions.TOGGLE_IS_CONTEST_WORK]: (state, action) => ({ ...state, isContestWork: action.payload }),
        [actions.ADD_PARTICIPANT]: (state, action) => ({
            ...state,
            participants: state.participants.concat(action.payload),
        }),
        [actions.ADD_CLUB]: (state, action) => ({
            ...state,
            clubs: state.clubs.concat(action.payload),
        }),
        [actions.ADD_KIND]: (state, action) => ({
            ...state,
            kinds: action.payload,
        }),
        [actions.ADD_IMAGE_FILE]: (state, action) => ({
            ...state,
            imageFiles: state.imageFiles.concat(action.payload),
        }),
        [actions.REMOVE_IMAGE_FILE]: (state, action) => ({
            ...state,
            imageFiles: state.imageFiles.filter((imageFile) => imageFile.name != action.payload.name),
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

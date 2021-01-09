import { handleActions } from 'redux-actions';

import * as actions from '../actions/articleAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    articles: [],
    readArticle: reducerUtils.initial(),
    deleteArticle: reducerUtils.initial(),
};

const article = handleActions(
    {
        [actions.INIT_ARTICLE]: (state, action) => ({
            ...state,
            articles: action.payload,
        }),
        [actions.ADD_ARTICLE]: (state, action) => ({
            ...state,
            articles: state.articles.concat(action.payload),
        }),
        [actions.REMOVE_ARTICLE]: (state, action) => ({
            ...state,
            articles: state.articles.filter((article) => article._id != action.payload),
        }),
        // 글 조회
        [actions.READ_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            readArticle: reducerUtils.loading(),
        }),
        [actions.READ_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            readArticle: reducerUtils.success(action.payload),
        }),
        [actions.READ_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            readArticle: reducerUtils.error(action.payload),
        }),
        // 글 수정
        [actions.UPDATE_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            updateArticle: reducerUtils.loading(),
        }),
        [actions.UPDATE_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            updateArticle: reducerUtils.success(action.payload),
        }),
        [actions.UPDATE_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            updateArticle: reducerUtils.error(action.payload),
        }),
        // 글 삭제
        [actions.DELETE_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            deleteArticle: reducerUtils.loading(),
        }),
        [actions.DELETE_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            deleteArticle: reducerUtils.success(action.payload),
        }),
        [actions.DELETE_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            deleteArticle: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default article;

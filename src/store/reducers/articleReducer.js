import { handleActions } from 'redux-actions';

import * as actions from '../actions/articleAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    title: '',
    articles: [],
    content: '',
    files: [],
    youtubeURLs: [],
    participants: [],
    clubs: [],
    kinds: [],
    readArticle: reducerUtils.initial(),
    readAnArticle: reducerUtils.initial(),
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
            articles: state.articles.filter((article) => article._id !== action.payload),
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
        // 글 단일 조회
        [actions.READ_AN_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            readAnArticle: reducerUtils.loading(),
        }),
        [actions.READ_AN_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            title: action.payload.title,
            content: action.payload.content,
            files: action.payload.images,
            youtubeURLs: action.payload.youtubeURLs,
            participants: action.payload.participants,
            clubs: action.payload.clubs,
            kinds: action.payload.kinds,
            readAnArticle: reducerUtils.success(action.payload),
        }),
        [actions.READ_AN_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            readAnArticle: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default article;

import { handleActions } from 'redux-actions';

import * as actions from '../actions/manageAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    articles: [],
    id: '',
    participants: '',
    clubs: [],
    kinds: [],
    isContestWork: null,
    content: '',
    uploadedFiles: [],
    files: [],
    youtubeURLs: '',
    readListArticle: reducerUtils.initial(),
    readAnArticle: reducerUtils.initial(),
    deleteArticle: reducerUtils.initial(),
    updateArticle: reducerUtils.initial(),
};

const manage = handleActions(
    {
        [actions.INIT_ARTICLE]: (state, action) => ({
            ...state,
            articles: action.payload,
        }),
        [actions.REMOVE_ARTICLE]: (state, action) => ({
            ...state,
            articles: state.articles.filter((article) => article._id != action.payload),
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
            files: state.files.concat(action.payload),
        }),
        [actions.REMOVE_IMAGE_FILE]: (state, action) => ({
            ...state,
            files: state.files.filter((file) => file.name !== action.payload.name),
        }),
        [actions.REMOVE_UPLOADED_IMAGE_FILE]: (state, action) => ({
            ...state,
            uploadedFiles: state.uploadedFiles.filter((file) => file !== action.payload),
        }),
        [actions.ADD_YOUTUBE_URLS]: (state, action) => ({
            ...state,
            youtubeURLs: action.payload,
        }),
        [actions.CHANGE_CONTENT]: (state, action) => ({
            ...state,
            content: action.payload,
        }),
        // 글 복수 조회
        [actions.READ_LIST_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            readListArticle: reducerUtils.loading(),
        }),
        [actions.READ_LIST_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            readListArticle: reducerUtils.success(action.payload),
        }),
        [actions.READ_LIST_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            readListArticle: reducerUtils.error(action.payload),
        }),
        // 글 단일 로드
        [actions.READ_AN_ARTICLE_LOADING]: (state, action) => ({
            ...state,
            readAnArticle: reducerUtils.loading(),
        }),
        [actions.READ_AN_ARTICLE_SUCCESS]: (state, action) => ({
            ...state,
            id: action.payload._id,
            participants: action.payload.participants.join().replaceAll(',', ' '),
            clubs: action.payload.clubs,
            kinds: action.payload.kinds,
            isContestWork: action.payload.isContestWork,
            content: action.payload.content,
            uploadedFiles: action.payload.images,
            youtubeURLs: action.payload.youtubeURLs
                .map((i, idx) => (action.payload.youtubeURLs[idx] = 'https://www.youtube.com/watch?v=' + i))
                .join()
                .replaceAll(',', ' '),
            readAnArticle: reducerUtils.success(action.payload),
        }),
        [actions.READ_AN_ARTICLE_ERROR]: (state, action) => ({
            ...state,
            readAnArticle: reducerUtils.error(action.payload),
        }),
        // 글 업데이트
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

export default manage;

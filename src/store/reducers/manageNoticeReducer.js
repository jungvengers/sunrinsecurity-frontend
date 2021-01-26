import { handleActions } from 'redux-actions';

import * as actions from '../actions/manageNoticeAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    notices: [],
    id: '',
    title: '',
    content: '',
    uploadedFiles: [],
    files: [],
    youtubeURLs: '',
    readListNotice: reducerUtils.initial(),
    readAnNotice: reducerUtils.initial(),
    deleteNotice: reducerUtils.initial(),
    updateNotice: reducerUtils.initial(),
};

const manageNotice = handleActions(
    {
        [actions.INIT_NOTICE]: (state, action) => ({
            ...state,
            notices: action.payload,
        }),
        [actions.REMOVE_NOTICE]: (state, action) => ({
            ...state,
            notices: state.notices.filter((article) => article._id !== action.payload),
        }),
        [actions.CHANGE_TITLE]: (state, action) => ({
            ...state,
            title: action.payload,
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
        [actions.READ_LIST_NOTICE_LOADING]: (state, action) => ({
            ...state,
            readListNotice: reducerUtils.loading(),
        }),
        [actions.READ_LIST_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            readListNotice: reducerUtils.success(action.payload),
        }),
        [actions.READ_LIST_NOTICE_ERROR]: (state, action) => ({
            ...state,
            readListNotice: reducerUtils.error(action.payload),
        }),
        // 글 단일 조회
        [actions.READ_AN_NOTICE_LOADING]: (state, action) => ({
            ...state,
            readAnNotice: reducerUtils.loading(),
        }),
        [actions.READ_AN_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            id: action.payload._id,
            title: action.payload.title,
            content: action.payload.content,
            uploadedFiles: action.payload.images,
            youtubeURLs: action.payload.youtubeURLs
                .map((i, idx) => (action.payload.youtubeURLs[idx] = 'https://www.youtube.com/watch?v=' + i))
                .join()
                .replaceAll(',', ' '),
            readAnNotice: reducerUtils.success(action.payload),
        }),
        [actions.READ_AN_NOTICE_ERROR]: (state, action) => ({
            ...state,
            readAnNotice: reducerUtils.error(action.payload),
        }),
        // 글 업데이트
        [actions.UPDATE_NOTICE_LOADING]: (state, action) => ({
            ...state,
            updateNotice: reducerUtils.loading(),
        }),
        [actions.UPDATE_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            updateNotice: reducerUtils.success(action.payload),
        }),
        [actions.UPDATE_NOTICE_ERROR]: (state, action) => ({
            ...state,
            updateNotice: reducerUtils.error(action.payload),
        }),
        // 글 삭제
        [actions.DELETE_NOTICE_LOADING]: (state, action) => ({
            ...state,
            deleteNotice: reducerUtils.loading(),
        }),
        [actions.DELETE_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            deleteNotice: reducerUtils.success(action.payload),
        }),
        [actions.DELETE_NOTICE_ERROR]: (state, action) => ({
            ...state,
            deleteNotice: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default manageNotice;

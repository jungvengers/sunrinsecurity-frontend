import { handleActions } from 'redux-actions';

import * as actions from '../actions/noticeAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    notices: [],
    title: '',
    content: '',
    files: [],
    youtubeURLs: [],
    createdAt: '',
    updatedAt: '',
    writer: '',
    readListNotice: reducerUtils.initial(),
    readAnNotice: reducerUtils.initial(),
};

const notice = handleActions(
    {
        [actions.INIT_NOTICE]: (state, action) => ({
            ...state,
            notices: action.payload,
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
            title: action.payload.title,
            content: action.payload.content,
            files: action.payload.images,
            youtubeURLs: action.payload.youtubeURLs,
            createdAt: action.payload.createdAt,
            updatedAt: action.payload.updatedAt,
            writer: action.payload.writer,
            readAnNotice: reducerUtils.success(action.payload),
        }),
        [actions.READ_AN_NOTICE_ERROR]: (state, action) => ({
            ...state,
            readAnNotice: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default notice;

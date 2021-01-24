import { handleActions } from 'redux-actions';

import * as actions from '../actions/noticeAction';
import { reducerUtils } from '../../utils/lib/asyncUtils';

const initialState = {
    notices: [],
    readNotice: reducerUtils.initial(),
};

const notice = handleActions(
    {
        [actions.INIT_NOTICE]: (state, action) => ({
            ...state,
            notices: action.payload,
        }),
        [actions.ADD_NOTICE]: (state, action) => ({
            ...state,
            notices: state.notices.concat(action.payload),
        }),
        [actions.REMOVE_NOTICE]: (state, action) => ({
            ...state,
            notices: state.notices.filter((notice) => notice._id !== action.payload),
        }),
        // 글 조회
        [actions.READ_NOTICE_LOADING]: (state, action) => ({
            ...state,
            readNotice: reducerUtils.loading(),
        }),
        [actions.READ_NOTICE_SUCCESS]: (state, action) => ({
            ...state,
            readNotice: reducerUtils.success(action.payload),
        }),
        [actions.READ_NOTICE_ERROR]: (state, action) => ({
            ...state,
            readNotice: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default notice;

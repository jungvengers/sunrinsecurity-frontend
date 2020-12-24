import { handleActions } from 'redux-actions';

import { reducerUtils } from '../../utils/lib/asyncUtils';
import * as actions from '../actions/authAction';

const initialState = {
    login: reducerUtils.initial(),
    register: reducerUtils.initial(),
};

const auth = handleActions(
    {
        [actions.LOGIN_LOADING]: (state, action) => ({ ...state, login: reducerUtils.loading() }),
        [actions.LOGIN_SUCCESS]: (state, action) => ({
            ...state,
            login: reducerUtils.success(action.payload),
        }),
        [actions.LOGIN_ERROR]: (state, action) => ({ ...state, login: reducerUtils.error(action.payload) }),
        [actions.REGISTER_LOADING]: (state, action) => ({ ...state, register: reducerUtils.loading() }),
        [actions.REGISTER_SUCCESS]: (state, action) => ({
            ...state,
            register: reducerUtils.success(action.payload),
        }),
        [actions.REGISTER_ERROR]: (state, action) => ({
            ...state,
            register: reducerUtils.error(action.payload),
        }),
    },
    initialState
);

export default auth;

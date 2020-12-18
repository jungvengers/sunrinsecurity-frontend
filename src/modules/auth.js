import { createAction, handleActions } from 'redux-actions';
import { call, put, takeEvery } from 'redux-saga/effects';

import * as authAPI from '../api/auth';
import { reducerUtils } from '../lib/asyncUtils';

const LOGIN_LOADING = 'LOGIN_LOADING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_ERROR = 'LOGIN_ERROR';

const REGISTER_LOADING = 'REGISTER_LOADING';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ERROR = 'REGISTER_ERROR';

export const loginAsync = createAction(LOGIN_LOADING, (input) => input);
export const registerAsync = createAction(REGISTER_LOADING, (input) => input);

function* loginSaga(action) {
    try {
        const res = yield call(authAPI.login, action.payload);
        yield localStorage.setItem('accessToken', res.data.token);
        if (res) window.location = '/';
        yield put({ type: LOGIN_SUCCESS, error: false, payload: res });
    } catch (e) {
        yield put({
            type: LOGIN_ERROR,
            error: true,
            payload: e,
        });
    }
}

function* registerSaga(action) {
    try {
        const res = yield call(authAPI.register, action.payload);
        if (res) window.location = '/login';
        yield put({ type: REGISTER_SUCCESS, error: false, payload: res });
    } catch (e) {
        yield put({
            type: REGISTER_ERROR,
            error: true,
            payload: e.response.data.errorType,
        });
    }
}

export function* authSaga() {
    yield takeEvery(LOGIN_LOADING, loginSaga);
    yield takeEvery(REGISTER_LOADING, registerSaga);
}

const initialState = {
    login: reducerUtils.initial(),
    register: reducerUtils.initial(),
};

const auth = handleActions(
    {
        [LOGIN_LOADING]: (state, action) => ({ ...state, login: reducerUtils.loading() }),
        [LOGIN_SUCCESS]: (state, action) => ({ ...state, login: reducerUtils.success(action.payload) }),
        [LOGIN_ERROR]: (state, action) => ({ ...state, login: reducerUtils.error(action.payload) }),
        [REGISTER_LOADING]: (state, action) => ({ ...state, register: reducerUtils.loading() }),
        [REGISTER_SUCCESS]: (state, action) => ({ ...state, register: reducerUtils.success(action.payload) }),
        [REGISTER_ERROR]: (state, action) => ({ ...state, register: reducerUtils.error(action.payload) }),
    },
    initialState
);

export default auth;

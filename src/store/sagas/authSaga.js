import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/authAction';
import * as authAPI from '../../utils/api/auth';

function* loginSaga(action) {
    try {
        const res = yield call(authAPI.login, action.payload);
        localStorage.setItem('accessToken', res.data.token);
        if (res) window.location = '/';
        yield put({ type: actions.LOGIN_SUCCESS, error: false, payload: res });
    } catch (e) {
        yield put({
            type: actions.LOGIN_ERROR,
            error: true,
            payload: e,
        });
    }
}

function* registerSaga(action) {
    try {
        const res = yield call(authAPI.register, action.payload);
        if (res) window.location = '/login';
        yield put({ type: actions.REGISTER_SUCCESS, error: false, payload: res });
    } catch (e) {
        yield put({
            type: actions.REGISTER_ERROR,
            error: true,
            payload: e.response.data.errorType,
        });
    }
}

export function* authSaga() {
    yield takeEvery(actions.LOGIN_LOADING, loginSaga);
    yield takeEvery(actions.REGISTER_LOADING, registerSaga);
}

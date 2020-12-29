import { call, put, takeEvery, getContext } from 'redux-saga/effects';

import * as actions from '../actions/authAction';
import * as authAPI from '../../utils/api/auth';

function* loginSaga(action) {
    try {
        const history = yield getContext('history');
        const res = yield call(authAPI.login, action.payload);
        yield put({ type: actions.INIT_USERNAME, payload: res.data.user.username });
        yield put({ type: actions.LOGIN_SUCCESS, error: false, payload: res });
        yield history.push('/');
        yield localStorage.setItem('accessToken', res.data.token);
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
        const history = yield getContext('history');
        const res = yield call(authAPI.register, action.payload);
        yield put({ type: actions.REGISTER_SUCCESS, error: false, payload: res });
        yield history.push('/login');
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

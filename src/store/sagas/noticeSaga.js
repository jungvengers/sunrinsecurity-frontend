import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/noticeAction';
import * as noticeAPI from '../../utils/api/notice';

export function* readNoticeSaga(action) {
    try {
        const result = yield call(noticeAPI.readListNotice, action.payload);
        yield put({ type: actions.INIT_NOTICE, payload: result });
        yield put({ type: actions.READ_NOTICE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* readMoreNoticeSaga(action) {
    try {
        const result = yield call(noticeAPI.readListNotice, action.payload);
        console.log(result);
        yield put({ type: actions.ADD_NOTICE, payload: result });
        yield put({ type: actions.READ_MORE_NOTICE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_MORE_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* noticeSaga() {
    yield takeEvery(actions.READ_NOTICE_LOADING, readNoticeSaga);
    yield takeEvery(actions.READ_MORE_NOTICE_LOADING, readMoreNoticeSaga);
}

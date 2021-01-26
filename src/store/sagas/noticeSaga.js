import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/noticeAction';
import * as noticeAPI from '../../utils/api/notice';

export function* readListNoticeSaga(action) {
    try {
        const { pages_length } = yield call(noticeAPI.readListNotice, action.payload);
        let result = yield call(noticeAPI.readListNotice, { perPage: pages_length });
        yield put({ type: actions.INIT_NOTICE, payload: result.notices });
        yield put({ type: actions.READ_LIST_NOTICE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_LIST_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* readAnNoticeSaga(action) {
    try {
        const result = yield call(noticeAPI.readAnNotice, action.payload);
        yield put({ type: actions.READ_AN_NOTICE_SUCCESS, error: false, payload: result.data });
    } catch (error) {
        yield put({ type: actions.READ_AN_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* noticeSaga() {
    yield takeEvery(actions.READ_LIST_NOTICE_LOADING, readListNoticeSaga);
    yield takeEvery(actions.READ_AN_NOTICE_LOADING, readAnNoticeSaga);
}

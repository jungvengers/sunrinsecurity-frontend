import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/manageNoticeAction';
import * as noticeAPI from '../../utils/api/notice';
import * as formAPI from '../../utils/api/form';

export function* readListNoticleSaga(action) {
    try {
        let result = yield call(noticeAPI.readListNotice, action.payload);
        yield (result = result.filter((article) => article.writer === localStorage.getItem('username')));
        yield put({ type: actions.INIT_NOTICE, payload: result });
        yield put({ type: actions.READ_LIST_NOTICE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_LIST_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* readAnNoticleSaga(action) {
    try {
        const result = yield call(noticeAPI.readAnNotice, action.payload);
        yield put({ type: actions.READ_AN_NOTICE_SUCCESS, error: false, payload: result.data });
    } catch (error) {
        yield put({ type: actions.READ_AN_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* deleteNoticleSaga(action) {
    try {
        const result = yield call(noticeAPI.deleteNotice, action.payload);
        yield put({ type: actions.REMOVE_NOTICE, payload: action.payload });
        yield put({ type: actions.DELETE_NOTICE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({
            type: actions.DELETE_NOTICE_ERROR,
            error: true,
            payload: error,
        });
    }
}

export function* updateNoticleSaga(action) {
    try {
        const newFileNames = yield call(formAPI.uploadImages, action.payload.files);
        const data = yield {
            id: action.payload.id,
            updateData: {
                title: action.payload.title,
                content: action.payload.content,
                images: action.payload.fileNames.concat(newFileNames),
                youtubeURLs: action.payload.youtubeURLs,
            },
        };
        const result = yield call(noticeAPI.updateNotice, data);
        yield put({ type: actions.UPDATE_NOTICE_SUCCESS, error: false, payload: result });
        yield put((document.location.pathname = '/notice'));
    } catch (error) {
        yield put({ type: actions.UPDATE_NOTICE_ERROR, error: true, payload: error });
    }
}

export function* manageNoticeSaga() {
    yield takeEvery(actions.READ_LIST_NOTICE_LOADING, readListNoticleSaga);
    yield takeEvery(actions.READ_AN_NOTICE_LOADING, readAnNoticleSaga);
    yield takeEvery(actions.DELETE_NOTICE_LOADING, deleteNoticleSaga);
    yield takeEvery(actions.UPDATE_NOTICE_LOADING, updateNoticleSaga);
}

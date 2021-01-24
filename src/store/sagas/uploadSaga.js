import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/uploadAction';
import * as formAPI from '../../utils/api/form';

export function* uploadArticleSaga(action) {
    try {
        const images = yield call(formAPI.uploadImages, action.payload.files);
        const data = yield {
            isContestWork: action.payload.isContestWork,
            participants: action.payload.participants,
            clubs: action.payload.clubs,
            content: action.payload.content,
            kinds: action.payload.kinds,
            images,
            youtubeURLs: action.payload.youtubeURLs,
        };
        const result = yield call(formAPI.uploadArticle, data);
        yield put({ type: actions.UPLOAD_ARTICLE_SUCCESS, error: false, payload: result });
        yield (document.location.pathname = '/article');
    } catch (error) {
        yield put({
            type: actions.UPLOAD_ARTICLE_ERROR,
            error: true,
            payload: error,
        });
    }
}

export function* uploadNoticeSaga(action) {
    try {
        const fileNames = yield call(formAPI.uploadImages, action.payload.files);
        const data = yield {
            title: action.payload.title,
            content: action.payload.content,
            images: fileNames,
            youtubeURLs: action.payload.youtubeURLs,
        };
        const result = yield call(formAPI.uploadNotice, data);
        yield put({ type: actions.UPLOAD_NOTICE_SUCCESS, error: false, payload: result });
        yield put((document.location.pathname = '/notice'));
    } catch (error) {
        yield put({
            type: actions.UPLOAD_NOTICE_ERROR,
            error: true,
            payload: error,
        });
    }
}

export function* uploadSaga() {
    yield takeEvery(actions.UPLOAD_ARTICLE_LOADING, uploadArticleSaga);
    yield takeEvery(actions.UPLOAD_NOTICE_LOADING, uploadNoticeSaga);
}

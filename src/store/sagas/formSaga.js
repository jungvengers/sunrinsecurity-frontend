import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/formAction';
import * as formAPI from '../../lib/api/form';

export function* uploadArticleSaga(action) {
    try {
        const imageNames = yield call(formAPI.uploadImages, action.payload.imageFiles);
        const data = {
            isContestWork: action.payload.isContestWork,
            participants: action.payload.participants,
            clubs: action.payload.clubs,
            content: action.payload.content,
            kinds: action.payload.kinds,
            imageNames: imageNames,
        };
        const result = yield call(formAPI.uploadArticle, data);
        yield put({ type: actions.UPLOAD_ARTICLE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({
            type: actions.UPLOAD_ARTICLE_ERROR,
            error: true,
            payload: error,
        });
    }
}

export function* formSaga() {
    yield takeEvery(actions.UPLOAD_ARTICLE_LOADING, uploadArticleSaga);
}

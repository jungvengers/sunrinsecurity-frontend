import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/articleAction';
import * as articleAPI from '../../utils/api/article';

export function* readArticleSaga(action) {
    try {
        const result = yield call(articleAPI.readListArticles, action.payload);
        yield put({ type: actions.INIT_ARTICLE, payload: result });
        yield put({ type: actions.READ_ARTICLE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_ARTICLE_ERROR, error: true, payload: error });
    }
}

export function* readMoreArticleSaga(action) {
    try {
        const result = yield call(articleAPI.readListArticles, action.payload);
        console.log(result);
        yield put({ type: actions.ADD_ARTICLE, payload: result });
        yield put({ type: actions.READ_MORE_ARTICLE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_MORE_ARTICLE_ERROR, error: true, payload: error });
    }
}

export function* articleSaga() {
    yield takeEvery(actions.READ_ARTICLE_LOADING, readArticleSaga);
    yield takeEvery(actions.READ_MORE_ARTICLE_LOADING, readMoreArticleSaga);
}

import { call, put, takeEvery } from 'redux-saga/effects';

import * as actions from '../actions/manageArticleAction';
import * as articleAPI from '../../utils/api/article';
import * as formAPI from '../../utils/api/form';

export function* readListArticleSaga(action) {
    try {
        let result = yield call(articleAPI.readListArticles, action.payload);
        yield (result = result.filter((article) => article.writer === localStorage.getItem('username')));
        yield put({ type: actions.INIT_ARTICLE, payload: result });
        yield put({ type: actions.READ_LIST_ARTICLE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({ type: actions.READ_LIST_ARTICLE_ERROR, error: true, payload: error });
    }
}

export function* readAnArticleSaga(action) {
    try {
        const result = yield call(articleAPI.readAnArticle, action.payload);
        yield put({ type: actions.READ_AN_ARTICLE_SUCCESS, error: false, payload: result.data });
    } catch (error) {
        yield put({ type: actions.READ_AN_ARTICLE_ERROR, error: true, payload: error });
    }
}

export function* deleteArticleSaga(action) {
    try {
        const result = yield call(articleAPI.deleteArticle, action.payload);
        yield put({ type: actions.REMOVE_ARTICLE, payload: action.payload });
        yield put({ type: actions.DELETE_ARTICLE_SUCCESS, error: false, payload: result });
    } catch (error) {
        yield put({
            type: actions.DELETE_ARTICLE_ERROR,
            error: true,
            payload: error,
        });
    }
}

export function* updateArticleSaga(action) {
    try {
        const newFileNames = yield call(formAPI.uploadImages, action.payload.files);
        const data = yield {
            id: action.payload.id,
            updateData: {
                isContestWork: action.payload.isContestWork,
                participants: action.payload.participants,
                clubs: action.payload.clubs,
                content: action.payload.content,
                kinds: action.payload.kinds,
                images: action.payload.fileNames.concat(newFileNames),
                youtubeURLs: action.payload.youtubeURLs,
            },
        };
        const result = yield call(articleAPI.updateArticle, data);
        yield put({ type: actions.UPDATE_ARTICLE_SUCCESS, error: false, payload: result });
        yield put((document.location.pathname = '/article'));
    } catch (error) {
        yield put({ type: actions.UPDATE_ARTICLE_ERROR, error: true, payload: error });
    }
}

export function* manageArticleSaga() {
    yield takeEvery(actions.READ_LIST_ARTICLE_LOADING, readListArticleSaga);
    yield takeEvery(actions.READ_AN_ARTICLE_LOADING, readAnArticleSaga);
    yield takeEvery(actions.DELETE_ARTICLE_LOADING, deleteArticleSaga);
    yield takeEvery(actions.UPDATE_ARTICLE_LOADING, updateArticleSaga);
}

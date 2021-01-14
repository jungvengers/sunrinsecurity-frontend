import { call, put, takeEvery, getContext } from 'redux-saga/effects';

import * as actions from '../actions/formAction';
import * as formAPI from '../../utils/api/form';

export function* uploadArticleSaga(action) {
    try {
        const history = yield getContext('history');
        const images = yield call(formAPI.uploadImages, action.payload);
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
        yield history.push('/');
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

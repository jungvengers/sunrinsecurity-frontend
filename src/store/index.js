import { combineReducers } from 'redux';
import upload from './reducers/uploadReducer';
import manageArticle from './reducers/manageArticleReducer';
import manageNotice from './reducers/manageNoticeReducer';
import article from './reducers/articleReducer';
import notice from './reducers/noticeReducer';
import auth from './reducers/authReducer';
import { uploadSaga } from './sagas/uploadSaga';
import { manageArticleSaga } from './sagas/manageArticleSaga';
import { manageNoticeSaga } from './sagas/manageNoticeSaga';
import { articleSaga } from './sagas/articleSaga';
import { noticeSaga } from './sagas/noticeSaga';
import { authSaga } from './sagas/authSaga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    upload,
    manageArticle,
    manageNotice,
    article,
    notice,
    auth,
});
export function* rootSaga() {
    yield all([
        uploadSaga(),
        manageArticleSaga(),
        manageNoticeSaga(),
        articleSaga(),
        noticeSaga(),
        authSaga(),
    ]);
}

export default rootReducer;

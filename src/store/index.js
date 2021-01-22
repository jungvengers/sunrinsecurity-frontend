import { combineReducers } from 'redux';
import upload from './reducers/uploadReducer';
import manage from './reducers/manageReducer';
import article from './reducers/articleReducer';
import auth from './reducers/authReducer';
import { uploadSaga } from './sagas/uploadSaga';
import { manageSaga } from './sagas/manageSaga';
import { articleSaga } from './sagas/articleSaga';
import { authSaga } from './sagas/authSaga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    upload,
    manage,
    article,
    auth,
});
export function* rootSaga() {
    yield all([uploadSaga(), manageSaga(), articleSaga(), authSaga()]);
}

export default rootReducer;

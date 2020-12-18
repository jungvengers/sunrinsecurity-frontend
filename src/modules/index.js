import { combineReducers } from 'redux';
import form from './form';
import article from './article';
import auth, { authSaga } from './auth';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    form,
    article,
    auth,
});
export function* rootSaga() {
    yield all([authSaga()]);
}

export default rootReducer;

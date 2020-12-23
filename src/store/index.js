import { combineReducers } from 'redux';
import form from './reducers/formReducer';
import article from './reducers/articleReducer';
import auth from './reducers/authReducer';
import { articleSaga } from './sagas/articleSaga';
import { authSaga } from './sagas/authSaga';
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
    form,
    article,
    auth,
});
export function* rootSaga() {
    yield all([articleSaga(), authSaga()]);
}

export default rootReducer;

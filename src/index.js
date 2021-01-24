import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import history from './utils/lib/history';

import rootReducer, { rootSaga } from './store';

import App from './App';

const sagaMiddleware = createSagaMiddleware({
    context: {
        history,
    },
});

const enhancer =
    process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(sagaMiddleware))
        : composeWithDevTools(applyMiddleware(logger, sagaMiddleware));

const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

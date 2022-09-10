import React from 'react';
import {
    compose
} from 'redux'
import ReactDOM from 'react-dom';
import './index.less';
import reportWebVitals from './reportWebVitals';

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

import Routes from 'routes'

import './i18n/i18n'

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ?
        compose(
            applyMiddleware(thunk, logger),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
        :
        compose(
            applyMiddleware(thunk, logger)
        )
)

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Routes />
        </React.StrictMode>
    </Provider>,
    document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

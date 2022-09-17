import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// Define reducers
const feeling = (state = 0, action) => {
    if (action.type === 'SET_FEELING') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } else {
        return state;
    };
};

const understanding = (state = 0, action) => {
    if (action.type === 'SET_UNDERSTANDING') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } else {
        return state;
    };
};

const support = (state = 0, action) => {
    if (action.type === 'SET_SUPPORT') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return 0;
    } else {
        return state;
    };
};

const comments = (state = '', action) => {
    if (action.type === 'SET_COMMENTS') {
        return action.payload;
    } else if (action.type === 'CLEAR_ALL') {
        return '';
    } else {
        return state;
    };
};
// End reducers

// redux store for reducers
const storeInstance = createStore(
    // reducers
    combineReducers({
        feeling,
        understanding,
        support,
        comments
    }),
    applyMiddleware(logger) // logger for debugging/verifying proper operation
);

ReactDOM.render(
    // provide the redux store for App and app contents
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// redux store for reducers
const storeInstance = createStore(
    // reducers
    combineReducers({

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
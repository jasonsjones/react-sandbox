import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';

const defaultState = {
    isAuth: false,
    isFetchingData: false
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'AUTH_LOGIN_FETCHING':
            return {
                ...state,
                isFetchingData: true
            };
        case 'AUTH_LOGIN_USER':
            return {
                ...state,
                isAuth: true
            };
        default:
            return state;
    }
};

const store = createStore(reducer, defaultState);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';

const defaultState = {
    isAuth: false,
    isFetchingData: false
};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                isFetchingData: true
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isAuth: true
            };
        default:
            return state;
    }
};

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

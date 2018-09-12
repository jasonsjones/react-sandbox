import { findUser } from './mock-data';

const actionTypes = {
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS'
};

const defaultState = {
    isAuth: false,
    isFetchingData: false,
    contextUser: {
        name: '',
        email: ''
    }
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                isFetchingData: true,
                contextUser: findUser(action.data.email)
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isFetchingData: false
            };
        case actionTypes.USER_SIGNUP_REQUEST:
            return {
                ...state,
                isFetchingData: true
            };
        case actionTypes.USER_SIGNUP_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isFetchingData: false
            };
        default:
            return state;
    }
};

const actionTypes = {
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
    USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    DATA_REQUEST: 'DATA_REQUEST',
    DATA_SUCCESS: 'DATA_SUCCESS'
};

const defaultState = {
    isAuth: false,
    isFetchingData: false,
    version: '',
    message: '',
    contextUser: null,
    error: ''
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            return {
                ...state,
                isFetchingData: true
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isFetchingData: false,
                error: '',
                contextUser: action.data.payload.user
            };
        case actionTypes.USER_LOGIN_ERROR:
            return {
                ...state,
                isAuth: false,
                isFetchingData: false,
                error: action.data
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
        case actionTypes.DATA_REQUEST:
            return {
                ...state,
                isFetchingData: true
            };
        case actionTypes.DATA_SUCCESS:
            return {
                ...state,
                isFetchingData: false,
                message: action.data.message,
                version: action.data.version
            };
        default:
            return state;
    }
};

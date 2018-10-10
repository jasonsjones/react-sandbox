const actionTypes = {
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_LOGIN_ERROR: 'USER_LOGIN_ERROR',
    USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS',
    DATA_REQUEST: 'DATA_REQUEST',
    DATA_SUCCESS: 'DATA_SUCCESS'
};

const getUserFromLocalStorage = () => {
    const user = JSON.parse(window.localStorage.getItem('contextUser'));
    console.log(user);
    return user || null;
};

const getTokenFromLocalStorage = () => {
    const token = window.localStorage.getItem('userToken');
    console.log(token);
    return token || null;
};

const defaultState = {
    isAuth: !!getTokenFromLocalStorage(),
    isFetchingData: false,
    version: '',
    message: '',
    contextUser: getUserFromLocalStorage(),
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
                contextUser: action.data.payload.user,
                token: action.data.payload.token
            };
        case actionTypes.USER_LOGOUT_REQUEST:
            return {
                ...state,
                isFetchingData: true
            };
        case actionTypes.USER_LOGOUT_SUCCESS:
            return {
                ...state,
                isAuth: false,
                isFetchingData: false,
                error: '',
                contextUser: null,
                token: ''
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

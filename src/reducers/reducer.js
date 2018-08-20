const actionTypes = {
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS',
    USER_SIGNUP_REQUEST: 'USER_SIGNUP_REQUEST',
    USER_SIGNUP_SUCCESS: 'USER_SIGNUP_SUCCESS'
};

const defaultState = {
    isAuth: false,
    isFetchingData: false
};

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case actionTypes.USER_LOGIN_REQUEST:
            console.log('process form submission here...');
            console.log(action.data);
            return {
                ...state,
                isFetchingData: true
            };
        case actionTypes.USER_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                isFetchingData: false
            };
        case actionTypes.USER_SIGNUP_REQUEST:
            console.log('requesting to signup with the following info:');
            console.log(action.data);
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

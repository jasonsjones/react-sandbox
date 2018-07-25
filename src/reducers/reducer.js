const actionTypes = {
    USER_LOGIN_REQUEST: 'USER_LOGIN_REQUEST',
    USER_LOGIN_SUCCESS: 'USER_LOGIN_SUCCESS'
};

const defaultState = {
    isAuth: false,
    isFetchingData: false
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
                isFetchingData: false
            };
        default:
            return state;
    }
};

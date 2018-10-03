export const userSignupRequest = userData => {
    return { type: 'USER_SIGNUP_REQUEST', data: userData };
};

export const userSignupSuccess = () => {
    return { type: 'USER_SIGNUP_SUCCESS' };
};

export const userLoginRequest = creds => {
    return { type: 'USER_LOGIN_REQUEST', data: creds };
};

export const userLoginSuccess = () => {
    return { type: 'USER_LOGIN_SUCCESS' };
};

export const userLogin = creds => {
    return dispatch => {
        dispatch(userLoginRequest(creds));
        setTimeout(() => {
            dispatch(userLoginSuccess());
        }, 2000);
    };
};

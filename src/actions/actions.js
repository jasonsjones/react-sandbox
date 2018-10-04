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

export const getData = () => {
    return dispatch => {
        dispatch(getDataRequest());
        fetch('http://localhost:3000/api', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include'
        })
            .then(res => res.json())
            .then(data => {
                return dispatch(getDataSuccess(data));
            })
            .catch(err => {
                console.log(err);
            });
    };
};

export const getDataRequest = () => {
    return { type: 'DATA_REQUEST' };
};

export const getDataSuccess = data => {
    return { type: 'DATA_SUCCESS', data };
};

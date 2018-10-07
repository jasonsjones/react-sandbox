export const userSignupRequest = userData => {
    return { type: 'USER_SIGNUP_REQUEST', data: userData };
};

export const userSignupSuccess = () => {
    return { type: 'USER_SIGNUP_SUCCESS' };
};

export const userLoginRequest = () => {
    return { type: 'USER_LOGIN_REQUEST' };
};

export const userLoginSuccess = () => {
    return { type: 'USER_LOGIN_SUCCESS' };
};

export const userLogin = creds => {
    return dispatch => {
        dispatch({ type: 'USER_LOGIN_REQUEST' });
        fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify(creds)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else if (response.status === 401) {
                    return Promise.reject({ message: 'Unauthorized user' });
                }
            })
            .then(data => {
                if (data) {
                    dispatch({ type: 'USER_LOGIN_SUCCESS', data });
                }
            })
            .catch(err => {
                console.log(err);
                dispatch({ type: 'USER_LOGIN_ERROR', data: err.message });
            });
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

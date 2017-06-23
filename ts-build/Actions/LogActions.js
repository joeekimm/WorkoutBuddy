export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const loginSuccess = (profile) => {
    return {
        type: LOGIN_SUCCESS,
        profile,
    };
};
const loginError = (err) => {
    return {
        type: LOGIN_SUCCESS,
        err,
    };
};
export const login = () => {
    const lock = new Auth0Lock('waLh6LFI5mkxJEckZDmaYc5q54nIYB4p', '1IdkHtPNfK7fxwbWXlo0HJtF3acl_gGpCYT9QolWgS9DE-gUI1wBukmZM34MfqJP');
    console.log('login gets fired');
    return (dispatch) => {
        console.log('we get chea');
        lock.show((err, profile, token) => {
            if (err) {
                console.log('the error is ,', err);
                return dispatch(loginError(err));
            }
            console.log('we get chea2');
            localStorage.setItem('profile', JSON.stringify(profile));
            localStorage.setItem('id_token', token);
            return dispatch(loginSuccess(profile));
        });
    };
};
export const logoutSuccess = (profile) => {
    return {
        type: LOGOUT_SUCCESS,
    };
};
export const logout = () => {
    return (dispatch) => {
        localStorage.removeItem('id_token');
        localStorage.removeItem('profile');
        // @ts-ignore
        return dispatch(logoutSuccess());
    };
};
//# sourceMappingURL=LogActions.js.map
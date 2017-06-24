import axios from 'axios';


export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

const loginSuccess = (profile: object) => {
  return {
    type: LOGIN_SUCCESS,
    profile,
  }
};

const loginError = (err: string) => {
  return {
    type: LOGIN_SUCCESS,
    err,
  }
};

export const login = (history: any) => {
  const lock = new Auth0Lock('waLh6LFI5mkxJEckZDmaYc5q54nIYB4p', 'workoutbuddy.auth0.com');
  return (dispatch:any) => {
    lock.show((err:string, profile:object, token:string) => {
      if (err) {
        console.log('the login error is,', err);
        return dispatch(loginError(err))
      }
      localStorage.setItem('profile', JSON.stringify(profile));
      localStorage.setItem('id_token', token);
      const body = {
        user_id: JSON.parse(localStorage.getItem('profile')).user_id,
    }
      console.log('this is the body being sent' ,body);
      axios.post(`/api/users`, body)
        .then((res:object) => {
          if(res.data === 'user was created') {
            history.push('/workoutinfo');
          }
          if(res.data === 'user already exists') {
            history.push('/dashboard');
          }
        })
        .catch((err) => {
          console.log('route is fucked up somehow ,', err);
        })
      return dispatch(loginSuccess(profile));
    });
  }
}

export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  }
};

export const logout = (history:any) => {
  return (dispatch:any) => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    history.push('/');
    return dispatch(logoutSuccess());
  }
}
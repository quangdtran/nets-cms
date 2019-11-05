import accountTest from '@src/services/accountTest';
import accountService from '@src/services/account.service';
import {
  login,
} from '@constants/action-type';


// ACTION:
export const userLoginSuccess = (accessToken) => {
  if (accessToken) window.localStorage.setItem('access_token', accessToken);
  return { type: login.USER_LOGIN_SUCCESS };
};

export const userLogout = () => {
  window.localStorage.setItem('access_token', '');
  return { type: login.USER_LOGOUT };
};

export const userLoginFail = (reason) => {
  window.localStorage.setItem('access_token', '');
  return {
    type: login.USER_LOGIN_FAIL,
    payload: {
      reason,
    },
  };
};

export const setCurrentUser = (user) => {
  return {
    type: login.SET_CURRENT_USER,
    payload: {
      currentUser: user,
    },
  };
};

// MIDDLEWARE:
export const userLogin = (username, password) => {
  return async (dispatch) => {
    dispatch({ type: login.USER_LOGIN });
    try {
      const response = await accountService.login(username, password);
      dispatch(userLoginSuccess(response.data));
      // dispatch(setUser(response.data));
    } catch (error) {
      if (error.response) {
        const { status } = error.response;
        if (status === 401) dispatch(userLoginFail('Username or Password incorrect'));
        else if (status === 404) dispatch(userLoginFail('Not found'));
        else dispatch(userLoginFail('Error Unknowed'));
      } else {
        dispatch(userLoginFail('Can not connect to server'));
      }
    }
  };
};

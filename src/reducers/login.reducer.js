import {
  login,
} from '@constants/action-type';

const initialState = {
  isFetching: false,
  isLogin: false,
  currentUser: null,
  reason: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case login.USER_LOGIN:
      return { ...state, isFetching: true };

    case login.USER_LOGIN_SUCCESS:
      return { ...state, isLogin: true, isFetching: false };

    case login.USER_LOGIN_FAIL:
      return {
        ...state,
        ...payload,
        isLogin: false,
        isFetching: false,
      };

    case login.USER_LOGOUT:
      return {
        ...state,
        isLogin: false,
      };

    case login.SET_CURRENT_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};

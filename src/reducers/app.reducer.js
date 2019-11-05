import { app } from '@constants/action-type';

const initialState = {
  isDesktop: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case app.SET_IS_DESKTOP:
      return { ...state, ...payload };

    default:
      return state;
  }
};

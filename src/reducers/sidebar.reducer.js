import { sidebar } from '@constants/action-type';

const initialState = {
  tabIsSelected: '',
  isOpen: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case sidebar.SET_TAB_IS_SELECTED:
      return { ...state, ...payload };

    case sidebar.SET_OPEN_SIDEBAR:
      return { ...state, ...payload };

    default:
      return state;
  }
};

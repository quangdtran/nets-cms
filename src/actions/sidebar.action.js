import { sidebar } from '@constants/action-type';

export const setTabIsSelected = (tabIsSelected) => {
  return {
    type: sidebar.SET_TAB_IS_SELECTED,
    payload: {
      tabIsSelected,
    },
  };
};

export const setOpenSidebar = (isOpen) => {
  return {
    type: sidebar.SET_OPEN_SIDEBAR,
    payload: {
      isOpen,
    },
  };
};

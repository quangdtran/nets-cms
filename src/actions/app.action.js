import { app } from '@constants/action-type';
import { setOpenSidebar } from '@actions/sidebar.action';

export const setIsDesktop = (isDesktop) => {
  return (dispatch) => {
    dispatch({
      type: app.SET_IS_DESKTOP,
      payload: {
        isDesktop,
      },
    });
    if (isDesktop) dispatch(setOpenSidebar(true));
    else dispatch(setOpenSidebar(false));
  };
};

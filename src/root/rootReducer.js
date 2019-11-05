import { combineReducers } from 'redux';
import appReducer from '@reducers/app.reducer';
import loginReducer from '@reducers/login.reducer';
import sidebarReducer from '@reducers/sidebar.reducer';
import postDetailReducer from '@reducers/post-detail.reducer';

export default combineReducers({
  app: appReducer,
  login: loginReducer,
  sidebar: sidebarReducer,
  postDetail: postDetailReducer,
});

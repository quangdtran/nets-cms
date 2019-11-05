import React from 'react';

import AppRouter from '@ui/App';
import theme from '@ui/theme';

import { Provider } from 'react-redux';
import store from './rootStore';

const RootApp = () => (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
export default RootApp;

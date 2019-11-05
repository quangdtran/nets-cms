import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom';
import { createHashHistory } from 'history';

import {
  createMuiTheme,
  MuiThemeProvider,
} from '@material-ui/core';
import { ThemeProvider } from 'styled-components';
// import { connect } from 'react-redux';
import themeUI from './theme';
import Routes from './Routes';
// import { setUser } from '../actions/login.action';

const theme = createMuiTheme(themeUI);

const browserHistory = createHashHistory();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  // componentDidMount() {
  //   this.props.setUser();
  // }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <HashRouter history={browserHistory}>
            <Routes />
          </HashRouter>
        </ThemeProvider>
      </MuiThemeProvider>
    );
  }
}

export default App;

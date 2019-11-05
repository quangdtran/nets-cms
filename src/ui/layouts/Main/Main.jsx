import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import { Header } from '@src/ui/components';

import accountService from '@src/services/account.service';

import {
  userLogout,
  userLoginSuccess,
  userLoginFail,
  setCurrentUser,
} from '@actions/login.action';
import {
  setIsDesktop,
} from '@actions/app.action';
import { setOpenSidebar, setTabIsSelected } from '@actions/sidebar.action';

import {
  withTheme,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import { Sidebar } from './components';

import {
  WrapApp,
  WrapAppBody,
  WrapMainContent,
} from './styled';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      widthScreen: 0,
    };

    this.handlerResizeScreen = () => {
      const {
        theme,
      } = this.props;
      if (window.innerWidth >= theme.breakpoints.values.lg) this.props.setIsDesktop(true);
      else this.props.setIsDesktop(false);
    };
  }

  // LIFECYCLE:
  async componentDidMount() {
    const accessToken = window.localStorage.getItem('access_token');
    try {
      const { data: user } = await accountService.checkAccessToken(accessToken);
      this.props.setCurrentUser(user);
      this.props.userLoginSuccess(accessToken);
      this.setState({ isLoading: false });
    } catch (error) {
      if (!error.response) this.props.userLoginFail('Error Unknowed');
      else {
        const { status } = error.response;
        if (status === 401) this.props.userLoginFail('You do not have access');
        else if (status === 404) this.props.userLoginFail('Cannot connect to server');
        else this.props.userLoginFail('Error Unknowed');
      }
      this.setState({ isLoading: false });
    }

    this.props.setIsDesktop(true);
    // @AddEvent
    window.addEventListener('resize', this.handlerResizeScreen);

    this.handlerResizeScreen();
  }

  componentWillUnmount() {
    // @RemoveEvent
    window.removeEventListener('resize', this.handlerResizeScreen);
  }

  // METHOD:

  render() {
    const {
      isLogin,
      isDesktop,
      match,
      children,
    } = this.props;
    const {
      isLoading,
    } = this.state;

    if (isLoading) return null;
    if (!isLogin) return <Redirect to="/login" />;
    if (match.path !== '/') this.props.setTabIsSelected(match.path);

    return (
      <WrapApp>
        <Header />
        <WrapAppBody container>
          <Sidebar
            variant={isDesktop ? 'persistent' : 'temporary'}
          />
          <WrapMainContent>
            {children}
          </WrapMainContent>
        </WrapAppBody>
      </WrapApp>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin,
    isDesktop: state.app.isDesktop,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogout: () => dispatch(userLogout()),
    userLoginSuccess: () => dispatch(userLoginSuccess()),
    userLoginFail: reason => dispatch(userLoginFail(reason)),
    openSidebar: () => dispatch(setOpenSidebar(true)),
    closeSidebar: () => dispatch(setOpenSidebar(false)),
    setIsDesktop: isDesktop => dispatch(setIsDesktop(isDesktop)),
    setTabIsSelected: href => dispatch(setTabIsSelected(href)),
    setCurrentUser: user => dispatch(setCurrentUser(user)),
  };
};

// Main.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default withTheme()(
  connect(mapStateToProps, mapDispatchToProps)(Main),
);

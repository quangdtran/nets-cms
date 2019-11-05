import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  AppBar,
  Toolbar,
  Fab,
  withWidth,
  withTheme,
} from '@material-ui/core';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { userLogout } from '@actions/login.action';
import { setOpenSidebar } from '@actions/sidebar.action';

const WrapHeader = styled(AppBar)`
  box-shadow: none !important;
  color: ${({ theme }) => theme.bgColor.header} !important;
  position: fixed !important;
  height: 64px;
`;

const LogOutBtn = styled(Fab)`
  position: absolute !important;
  right: 20px !important;
  color: ${({ theme }) => theme.color.white} !important;
  border-radius: 25px !important;
  width: 40px !important;
  height: 40px !important;
  background-color: inherit !important;
`;

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  renderOptionBtn() {
    const { isDesktop } = this.props;
    if (isDesktop) {
      return (
        <LogOutBtn onClick={() => this.props.userLogout()}><ExitToAppIcon /></LogOutBtn>
      );
    }
    return (
      <LogOutBtn onClick={() => this.props.setOpenSidebar(true)}><MenuIcon /></LogOutBtn>
    );
  }

  render() {
    const { isLogin } = this.props;
    return (
      <WrapHeader>
        <Toolbar style={{ display: 'flex', position: 'relative' }}>
          <Link to="/">
            <img src="https://react-material-dashboard.devias.io/images/logos/logo--white.svg" alt="Logo" />
          </Link>
          {
            isLogin
              ? this.renderOptionBtn()
              : null
          }
        </Toolbar>
      </WrapHeader>
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
    setOpenSidebar: isOpen => dispatch(setOpenSidebar(isOpen)),
  };
};

Header.propstype = {
  width: PropTypes.string.isRequired,
  userLogout: PropTypes.func.isRequired,
  setOpenSidebar: PropTypes.func.isRequired,
};

export default withWidth()(
  connect(mapStateToProps, mapDispatchToProps)(Header),
);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setOpenSidebar } from '@actions/sidebar.action';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import ImageIcon from '@material-ui/icons/Image';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SettingsIcon from '@material-ui/icons/Settings';

import {
  Drawer,
  Avatar,
  withStyles,
} from '@material-ui/core';

import {
  SidebarNav,
  MiniProfile,
} from '@src/ui/components';

import {
  WrapSidebar,
  DivideLine,
} from './styled';

const pages = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <DashboardIcon />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <PeopleIcon />,
  },
  {
    title: 'Products',
    href: '/products',
    icon: <ShoppingBasketIcon />,
  },
  {
    title: 'Posts',
    href: '/posts',
    icon: <TextFieldsIcon />,
  },
  {
    title: 'Category',
    href: '/category',
    icon: <ImageIcon />,
  },
  {
    title: 'Account',
    href: '/account',
    icon: <AccountBoxIcon />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <SettingsIcon />,
  },
];

const styles = theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)',
    },
  },
});

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      classes,
      closeSidebar,
      variant,
      isOpen,
      currentUser,
    } = this.props;
    return (
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawer }}
        onClose={closeSidebar}
        open={isOpen}
        variant={variant}
      >
        <MiniProfile username={currentUser.username} />
        <DivideLine />
        <SidebarNav pages={pages} />
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isOpen: state.sidebar.isOpen,
    currentUser: state.login.currentUser,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeSidebar: () => dispatch(setOpenSidebar(false)),
  };
};

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  isOpen: PropTypes.bool.isRequired,
  closeSidebar: PropTypes.func.isRequired,
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Sidebar),
);

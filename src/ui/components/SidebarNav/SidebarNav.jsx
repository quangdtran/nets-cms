import React from 'react';
import { connect } from 'react-redux';
import {
  Link,
  Redirect,
} from 'react-router-dom';

import PropType from 'prop-types';

import {
  List,
  ListItem,
  Button,
  withStyles,
} from '@material-ui/core';

import styled from 'styled-components';

import {
  setTabIsSelected,
} from '@actions/sidebar.action';

// @Styled
const NavButton = styled(Button)`
  color: ${props => (props['tab-active'] ? props.theme.color.blue : props.theme.color.sidebarNav)} !important;
  padding: 10px 8px !important;
  justify-content: flex-start !important;
  text-transform: none !important;
  letter-spacing: 0 !important;
  width: 100%;
  font-weight: 600 !important;
`;

const WrapIconNav = styled.div`
  color: inherit !important;
  width: 24;
  height: 24;
  display: flex;
  align-items: center;
  margin-right: 10px;
`;

// @CSS-classes
const styles = theme => ({});

// @Component
const SidebarNav = (props) => {
  const { pages, tabIsSelected } = props;
  if (!tabIsSelected) {
    const defaultPage = pages[0];
    props.setTabIsSelected(defaultPage.title);
    return <Redirect to={defaultPage.href} />;
  }
  return (
    <List>
      {
        pages.map(page => (
          <ListItem
            style={{ padding: 0 }}
            disableGutters
            key={page.title}
            onClick={() => props.setTabIsSelected(page.href)}
          >

            <NavButton
              tab-active={tabIsSelected === page.href ? 'true' : null}
              component={Link}
              to={page.href}
            >
              <WrapIconNav>{page.icon}</WrapIconNav>
              {page.title}
            </NavButton>
          </ListItem>
        ))
      }
    </List>
  );
};

SidebarNav.prototype = {
  classes: PropType.object.isRequired,
  pages: PropType.array.isRequired,
  setTabIsSelected: PropType.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tabIsSelected: state.sidebar.tabIsSelected,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setTabIsSelected: tabIsSelected => dispatch(setTabIsSelected(tabIsSelected)),
  };
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(SidebarNav),
);

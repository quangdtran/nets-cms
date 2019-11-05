import React, { Component } from 'react';
import styled from 'styled-components';

import {
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from '@material-ui/core';

import { Link } from 'react-router-dom';


import SearchIcon from '@material-ui/icons/Search';

const WrapPostToolbar = styled.div`
  padding: 20px;
  display: flex;
`;

const WrapLeft = styled.div`
  width: 50%;
  text-align: left;
`;

const WrapRight = styled.div`
  width: 50%;
  text-align: right;
`;

const CreateBtn = styled(Button)`
  color: white !important;
  background-color: ${({ theme }) => theme.bgColor.green} !important;
  padding: 7px 13px !important;
`;

const WrapSide = styled.div`
    margin: 10px !important;
    display: flex;
`;

const MultiSearch = styled(TextField)`
    margin-left: 20px !important;
`;

const WrapTreeLink = styled.a`
  text-decoration: none;
  color: #3f51b5;
  font-weight: 600;
  letter-spacing: 0.5px;

  &:hover {
    text-decoration: underline;
  }
`;

class UserHeader extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = {
      // open: false,
    };
  }

  // licycle
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.create !== this.state.open) {
  //     this.setState({ open: nextProps.create });
  //   }
  // }

  // openFormCategory() {
  //   // eslint-disable-next-line no-alert
  //   this.setState({
  //     // eslint-disable-next-line react/no-access-state-in-setstate
  //     open: this.state.open,
  //   });
  // }

  render() {
    // // eslint-disable-next-line no-console
    // console.log(this.props.create);
    // // eslint-disable-next-line no-console
    // console.log(this.state.open);
    return (
      <WrapPostToolbar>
        <WrapLeft>
          <WrapTreeLink href="/posts">Admin</WrapTreeLink>
          {' > '}
          <WrapTreeLink href="/category">User</WrapTreeLink>
          <WrapSide>
            <MultiSearch
              label=" Search Name"
              autoComplete="title"
            />
            <MultiSearch
              label=" Search Phone"
              autoComplete="title"
            />
            <MultiSearch
              label=" Search Email"
              autoComplete="title"
            />
          </WrapSide>
        </WrapLeft>

        <WrapRight>
          <Link style={{ textDecoration: 'none' }} to="/user-detail">
            <CreateBtn>Create New User</CreateBtn>
          </Link>
        </WrapRight>
      </WrapPostToolbar>
    );
  }
}

export default UserHeader;

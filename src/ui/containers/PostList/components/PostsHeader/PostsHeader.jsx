import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import {
  Button,
  InputAdornment,
  TextField,
  IconButton,
} from '@material-ui/core';

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

const WrapSide = styled.div`
    margin: 10px !important;
    display: flex;
`;

const MultiSearch = styled(TextField)`
    margin-left: 20px !important;
`;


const CreateBtn = styled(Button)`
  color: white !important;
  background-color: ${({ theme }) => theme.bgColor.green} !important;
  padding: 7px 13px !important;
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

const PostToolbar = () => {
  return (
    <WrapPostToolbar>
      <WrapLeft>
        <WrapTreeLink href="/posts">Admin</WrapTreeLink>
        {' > '}
        <WrapTreeLink href="/posts">Posts</WrapTreeLink>
        <WrapSide>
          <MultiSearch
            label=" Search Title"
            autoComplete="title"
          />
        </WrapSide>
      </WrapLeft>
      <WrapRight>
        <Link style={{ textDecoration: 'none' }} to="post-detail">
          <CreateBtn>Create new post</CreateBtn>
        </Link>
      </WrapRight>
    </WrapPostToolbar>
  );
};

export default PostToolbar;

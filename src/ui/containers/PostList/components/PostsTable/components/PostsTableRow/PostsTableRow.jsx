import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import articleService from '@src/services/article.service';

import styled from 'styled-components';
import {
  TableRow,
  TableCell,
  Checkbox,
  Typography,
} from '@material-ui/core';

import DeleteIcon from '@material-ui/icons/Delete';

const DeletePostIcon = styled(DeleteIcon)`
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.color.blue};
  }
`;

const LinkToPostDetail = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline !important;
    color: ${({ theme }) => theme.color.black} !important;
  }
`;

const PostsTableRow = (props) => {
  const {
    post,
    setIsFetching,
    setOpenPopup,
    setPostList,
  } = props;

  const handlePostDeleting = async (postId) => {
    setIsFetching(true);
    try {
      await articleService.deleteById(postId);
      const { data: postList } = await articleService.getList();
      setPostList(postList);
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      setOpenPopup(true);
    }
  };

  return (
    <TableRow
      hover
      style={{ cursor: 'pointer' }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          color="primary"
          value="true"
        />
      </TableCell>
      <TableCell>
        <LinkToPostDetail to={`/post-detail/${post.id}`}>
          <Typography variant="body1">{post.id}</Typography>
        </LinkToPostDetail>
      </TableCell>
      <TableCell>{post.title}</TableCell>
      <TableCell>
        {post.createdAt}
      </TableCell>
      <TableCell>
        <DeletePostIcon onClick={() => handlePostDeleting(post.id)} />
      </TableCell>
    </TableRow>
  );
};

PostsTableRow.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    createdBy: PropTypes.string.isRequired,
  }).isRequired,
};

export default PostsTableRow;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PropTypes from 'prop-types';

import { Fetching, Popup } from '@ui/components';

import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
} from '@material-ui/core';


import { PostsPaging, PostsTableRow } from './components';

// @FakeData
const fakeData = [
  {
    id: 1,
    title: 'Bài viết đầu tiên',
    createAt: '1997-02-10',
  },
  {
    id: 2,
    title: 'Bài viết thứ hai',
    createAt: '1997-02-10',
  },
  {
    id: 3,
    title: 'Bài viết thứ ba',
    createAt: '1997-02-10',
  },
  {
    id: 4,
    title: 'Bài viết thứ tư',
    createAt: '1997-02-10',
  },
  {
    id: 5,
    title: 'Bài viết thứ năm',
    createAt: '1997-02-10',
  },
];

// @Component
const PostsTable = (props) => {
  const { data, setPostList } = props;
  const [isFetching, setIsFetching] = useState(false);
  const [isOpenPopup, setOpenPopup] = useState(false);
  return (
    <Card>
      <CardContent>
        <div>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                  />
                </TableCell>
                <TableCell>ID</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Option</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                data.map(post => (
                  <PostsTableRow
                    key={post.id}
                    post={post}
                    setIsFetching={setIsFetching}
                    setOpenPopup={setOpenPopup}
                    setPostList={postList => setPostList(postList)}
                  />
                ))
              }
            </TableBody>
          </Table>
        </div>
      </CardContent>
      <PostsPaging />

      <Popup
        open={isOpenPopup}
        setOpenPopup={isOpen => setOpenPopup(isOpen)}
        content="Something wrong on server"
      />
      {isFetching ? <Fetching size="40px" /> : null}
    </Card>
  );
};

PostsTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      updatedAt: PropTypes.string.isRequired,
      createdBy: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default PostsTable;

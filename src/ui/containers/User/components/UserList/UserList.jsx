import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Card,
  CardContent,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';

import PostsPaging from './PostsPaging';

const LinkToUserDetailv = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline !important;
    color: ${({ theme }) => theme.color.blue} !important;
  }
`;

// @FakeData
const userList = [
  {
    id: 1,
    name: 'Bài viết đầu tiên',
    siteUrl: '1997-02-10',
    phone: 'aaaa',
    email: 'aaa',
    createdAt: 'âaa',
    updatedAt: 'aaaa',

  },
  {
    id: 2,
    name: 'Bài viết thứ hai',
    siteUrl: '1997-02-10',
    phone: 'aaaa',
    email: 'aaa',
    createdAt: 'âaa',
    updatedAt: 'aaaa',

  },
  {
    id: 3,
    name: 'Bài viết thứ ba',
    siteUrl: '1997-02-10',
    phone: 'aaaa',
    email: 'aaa',
    createdAt: 'âaa',
    updatedAt: 'aaaa',

  },
  {
    id: 4,
    name: 'Bài viết thứ tư',
    siteUrl: '1997-02-10',
    phone: 'aaaa',
    email: 'aaa',
    createdAt: 'âaa',
    updatedAt: 'aaaa',

  },
  {
    id: 5,
    name: 'Bài viết thứ năm',
    siteUrl: '1997-02-10',
    phone: 'aaaa',
    email: 'aaa',
    createdAt: 'âaa',
    updatedAt: 'aaaa',

  },
];

// @Component
// eslint-disable-next-line react/prefer-stateless-function
class UserList extends Component {
  render() {
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
                  <TableCell>Name</TableCell>
                  <TableCell>SiteUrl</TableCell>
                  <TableCell>Phone</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>CreatedAt</TableCell>
                  <TableCell>UpdatedAt</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  userList.map(user => (
                    <TableRow
                      hover
                      key={user.id}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <LinkToUserDetailv to={`/user-detail/${user.id}`}>
                          <Typography variant="body1">{user.id}</Typography>
                        </LinkToUserDetailv>
                      </TableCell>
                      <TableCell>{user.name}</TableCell>
                      <TableCell>
                        {user.siteUrl}
                      </TableCell>
                      <TableCell>
                        {user.phone}
                      </TableCell>
                      <TableCell>
                        {user.email}
                      </TableCell>
                      <TableCell>
                        {user.createdAt}
                      </TableCell>
                      <TableCell>
                        {user.updatedAt}
                      </TableCell>
                    </TableRow>
                  ))
                }
              </TableBody>
            </Table>
          </div>
        </CardContent>
        <PostsPaging />
      </Card>
    );
  }
}

export default UserList;

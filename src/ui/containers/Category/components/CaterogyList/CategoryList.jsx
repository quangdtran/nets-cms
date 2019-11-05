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

const LinkToCategoryDetailv = styled(Link)`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline !important;
    color: ${({ theme }) => theme.color.blue} !important;
  }
`;

// @FakeData
const categoryList = [
  {
    id: 1,
    title: 'Bài viết đầu tiên',
    category: '1997-02-10',
  },
  {
    id: 2,
    title: 'Bài viết thứ hai',
    category: '1997-02-10',
  },
  {
    id: 3,
    title: 'Bài viết thứ ba',
    category: '1997-02-10',
  },
  {
    id: 4,
    title: 'Bài viết thứ tư',
    category: '1997-02-10',
  },
  {
    id: 5,
    title: 'Bài viết thứ năm',
    category: '1997-02-10',
  },
];

// @Component
// eslint-disable-next-line react/prefer-stateless-function
class CategoryList extends Component {
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
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  categoryList.map(category => (
                    <TableRow
                      hover
                      key={category.id}
                      style={{ cursor: 'pointer' }}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          color="primary"
                          value="true"
                        />
                      </TableCell>
                      <TableCell>
                        <LinkToCategoryDetailv to={`/category-detail/${category.id}`}>
                          <Typography variant="body1">{category.id}</Typography>
                        </LinkToCategoryDetailv>
                      </TableCell>
                      <TableCell>{category.title}</TableCell>
                      <TableCell>
                        {category.category}
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

export default CategoryList;

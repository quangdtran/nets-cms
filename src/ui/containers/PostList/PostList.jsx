import React, { Component } from 'react';

import articleService from '@src/services/article.service';

import {
  WrapPosts,
} from './styled';

import {
  PostsHeader,
  PostsTable,
} from './components';

export default class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postList: null,
    };
  }

  async componentDidMount() {
    const { data } = await articleService.getList();
    this.setState({ postList: data });
  }

  // @Method
  setPostList(postList) {
    this.setState({ postList });
  }

  render() {
    const { postList: data } = this.state;
    return (
      <WrapPosts>
        <PostsHeader />
        {
          data
            ? <PostsTable setPostList={postList => this.setPostList(postList)} data={data} />
            : null
        }
      </WrapPosts>
    );
  }
}

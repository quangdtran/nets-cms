import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import articleService from '@src/services/article.service';

import {
  FormControl,
  NativeSelect,
} from '@material-ui/core';

import {
  Fetching,
  Popup,
} from '@src/ui/components';

import {
  PostForm,
  WrapPostDetail,
  WrapPostTextField,
  WrapTitleInput, Title,
  PostTextField,
  SubmitButton,
  WrapPostEditor,
  WrapTitleEditor,
  WrapTagMention,
  BootstrapInput,
} from './styled';

import {
  PostEditor,
  TagMention,
} from './components';

const categories = [
  {
    id: 1,
    title: 'Internal Alignment',
    content: '',
  },
  {
    id: 2,
    title: 'Category Definition',
    content: '',
  },
  {
    id: 3,
    title: 'Category Assignment',
    content: '',
  },
];

class PostDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      title: '',
      categoryId: '',
      description: null,
      content: null,
      tags: [],
      userId: '',
      clientId: '',
      postLoading: false,
      redirectToPosts: false,
      isFetching: false,
      showPopup: false,
    };
  }

  // LIFECYCLE
  async componentDidMount() {
    const { isUploading, content } = this.state;
    const { match: { params } } = this.props;
    if (params.id) {
      this.setState({ postLoading: true });
      try {
        const { data: post } = await articleService.getById(params.id);
        this.setState({
          id: post.id,
          title: post.title,
          categoryId: post.categories,
          description: post.description,
          content: post.content,
          tags: post.tags,
          userId: post.userId,
          clientId: post.clientId,
          postLoading: false,
        });
      } catch (error) {
        this.setState({
          postLoading: false,
          showPopup: true,
        });
      }
    }
  }

  // METHODS
  setContentPostEditor(postContent) {
    this.setState({ content: postContent });
  }

  setDescriptionPostEditor(postDescription) {
    this.setState({ description: postDescription });
  }

  setOpenPopup(isOpen) {
    this.setState({ showPopup: isOpen });
  }

  handleInputForm(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  async handlePostUpdating() {
    const post = {
      id: this.state.id,
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      tags: this.state.tags,
      userId: this.state.userId,
      clientId: this.state.clientId,
    };
    this.setState({ isFetching: true });
    try {
      await articleService.update(post);
      this.setState({ redirectToPosts: true });
    } catch (error) {
      this.setState({
        isFetching: false,
        showPopup: true,
      });
    }
  }

  async handlePostCreating() {
    const { currentUser } = this.props;
    const post = {
      title: this.state.title,
      description: this.state.description,
      content: this.state.content,
      userId: currentUser.id,
      clientId: currentUser.clientId,
    };
    this.setState({ isFetching: true });
    try {
      await articleService.create(post);
      this.setState({ redirectToPosts: true });
    } catch (error) {
      this.setState({
        isFetching: false,
        showPopup: true,
      });
    }
  }

  renderButton() {
    const { match: { params } } = this.props;
    const { isFetching } = this.state;
    if (params.id) {
      return (
        <SubmitButton
          onClick={() => this.handlePostUpdating()}
        >
          Update
          {isFetching ? <Fetching size="20px" /> : null}
        </SubmitButton>
      );
    }

    return (
      <SubmitButton
        onClick={() => this.handlePostCreating()}
      >
        Create
        {isFetching ? <Fetching size="20px" /> : null}
      </SubmitButton>
    );
  }

  renderPostEditor(value) {
    return (
      <PostEditor
        content={value}
        setContentPostEditor={
          text => this.setDescriptionPostEditor(text)
        }
      />
    );
  }

  render() {
    const { redirectToPosts, showPopup, postLoading } = this.state;
    if (redirectToPosts) {
      return (
        <Redirect
          to={{
            pathname: '/posts',
            state: { id: '' },
          }}
        />
      );
    }
    return (
      <WrapPostDetail>
        <PostForm autoComplete="off">

          {/* @Title */}
          <WrapPostTextField>
            <WrapTitleInput>
              <Title>Title</Title>
            </WrapTitleInput>
            <PostTextField
              margin="normal"
              variant="outlined"
              id="outlined-name"
              name="title"
              value={this.state.title}
              placeholder="Text input..."
              onChange={evt => this.handleInputForm(evt)}
            />
          </WrapPostTextField>

          {/* @Category */}
          <WrapPostTextField>
            <WrapTitleInput>
              <Title>Category</Title>
            </WrapTitleInput>
            <FormControl style={{ width: '85%' }} variant="outlined">
              <NativeSelect
                value={1}
                input={<BootstrapInput />}
              >
                <option value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Thirty</option>
              </NativeSelect>
            </FormControl>
          </WrapPostTextField>

          {/* @Description */}
          <WrapPostEditor>
            <WrapTitleEditor>
              <Title>Description</Title>
            </WrapTitleEditor>
            <PostEditor
              content={this.state.description}
              setContentPostEditor={
                text => this.setDescriptionPostEditor(text)
              }
            />
          </WrapPostEditor>

          {/* @Content */}
          <WrapPostEditor>
            <WrapTitleEditor>
              <Title>Content</Title>
            </WrapTitleEditor>
            <PostEditor
              content={this.state.content}
              setContentPostEditor={
                text => this.setContentPostEditor(text)
              }
            />
          </WrapPostEditor>

          {/* @Tags */}
          <WrapPostTextField>
            <WrapTitleInput>
              <Title>Tags</Title>
            </WrapTitleInput>
            <WrapTagMention>
              <TagMention />
            </WrapTagMention>
          </WrapPostTextField>

          {/* @Test UI */}
          <div style={{ width: '100%', height: '100px' }} />

          <WrapPostTextField>
            <WrapTitleInput>
              {this.renderButton()}
            </WrapTitleInput>
            <WrapTagMention />
          </WrapPostTextField>

          {/* @Loading */}
          {postLoading ? <Fetching size="35px" /> : null}
        </PostForm>

        {/* @Dialog */}
        <Popup
          open={showPopup}
          setOpenPopup={isOpen => this.setOpenPopup(isOpen)}
          content="Something wrong on server"
        />

        {/* @Test UI */}
        <div style={{ width: '100%', height: '100px' }} />
      </WrapPostDetail>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.login.currentUser,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {

//   };
// };

PostDetail.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }),
};

PostDetail.defaultProps = {
  currentUser: null,
};

export default connect(mapStateToProps, null)(PostDetail);

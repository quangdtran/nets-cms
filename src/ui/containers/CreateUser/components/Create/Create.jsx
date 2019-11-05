import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import styled from 'styled-components';

import {
  TextField,
  FormControl,
  NativeSelect,
  InputBase,
  withStyles,
  Button,
} from '@material-ui/core';


const WrapUserDetail = styled.div`
  /* overflow-y: auto; */
  box-sizing: border-box;
`;

const WrapTagMention = styled.div`
  width: 85%;
`;

const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 100px;
`;

const WrapUserTextField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

// const WrapPostEditor = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 100%;
//   margin: 20px 0;
// `;

const WrapTitleInput = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

// const WrapTitleEditor = styled(WrapTitleInput)`
//   display: flex;
//   align-items: center;
//   height: 40px;
// `;

const Title = styled.h4`
  letter-spacing: 1px;
  text-align: left;
  color: ${({ theme }) => theme.color.grey};
`;

const UserTextField = styled(TextField)`
  width: 85% !important;
  background-color: white !important;
`;

// const categories = [
//   {
//     id: 1,
//     title: 'Internal Alignment',
//     content: '',
//   },
//   {
//     id: 2,
//     title: 'Category Definition',
//     content: '',
//   },
//   {
//     id: 3,
//     title: 'Category Assignment',
//     content: '',
//   },
// ];

class Create extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      siteUrl: '',
      email: '',
    };
  }

  // LIFECYCLE
  componentDidMount() {
  }

  // METHODS
  // setContentPostEditor(postContent) {
  //   this.setState({ content: postContent });
  // }

  // setDescriptionPostEditor(postDescription) {
  //   this.setState({ description: postDescription });
  // }

  handleInputForm(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    // const { isUploading, content } = this.state;
    return (
      <WrapUserDetail>
        <UserForm autoComplete="off">

          {/* @Title */}
          <WrapUserTextField>
            <WrapTitleInput>
              <Title>Name</Title>
            </WrapTitleInput>
            <UserTextField
              margin="normal"
              variant="outlined"
              id="outlined-name"
              name="title"
              value={this.state.name}
              placeholder="Text input..."
              onChange={evt => this.handleInputForm(evt)}
            />
          </WrapUserTextField>

          <WrapUserTextField>
            <WrapTitleInput>
              <Title>Phone</Title>
            </WrapTitleInput>
            <UserTextField
              margin="normal"
              variant="outlined"
              id="outlined-name"
              name="title"
              value={this.state.phone}
              placeholder="Text input..."
              onChange={evt => this.handleInputForm(evt)}
            />
          </WrapUserTextField>

          <WrapUserTextField>
            <WrapTitleInput>
              <Title>Email</Title>
            </WrapTitleInput>
            <UserTextField
              margin="normal"
              variant="outlined"
              id="outlined-name"
              name="title"
              value={this.state.email}
              placeholder="Text input..."
              onChange={evt => this.handleInputForm(evt)}
            />
          </WrapUserTextField>
          <WrapUserTextField>
            <WrapTitleInput>
              <Title>SiteUrl</Title>
            </WrapTitleInput>
            <UserTextField
              margin="normal"
              variant="outlined"
              id="outlined-name"
              name="title"
              value={this.state.siteUrl}
              placeholder="Text input..."
              onChange={evt => this.handleInputForm(evt)}
            />
          </WrapUserTextField>


          <WrapUserTextField>
            <WrapTitleInput>
              <Button
                style={{
                  backgroundColor: '#3ec54a',
                  color: 'white',
                }}
              >
                Create
              </Button>
            </WrapTitleInput>
            <WrapTagMention />
          </WrapUserTextField>
        </UserForm>
      </WrapUserDetail>
    );
  }
}

export default Create;

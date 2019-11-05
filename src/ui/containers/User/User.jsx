import React, { Component } from 'react';

import {
  UserList,
  UserHeader,
  // CreateUser,
} from './components';


class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create: false,
    };
    // this.openForm = this.openForm.bind(this);
    // this.closeForm = this.closeForm.bind(this);
  }

  // openForm() {
  //   this.setState({
  //     create: true,
  //   });
  // }

  // closeForm() {
  //   this.setState({
  //     create: false,
  //   });
  // }

  render() {
    // const open = this.state.create === true ? <CreateUser /> : null;
    return (
      <div style={{ margin: 30 }}>
        <UserHeader />
        <UserList />
      </div>
    );
  }
}

export default User;

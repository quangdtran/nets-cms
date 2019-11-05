// import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// import {
//   Button,
// } from '@material-ui/core';

import {
  Create,
} from './components';


class CreateCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create: false,
    };
  }

  render() {
    return (
      <div style={{ margin: 30 }}>
        <Create />
      </div>
    );
  }
}

export default CreateCategory;

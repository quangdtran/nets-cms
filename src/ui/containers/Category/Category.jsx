// import ReactDOM from 'react-dom';
import React, { Component } from 'react';

// import {
//   Button,
// } from '@material-ui/core';

import {
  CaterogyList,
  CategoryHeader,
} from './components';


class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // create: false,
    };
  }

  render() {
    return (
      <div style={{ margin: 30 }}>
        <CategoryHeader />
        <CaterogyList />
      </div>
    );
  }
}

export default Category;

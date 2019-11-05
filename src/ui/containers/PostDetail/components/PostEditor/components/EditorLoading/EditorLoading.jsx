import React, { Component } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const WrapEditorLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: RGBA(51,51,51,0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const ProgressLoading = styled(CircularProgress)`
  z-index: 2;
`;


export default class EditorLoading extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <WrapEditorLoading>
        <ProgressLoading />
      </WrapEditorLoading>
    );
  }
}

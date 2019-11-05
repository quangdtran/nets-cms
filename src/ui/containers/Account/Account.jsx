import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
// import AccountProfile from './components/AccountProfile/AccountProfile';
// import AccountDetails from './components/AccountDetails/AccountDetails';

import {
  AccountDetails,
  AccountProfile,
} from './components';

const TotalGid = styled.div`
  padding: 30px 40px;
`;


export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <TotalGid>
        <Grid
          container
          spacing={4}
        >
          <Grid
            item
            lg={4}
            md={6}
            xl={4}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xl={8}
            xs={12}
          >
            <AccountDetails />
          </Grid>
        </Grid>
      </TotalGid>
    );
  }
}

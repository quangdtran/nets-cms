
import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from '@material-ui/core';

import styled from 'styled-components';

const InputText = styled(TextField)`
   width: 321;
   margin-bottom: 15,
`;


const states = [
  {
    value: 'alabama',
    label: 'Alabama',
  },
  {
    value: 'new-york',
    label: 'New York',
  },
  {
    value: 'san-francisco',
    label: 'San Francisco',
  },
];


export default class AccountDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: 'Shen',
      lastName: 'Zhi',
      email: 'shen.zhi@devias.io',
      phone: '',
      state: 'Alabama',
      country: 'USA',
    };
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    const { ...rest } = this.props;
    const {
      firstName, lastName, email, phone, state, country,
    } = this.state;
    return (
      <Card>
        <form
          autoComplete="off"
          noValidate
        >
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  helperText="Please specify the first name"
                  label="First name"
                  margin="dense"
                  name="firstName"
                  onChange={event => this.handleChange(event)}
                  required
                  value={firstName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  label="Last name"
                  margin="dense"
                  name="lastName"
                  onChange={event => this.handleChange(event)}
                  required
                  value={lastName}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  label="Email Address"
                  margin="dense"
                  name="email"
                  onChange={event => this.handleChange(event)}
                  required
                  value={email}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  label="Phone Number"
                  margin="dense"
                  name="phone"
                  onChange={event => this.handleChange(event)}
                  type="number"
                  value={phone}
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  label="Select State"
                  margin="dense"
                  name="state"
                  onChange={event => this.handleChange(event)}
                  required
                  select
                  // eslint-disable-next-line react/jsx-sort-props
                  SelectProps={{ native: true }}
                  value={state}
                  variant="outlined"
                >
                  {states.map(option => (
                    <option
                      key={option.value}
                      value={option.value}
                    >
                      {option.label}
                    </option>
                  ))}
                </InputText>
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >
                <InputText
                  style={{ width: 321, marginBottom: 15 }}
                  label="Country"
                  margin="dense"
                  name="country"
                  onChange={event => this.handleChange(event)}
                  required
                  value={country}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>
            <Button
              color="primary"
              variant="contained"
            >
              Save details
            </Button>
          </CardActions>
        </form>
      </Card>
    );
  }
}

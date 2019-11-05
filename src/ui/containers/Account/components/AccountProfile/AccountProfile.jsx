import React, { Component } from 'react';
import styled from 'styled-components';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Typography,
  Divider,
  Button,
  LinearProgress,
} from '@material-ui/core';

const UploadButton = styled(Button)`
    margin: 10;
`;

const CurrentAvatar = styled(Avatar)`
      margin-left: 57 !important;
      height: 110 !important;
      width: 100 !important;
      flex-shrink: 0;
      flex-grow: 0;
`;


const Total = styled.div`
   display: flex !important; 
   margin-bottom: 10 !important;
`;

export default class AccountProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Shen Zhi',
      city: 'Los Angeles',
      country: 'USA',
      timezone: 'GTM-7',
      avatar: 'https://react-material-dashboard.devias.io/images/avatars/avatar_11.png',
    };
  }

  render() {
    const {
      name, city, country, avatar,
    } = this.state;
    // eslint-disable-next-line no-console
    // console.log(name);
    return (
      <Card style={{ marginRight: '20px' }}>
        <CardContent>
          <Total style={{ marginBottom: '10px' }}>
            <div style={{ color: 'white' }}>
              <Typography
                gutterBottom
                variant="h2"
                style={{ fontSize: '20px' }}
              >
                {name}
              </Typography>
              <Typography
                color="textSecondary"
                variant="body1"
              >
                {city}, {country}
              </Typography>
              <Typography
                color="textSecondary"
                variant="time"
              >
                04:34 PM (GTM-7)
              </Typography>
            </div>
            <CurrentAvatar
              style={{ width: '100px', height: '110px', marginLeft: 57 }}
              src={avatar}
            />
          </Total>
          <div>
            <Typography variant="body1">Profile Completeness: 70%</Typography>
            <LinearProgress
              value={70}
              variant="determinate"
            />
          </div>
        </CardContent>
        <Divider />
        <CardActions>
          <UploadButton
            color="primary"
            variant="text"
          >
            Upload picture
          </UploadButton>
          <Button variant="text">
            Remove picture
          </Button>
        </CardActions>
      </Card>
    );
  }
}

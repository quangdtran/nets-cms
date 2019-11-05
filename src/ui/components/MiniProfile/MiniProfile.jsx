import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
  Avatar, Typography,
} from '@material-ui/core';

const WrapMiniProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  min-height: fit-content;
  margin-top: 24px;
`;

const WrapUserAvatar = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  margin: 0;
`;

const UserAvatar = styled(Avatar)`
  width: 60px !important;
  height: 60px !important;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);

`;

// fake data
const user = {
  name: 'Shen Zhi',
  avatar: '/images/avatars/avatar_11.png',
  bio: 'Brain Director',
};

const MiniProfile = (props) => {
  return (
    <WrapMiniProfile>
      <WrapUserAvatar>
        <UserAvatar
          alt="Person"
          component={Link}
          src="https://react-material-dashboard.devias.io/images/avatars/avatar_11.png"
          to="/settings"
        />
      </WrapUserAvatar>
      <Typography
        // className={classes.name}
        variant="h4"
      >
        {props.username}
      </Typography>
      <Typography variant="body2">{user.bio}</Typography>
    </WrapMiniProfile>
  );
};

export default MiniProfile;

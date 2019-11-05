import React from 'react';
import { CircularProgress } from '@material-ui/core';

import PropTypes from 'prop-types';

import styled from 'styled-components';

const WrapFetching = styled.div`
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

const Fetch = styled(CircularProgress)`
  width: ${({ width }) => width} !important;
  height: ${({ height }) => height} !important;
  z-index: 2;
`;

const Fetching = (props) => {
  const { size } = props;
  return (
    <WrapFetching>
      <Fetch width={size} height={size} />
    </WrapFetching>
  );
};

Fetching.propTypes = {
  size: PropTypes.string,
};

Fetching.defaultProps = {
  size: '40px',
};

export default Fetching;

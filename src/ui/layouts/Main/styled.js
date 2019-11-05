import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const WrapApp = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  /* background: ${({ theme }) => theme.color.red}; */
`;

export const Message = styled.h3`
  color: ${({ theme }) => theme.color.green};
`;

export const Error = styled.h3`
  color: ${({ theme }) => theme.color.red};
`;

export const WrapAppBody = styled(Grid)`
  height: 100%;
  width: 100%;
`;

export const WrapMainContent = styled.div`
  height: 100%;
  width: 100%;
  padding-left: 240px;
  margin-top: 64px;
  background-color: ${({ theme }) => theme.bgColor.mainContent};
  overflow-y: auto;
`;

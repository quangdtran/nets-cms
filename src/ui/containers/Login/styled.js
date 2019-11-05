import styled from 'styled-components';
import {
  Card,
  Button,
  Grid,
  Typography,
} from '@material-ui/core';

export const ErrorMessage = styled.i`
  display: inline-block;
  margin: 10px 0;
  color: ${({ theme }) => theme.color.loginError};
`;

// MATERIAL-UI
export const WrapLogin = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.bgColor.wrapLogin};
  overflow-y: auto;
`;

export const QueteContainer = styled(Grid)`

`;

export const Quote = styled.div`
  /* background-color: 1; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(https://react-material-dashboard.devias.io/images/auth.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const QuoteInner = styled.div`
  text-align: center;
  flex-basis: 600px;
`;

export const QuoteText = styled(Typography)`
  color: white !important;
  font-weight: 300 !important;
`;

export const WrapLoginForm = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
`;

export const LoginForm = styled.form`
  padding-left: 100px;
  padding-right: 100px;
  padding-bottom: 125px;
  padding-top: 125px;
  flex-basis: 535px;
  text-align: center;
`;

export const LoginContainer = styled(Grid)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Typography)`
  margin-top: 24px;
`;

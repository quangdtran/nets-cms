import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {
  TextField,
  Grid,
  Typography,
  Button,
  withStyles,
} from '@material-ui/core';

import PropTypes from 'prop-types';

import {
  Facebook as FacebookIcon,
  Google as GoogleIcon,
} from '@ui/icons';

import accountService from '@src/services/account.service';
import accountTest from '@src/services/accountTest';
import { Header } from '@src/ui/components';
import {
  userLogin,
  userLoginSuccess,
  userLogout,
} from '@actions/login.action';

import {
  WrapLogin,
  LoginForm,
  ErrorMessage,
  Quote,
  QuoteInner,
  QuoteText,
  WrapLoginForm,
  Title,
  LoginContainer,
} from './styled';

// const theme = useTheme();

const styles = themeUI => ({
  containerQuote: {
    [themeUI.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  loginForm: {
    [themeUI.breakpoints.down('xs')]: {
      padding: 10,
    },
  },
  loginSocialMedia: {
    [themeUI.breakpoints.down('xs')]: {
      padding: '0 !important',
      paddingBottom: '30px !important',
    },
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isLoading: true,
      isRedirectToApp: false,
    };
  }

  // LIFECYCLE:
  async componentDidMount() {
    const accessToken = window.localStorage.getItem('access_token');

    if (accessToken) {
      this.setState({
        isLoading: false,
        isRedirectToApp: true,
      });
    } else {
      this.setState({
        isLoading: false,
        isRedirectToApp: false,
      });
    }
  }

  // METHODS:
  getInfoTextField(evt) {
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  handleKeyDownLogin(evt) {
    const { username, password } = this.state;
    if (evt.key === 'Enter') this.props.userLogin(username, password);
  }

  render() {
    const {
      isFetching,
      isLogin,
      reason,
      classes,
    } = this.props;

    const {
      username,
      password,
      isLoading,
      isRedirectToApp,
    } = this.state;

    if (isLoading) return null;
    if (isRedirectToApp || isLogin) return <Redirect to="/" />;
    return (
      <WrapLogin>
        <Header />
        <Grid style={{ height: '100%', marginTop: 64 }} container>
          <Grid
            item
            lg={5}
            className={classes.containerQuote}
          >
            <Quote>
              <QuoteInner>
                <QuoteText variant="h4">
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </QuoteText>
              </QuoteInner>
            </Quote>
          </Grid>
          <LoginContainer
            item
            lg={7}
            xs={12}
          >
            <WrapLoginForm>
              <LoginForm className={classes.loginForm}>
                <Title variant="h4">Sign In</Title>
                <Typography
                  color="textSecondary"
                  gutterBottom
                >
                  Sign in with social media
                </Typography>
                <Grid
                  container
                  spacing={40}
                  size="large"
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 24,
                  }}
                >
                  <Grid
                    item
                    className={classes.loginSocialMedia}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      color="primary"
                      size="large"
                      variant="contained"
                    >
                      <FacebookIcon />
                      Login with Facebook
                    </Button>
                  </Grid>
                  <Grid
                    item
                    className={classes.loginSocialMedia}
                    style={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Button
                      style={{ backgroundColor: 'white' }}
                      size="large"
                      variant="contained"
                    >
                      <GoogleIcon />
                      Login with Google
                    </Button>
                  </Grid>
                </Grid>
                <Typography
                  align="center"
                  color="textSecondary"
                  variant="body1"
                  style={{
                    marginTop: 16,
                  }}
                >
                  or login with your account
                </Typography>

                <TextField
                  fullWidth
                  label="User Name"
                  name="username"
                  type="text"
                  variant="outlined"
                  style={{
                    marginTop: 16,
                  }}
                  value={username}
                  onChange={evt => this.getInfoTextField(evt)}
                  onKeyDown={evt => this.handleKeyDownLogin(evt)}
                />
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  style={{
                    marginTop: 16,
                  }}
                  value={password}
                  onChange={evt => this.getInfoTextField(evt)}
                  onKeyDown={evt => this.handleKeyDownLogin(evt)}
                />
                <Button
                  color="primary"
                  fullWidth
                  size="large"
                  variant="contained"
                  style={{
                    marginTop: 16,
                  }}
                  onClick={() => this.props.userLogin(username, password)}
                >
                  Sign in now
                </Button>
                {reason ? <ErrorMessage>{reason}</ErrorMessage> : null}
              </LoginForm>
            </WrapLoginForm>
          </LoginContainer>
        </Grid>
      </WrapLogin>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isFetching: state.login.isFetching,
    isLogin: state.login.isLogin,
    reason: state.login.reason,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (username, password) => dispatch(userLogin(username, password)),
    userLoginSuccess: () => dispatch(userLoginSuccess()),
    userLogout: () => dispatch(userLogout()),
  };
};

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  isFetching: PropTypes.bool.isRequired,
  isLogin: PropTypes.bool.isRequired,
  reason: PropTypes.string,
};

Login.defaultProps = {
  reason: null,
};

export default withStyles(styles)(
  connect(mapStateToProps, mapDispatchToProps)(Login),
);

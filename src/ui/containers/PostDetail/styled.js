
import styled from 'styled-components';

import {
  TextField,
  Button,
  InputBase,
  withStyles,
} from '@material-ui/core';

export const WrapPostDetail = styled.div`
  box-sizing: border-box;
`;

export const WrapTagMention = styled.div`
  width: 85%;
`;

export const PostForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 100px;
`;

export const WrapPostTextField = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 20px 0;
`;

export const WrapPostEditor = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin: 20px 0;
`;

export const WrapTitleInput = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
`;

export const WrapTitleEditor = styled(WrapTitleInput)`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const Title = styled.h4`
  letter-spacing: 1px;
  text-align: left;
  color: ${({ theme }) => theme.color.grey};
`;

export const PostTextField = styled(TextField)`
  width: 85% !important;
  background-color: white !important;
`;

export const SubmitButton = styled(Button)`
  color: white !important;
  background-color: ${({ theme }) => theme.bgColor.green} !important;
`;

export const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: 3,
    },
  },
  input: {
    margin: '0 !important',
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 0 10px 0',
    width: '100%',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    backgroundColor: 'white',
    '&:focus': {
      borderRadius: 4,
      borderColor: 'rgb(63, 81, 181) !important',
      borderWidth: '2px !important',
    },
    '&:hover': {
      borderRadius: 4,
      borderColor: 'black',
      borderWidth: 1,
    },
  },
}))(InputBase);

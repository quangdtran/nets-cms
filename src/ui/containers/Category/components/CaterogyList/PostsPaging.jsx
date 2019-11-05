import React from 'react';

import styled from 'styled-components';

import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

import {
  Button,
} from '@material-ui/core';

const WrapPostsPaging = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0;
`;

const PageNumberBtn = styled(Button)`
  width: 30px;
  height: 40px;
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  color: ${({ theme, isslected }) => (isslected === 'true' ? theme.color.blue : 'black')} !important;
  font-weight: 600 !important;
`;

const pageNumber = 5;

const PostsPaging = () => {
  const renderPageNumber = (number) => {
    const pageNumberBtns = [];
    for (let i = 0; i < number; i++) {
      pageNumberBtns.push(i + 1);
    }
    return pageNumberBtns;
  };
  return (
    <WrapPostsPaging>
      <PageNumberBtn>
        <NavigateBeforeIcon
          style={{ cursor: 'pointer' }}
        />
      </PageNumberBtn>
      {
        renderPageNumber(pageNumber)
          .map(number => (
            <PageNumberBtn
              key={number}
              isslected={number === 1 ? 'true' : null}
            >{number}
            </PageNumberBtn>
          ))
      }
      <PageNumberBtn>
        <NavigateNextIcon
          style={{ cursor: 'pointer' }}
        />
      </PageNumberBtn>
    </WrapPostsPaging>
  );
};

export default PostsPaging;

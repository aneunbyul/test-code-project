import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styled from 'styled-components';

const SubNavHeader = ({text, button}) => {
  return (
    <SubNavHeaderContainer>
      <SubNavHeaderTitle component="span"> {text} </SubNavHeaderTitle>
      {button == null ? null : button}
    </SubNavHeaderContainer>
  );
};

SubNavHeader.defaultProps = {
  text: 'Null',
  button: null,
};

const SubNavHeaderContainer = styled(Box)`
  &&& {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: calc(var(--box-contracted-length) * 0.72);
    padding: 0 1rem;
  }
`;

const SubNavHeaderTitle = styled(Box)`
  &&& {
    font-size: calc(var(--global-text-size));
    font-weight: 500;
    color: var(--light01);
    margin-left: 0.3rem;
  }
`;

export default SubNavHeader;

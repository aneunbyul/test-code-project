import * as React from 'react';
import {Box, Divider} from '@mui/material';
import styled from 'styled-components';

const FormDivider = (props) => {
  return (
    <FormDividerContainer
      sx={{
        marginTop: '2rem',
        marginBottom: '1.5rem',
        ...(props.text != null && {
          marginTop: '2rem',
          marginBottom: '2.8rem',
        }),
        ...(props.size == 'compact' && {
          marginTop: '0',
          marginBottom: '0',
        }),
      }}>
      <DividingLine />
      {props.text != null && (
        <DividingTextContainer>
          <BackgroundComponent>
            <DividingText>{props.text}</DividingText>
          </BackgroundComponent>
        </DividingTextContainer>
      )}
    </FormDividerContainer>
  );
};

FormDivider.defualtProps = {
  text: null,
};

const FormDividerContainer = styled(Box)`
  position: relative;
  width: 100%;
`;

const DividingLine = styled.hr`
  position: relative;
  width: 100%;
  border-top: 0.1rem solid var(--dark01);
  border-bottom: 0.1rem solid var(--dark03);
  border-width: 0.1rem;
`;

const DividingTextContainer = styled(Box)`
  position: absolute;
  top: 0.28rem;
  left: 0;
  width: 100%;
  text-align: center;
`;

const BackgroundComponent = styled.div`
  position: relative;
  width: auto;
  display: inline;
  background-color: var(--dark02);
  border: 0.1rem solid var(--dark03);
  border-top-width: 0;
  border-radius: 0 0 1rem 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 0.3rem;
  padding-bottom: 0.5rem;
  user-select: none;
`;

const DividingText = styled.span`
  font-weight: 500;
  color: var(--light02);
  font-size: calc(var(--global-text-size) * 1.34);
`;

export default FormDivider;

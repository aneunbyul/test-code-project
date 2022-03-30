import * as React from 'react';
import {Box, Divider} from '@mui/material';
import styled from 'styled-components';

const FormDivider = (props) => {
  return (
    <FormDividerContainer
      sx={{
        marginBottom: '1.5rem',
        ...(props.text != null && {
          marginBottom: '2.8rem',
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
  margin-top: 2rem;
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
  padding-top: 0rem;
  padding-bottom: 0.3rem;
  user-select: none;
`;

const DividingText = styled.span`
  font-weight: 400;
  color: var(--light02);
  font-size: calc(var(--global-text-size) * 0.85);
`;

export default FormDivider;

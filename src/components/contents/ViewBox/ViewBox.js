import * as React from 'react';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styled from 'styled-components';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

const ViewBox = (props) => {
  return (
    <ViewBoxLayout {...useScrollFadeIn('', 0.1, 0.05)}>
      {props.children}
    </ViewBoxLayout>
  );
};

const ViewBoxLayout = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;

  background-color: var(--dark02);
  border-radius: var(--global-border-radius);
  box-shadow: 0 0 0 var(--line-thickness) var(--dark04);
  overflow: hidden;
`;

ViewBox.defaultProps = {
  children: null,
  scrollable: false,
};

export default ViewBox;

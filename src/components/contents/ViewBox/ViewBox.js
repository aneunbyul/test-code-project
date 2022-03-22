import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import styled from 'styled-components';
import AddBoxIcon from '@mui/icons-material/AddBox';
import Link from 'next/link';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

const ViewBox = ({children, scrollable}) => {
  return (
    <ViewBoxLayout {...useScrollFadeIn('', 0.1, 0.05)}>
      {children}
    </ViewBoxLayout>
  );
};

const ViewBoxLayout = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 100% !important;
  position: relative;
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

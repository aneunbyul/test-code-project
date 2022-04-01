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
import BackspaceIcon from '@mui/icons-material/Backspace';
import Link from 'next/link';
import {useRouter} from 'next/router';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import {useState, useEffect} from 'react';
import FilloutIcon from '../Icon/FilloutIcon';
import {PropaneSharp} from '@mui/icons-material';

const ConversionButton = ({icon, text, clickAction, clickActionValue}) => {
  return (
    <InteractiveButton
      variant="contained"
      onClick={() => {
        clickAction(clickActionValue);
      }}>
      {icon}
      <span>{text}</span>
    </InteractiveButton>
  );
};

ConversionButton.defaultProps = {
  icon: <FilloutIcon sx={{}} name="write" size="small" type="outlined" />,
  text: '',
  link: '',
  clickAction: function () {},
  clickActionValue: true,
};

const InteractiveButton = styled(Button)`
  &&& {
    position: absolute;
    right: 0.6rem;
    width: calc(var(--box-contracted-length) * 0.6);
    height: calc(var(--box-contracted-length) * 0.6);

    min-width: calc(var(--box-contracted-length) * 0.6);
    min-height: calc(var(--box-contracted-length) * 0.6);

    background-color: var(--highlight01);
    border-radius: calc(var(--global-border-radius) * 0.9);
  }

  &&&:hover {
    background-color: var(--highlight02);
  }

  &&& svg {
    fill: var(--light01);
  }

  &&& span {
    margin-bottom: 0.1rem !important;
    color: var(--light01);
  }
`;

export default ConversionButton;

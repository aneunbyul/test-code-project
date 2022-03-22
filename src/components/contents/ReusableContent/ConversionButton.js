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

const ConversionButton = ({icon, text, link}) => {
  return (
    <Link href={link}>
      <InteractiveButton variant="contained" onClick={() => {}}>
        {icon}
        <span>{text}</span>
      </InteractiveButton>
    </Link>
  );
};

ConversionButton.defaultProps = {
  icon: (
    <FilloutIcon
      sx={{
        marginLeft: '-12%',
        marginRight: '0.24rem',
      }}
      name="write"
      size="small"
      type="outlined"
    />
  ),

  text: 'Null',
  link: '',
};

const InteractiveButton = styled(Button)`
  & {
    position: relative;
    width: 90%;
    height: var(--box-contracted-length);

    background-color: var(--dark02);
    border-radius: calc(var(--global-border-radius) * 0.9);
    box-shadow: inset 0 0 0 var(--line-thickness) var(--dark04);
  }

  &:hover {
    background-color: var(--highlight01);
  }

  & svg {
    fill: var(--light01);
  }

  & span {
    margin-bottom: 0.1rem !important;
    color: var(--light01);
  }
`;

export default ConversionButton;

import styled, {css} from 'styled-components';
import Nav from './Nav';
import Link from 'next/link';
import {useContext, useEffect, useRef, useState} from 'react';
import logoIcon from '../../assets/logos/TelepixLogo_v2_white.webp';
import {Box} from '@material-ui/core';
import CardMedia from '@mui/material/CardMedia';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SearchBox from '../contents/ReusableContent/SearchBox';

const Header = () => {
  return (
    <HeaderLayout>
      {/*
      <Container>
        <LogoBox>
          <img src={logoIcon} />
        </LogoBox>
      </Container>
  */}
    </HeaderLayout>
  );
};

const HeaderLayout = styled.div`
  &&& {
    position: relative;
    grid-column-start: 1;
    grid-column-end: 4;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 calc(var(--line-thickness) * -1) 0 0 var(--dark04);
    background-color: var(--dark02);
    z-index: 1;
  }
`;

const Container = styled.div`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: var(--box-expanded-length) auto;
    align-items: center;
  }
`;

const LogoBox = styled.div`
  &&& {
    position: relative;
    display: 'flex';
    align-items: 'center';
    height: 100%;
  }
  &&& img {
    margin-left: 1rem;
    min-height: 0rem;
    max-height: 1.72rem;
    opacity: 0.7;
    z-index: 2;
  }
`;
export default Header;

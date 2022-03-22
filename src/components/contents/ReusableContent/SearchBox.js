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

const SearchBox = () => {
  return (
    <SearchBoxContainer component="form">
      <SearchButton type="submit" aria-label="search">
        <SearchIcon />
      </SearchButton>
      <SearchInputBox
        placeholder="직원이름, 소속 부서 기타 정보를 입력하세요."
        inputProps={{'aria-label': 'search'}}
      />
    </SearchBoxContainer>
  );
};

const HeaderLayout = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 3;
  width: 100%;
  height: var(--box-contracted-length);
  box-shadow: inset 0 calc(var(--line-thickness) * -1) 0 0 var(--dark04);
  background-color: var(--dark02);
  z-index: 1;
`;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: var(--box-expanded-length) auto;
  align-items: center;
`;

const LogoBox = styled.div`
  display: 'flex';
  align-items: 'center';
  & img {
    margin-left: 1rem;
    max-height: 1.72rem;
    opacity: 0.7;
    z-index: 2;
  }
`;

const SearchBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 40%;
  height: 70%;

  box-shadow: inset 0 0 0 var(--line-thickness) var(--dark04);
  border-radius: 99rem;
  background-color: var(--dark00);
`;

const SearchButton = styled(IconButton)`
  color: var(--light04);
`;

const SearchInputBox = styled(InputBase)`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & input {
    width: 100%;
    font-size: 0.86rem;
    font-weight: 400;
    color: white;
  }
`;

export default SearchBox;

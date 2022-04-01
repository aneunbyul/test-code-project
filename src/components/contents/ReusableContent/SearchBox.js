import styled, {css} from 'styled-components';
import Link from 'next/link';
import {useContext, useEffect, useRef, useState} from 'react';
import Box from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

const SearchBox = ({searchWords, handleSearchWords}) => {
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

SearchBox.defualtProps = {
  searchWords: '',
  handleSearchWords: function () {},
};

const SearchBoxContainer = styled.div`
  &&& {
    display: flex;
    flex-direction: row;
    align-items: center;

    width: 100%;
    height: 100%;

    box-shadow: inset 0 0 0 var(--line-thickness) var(--dark04);
    border-radius: var(--global-border-radius);
    background-color: var(--dark00);
  }
`;

const SearchButton = styled(IconButton)`
  &&& {
    color: var(--light04);
    margin-left: 0.4rem;
    background-color: transparent !important;
    box-shadow: none !important;
  }
`;

const SearchInputBox = styled(InputBase)`
  &&& {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
  }

  &&& input {
    width: 100%;
    font-size: var(--global-font-size);
    font-weight: 400;
    color: var(--light01);
    padding-right: 1rem;
  }
`;

export default SearchBox;

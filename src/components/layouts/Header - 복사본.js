import styled, { css } from "styled-components";
import Nav from "./Nav";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import logoIcon from "../../assets/icons/TelepixLogo_v1.webp";
import { Box } from "@material-ui/core";
import CardMedia from "@mui/material/CardMedia";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";

import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";

const Header = () => {
  return (
    <HeaderBox sx={ { display: "flex" } }>
      <LogoBox>
        <img src={ logoIcon } />
      </LogoBox>
      <SearchBox
        component="form"
        sx={ { p: "2px 4px", display: "flex", alignItems: "center", width: 500 } }>
        <SearchButton type="submit" sx={ { p: "10px" } } aria-label="search">
          <SearchIcon />
        </SearchButton>
        <SearchInputBox
          sx={ { ml: 1, flex: 1 } }
          placeholder="직원이름, 소속 부서 기타 정보를 입력하세요."
          inputProps={ { "aria-label": "search" } }
        />
      </SearchBox>
    </HeaderBox>
  );
};

const HeaderBox = styled ( Box ) ( {
  backgroundColor: "#2C2C2C",
  width: "100vw",
  display: "flex",
  paddingLeft: "22px",
  height: "72px",
  alignItems: "center",
  zIndex: "2"
} );

const LogoBox = styled ( CardMedia ) ( {
  marginRight: "184px",
  display: "flex",
  alignItems: "center",
  "& img": {
    width: "133px",
    zIndex: "2"
    // marginLeft: '10px',
  }
} );
const SearchBox = styled ( Paper ) ( {
  borderRadius: "25px",
  backgroundColor: "#1E1E1E"
} );
const SearchButton = styled ( IconButton ) ( {
  color: "#818181"
} );
const SearchInputBox = styled ( InputBase ) ( {
  "& input": {
    color: "white"
  }
} );

export default Header;

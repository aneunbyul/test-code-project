import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import styled from "styled-components";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Link from "next/link";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";
import ViewBox from "../ViewBox/ViewBox";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { useEffect, useRef, useState } from "react";

//components
import SubNavList from "../SubNav/SubNavList";

const AssignmentNav = () => {
  const parentLink = "/assignment";

  // sub nav data for storage
  const subNavListData_storage = [
    { name: "진행 과제", link: "/unfinished" },
    { name: "완료 과제", link: "/completed" },
    { name: "취소된 과제", link: "/canceld" }
  ];

  const subNavTitles_storage = [];

  // sub nav data for creation
  const subNavListData_creation = [
    { name: "진행 과제", link: "/unfinished" },
    { name: "완료 과제", link: "/completed" },
    { name: "대기 과제", link: "/impending" }
  ];

  const subNavTitles_creation = [null];

  let navObject = [
    {
      navName: "storage",
      isActive: true,
      activeListIndex: -1
    },
    {
      navName: "creation",
      isActive: false,
      activeListIndex: -1
    }
  ];

  const [selectedStorageIndex, setSelectedStorageIndex] = useState ( -1 );
  const [selectedCreationIndex, setSelectedCreationIndex] = useState ( -1 );

  const handleSelectedStorageIndex = ( selectedIndex ) => {
    setSelectedStorageIndex ( ( selectedStorageIndex ) => selectedIndex );
    console.log ( selectedIndex );
    console.log ( selectedStorageIndex );
  };

  const handleSelectedCreationIndex = ( selectedIndex ) => {
    setSelectedCreationIndex ( ( selectedCreationIndex ) => selectedIndex );
    console.log ( selectedIndex );
    console.log ( selectedCreationIndex );
  };

  return (
    <ViewBox>
      { navObject[0].isActive == true ? (
        <Box className="sub-nav__container" role="presentation">
          <Button
            className="adding-button"
            variant="contained"
            onClick={ ( event ) => {} }>
            <AddBoxIcon />
            <span>추가하기</span>
          </Button>

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedStorageIndex={ handleSelectedStorageIndex }
            selectedStorageIndex={ selectedStorageIndex }
            parentLink={ parentLink + "/storage" }
            subNavListData={ subNavListData_storage }
            subNavTitles={ subNavTitles_storage }></SubNavList>
        </Box>
      ) : navObject[1].isActive == true ? (
        <Box className="sub-nav__container" role="presentation">
          <Button className="adding-button" variant="contained">
            <AddBoxIcon />
            <span>작성 취소</span>
          </Button>

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedStorageIndex={ handleSelectedCreationIndex }
            selectedStorageIndex={ selectedCreationIndex }
            parentLink={ parentLink + "/creation" }
            subNavListData={ subNavListData_creation }
            subNavTitles={ subNavTitles_creation }></SubNavList>
        </Box>
      ) : (
        <Box className="sub-nav__container" role="presentation"></Box>
      ) }
    </ViewBox>
  );
};

export default AssignmentNav;

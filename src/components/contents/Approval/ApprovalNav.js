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
import BackspaceIcon from "@mui/icons-material/Backspace";
import Link from "next/link";
import { useRouter } from "next/router";
import useScrollFadeIn from "../../../hooks/useScrollFadeIn";

import { useState, useEffect } from "react";
import ViewBox from "../ViewBox/ViewBox";
import FilloutIcon from "../Icon/FilloutIcon";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

//components
import SubNavList from "../SubNav/SubNavList";

const ApprovalNav = () => {
  const router = useRouter ();
  const parentLink = "/approval";
  //
  // sub nav data for storage
  const subNavListData_storage = [
    {
      name: "개인함",
      link: "/sent",
      type: "title",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "미결된 결재",
      link: "/unfinished",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "완료된 결재",
      link: "/completed",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "반려된 결재",
      link: "/rejected",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "취소된 결재",
      link: "/canceled",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    }
  ];

  // sub nav data for creation
  const subNavListData_creation = [
    {
      name: "출장 신청서",
      link: "/trip-request",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "출장 복명서",
      link: "/trip-report",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "지출 요청서",
      link: "/expenditure_request",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "회의비 보고서",
      link: "/conference_report",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "명함 신청서",
      link: "/card",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "임시 문서1",
      link: "/temp1",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    },
    {
      name: "임시 문서2",
      link: "/temp2",
      icon: <FilloutIcon name="" size="small" type="outlined" />
    }
  ];

  const isStorage = router.pathname.includes ( parentLink + "/storage" );
  const isCreation = router.pathname.includes ( parentLink + "/creation" );

  const [selectedStorageIndex, setSelectedStorageIndex] = React.useState ( -1 );
  const [selectedCreationIndex, setSelectedCreationIndex] = React.useState ( -1 );

  const handleSelectedStorageIndex = ( selectedIndex ) => {
    setSelectedStorageIndex ( ( selectedStorageIndex ) => selectedIndex );
  };

  const handleSelectedCreationIndex = ( selectedIndex ) => {
    setSelectedCreationIndex ( ( selectedCreationIndex ) => selectedIndex );
  };

  return (
    <ViewBox>
      { isStorage && (
        <Box className="sub-nav__container" role="presentation">
          <Link href={ parentLink + "/creation" }>
            <Button
              className="adding-button"
              variant="contained"
              onClick={ () => {} }>
              <FilloutIcon
                sx={ { marginLeft: "-12%", marginRight: "0.24rem" } }
                name="write"
                size="small"
                type="outlined"
              />
              <span>결재작성</span>
            </Button>
          </Link>

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedStorageIndex={ handleSelectedStorageIndex }
            selectedStorageIndex={ selectedStorageIndex }
            parentLink={ parentLink + "/storage" }
            subNavListData={ subNavListData_storage }></SubNavList>
        </Box>
      ) }
      { !isStorage && (
        <Box className="sub-nav__container" role="presentation">
          <Link href={ parentLink + "/storage" }>
            <Button
              className="adding-button"
              variant="contained"
              onClick={ () => {} }>
              <FilloutIcon
                sx={ { marginLeft: "-12%", marginRight: "0.24rem" } }
                name="toright"
                size="small"
                type="outlined"
              />
              <span>돌아가기</span>
            </Button>
          </Link>

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedStorageIndex={ handleSelectedCreationIndex }
            selectedStorageIndex={ selectedCreationIndex }
            parentLink={ parentLink + "/creation" }
            subNavListData={ subNavListData_creation }></SubNavList>
        </Box>
      ) }
    </ViewBox>
  );
};

export default ApprovalNav;

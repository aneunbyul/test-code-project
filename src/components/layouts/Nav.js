import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/Inbox";
import HomeIcon from "@mui/icons-material/Home";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import MailIcon from "@mui/icons-material/Mail";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import WorkIcon from "@mui/icons-material/Work";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import Avatar from "@mui/material/Avatar";
import FilloutIcon from "../contents/Icon/FilloutIcon";
import { Box } from "@material-ui/core";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter ();
  const isApprovalPage = router.pathname.includes ( "/approval" );
  const isAssignmentPage = router.pathname.includes ( "/assignment" );
  const isDocumentPage = router.pathname.includes ( "/document" );
  const isOrganization = router.pathname.includes ( "/organization" );

  const mainNavListData = [
    {
      name: "홈 화면",
      link: "",
      icon: <FilloutIcon name="home" size="big" type="outlined" />
    },
    {
      name: "전자 결재",
      link: "approval",
      icon: <FilloutIcon name="approval" size="big" type="outlined" />
    },
    {
      name: "문서 관리",
      link: "document",
      icon: <FilloutIcon name="document" size="big" type="outlined" />
    },
    {
      name: "과제 정보",
      link: "assignment",
      icon: <FilloutIcon name="assignment" size="big" type="outlined" />
    },
    {
      name: "조직 정보",
      link: "organization",
      icon: <FilloutIcon name="organization" size="big" type="outlined" />
    }
  ];

  const [selectedIndex, setSelectedIndex] = React.useState ( -1 );

  const handleListItemClick = ( event, index ) => {
    setSelectedIndex ( index );
  };

  useEffect ( () => {
    if (isApprovalPage) setSelectedIndex ( 1 );
    else if (isDocumentPage) setSelectedIndex ( 2 );
    else if (isAssignmentPage) setSelectedIndex ( 3 );
    else if (isOrganization) setSelectedIndex ( 4 );
    else setSelectedIndex ( 0 );
  }, [] );

  return (
    <NavLayout>
      <NavContainer aria-label="main nav">
        <NavTabGroup>
          <NavTabList component="nav" aria-label="nav list selection">
            { mainNavListData.map ( ( object, index ) => {
              return (
                <Link key={ object.name + "link" } href={ "/" + object.link }>
                  <NavTabItem
                    key={ object.name + "link" }
                    selected={ selectedIndex === index }
                    onClick={ ( event ) => handleListItemClick ( event, index ) }>
                    <NavTabIconContainer>
                      { selectedIndex === index ? (
                        object.icon
                      ) : (
                        <HomeOutlinedIcon />
                      ) }
                    </NavTabIconContainer>
                    <NavTabText
                      key={ object.name + "text" }
                      primary={ object.name }
                    />
                  </NavTabItem>
                </Link>
              );
            } ) }
          </NavTabList>

          <MyIcon>A</MyIcon>
        </NavTabGroup>
      </NavContainer>
    </NavLayout>
  );
};

const NavLayout = styled ( Box )`
  position: relative;
  width: var(--box-contracted-length);
`;

const NavContainer = styled ( Box )`
  position: relative;
  will-change: width;
  width: var(
    --box-contracted-length
  ); /* this width will be controlled by js, according to its parent */
  height: calc(100vh - var(--box-contracted-length));
  z-index: 1;
  background-color: var(--dark02);
  box-shadow: inset calc(var(--line-thickness) * -1) 0 0 0 var(--dark04);
  pointer-events: none;

  transition: width 0.13s var(--cubic01) var(--delay-nav-out);

  & * {
    pointer-events: auto;
  }

  & svg {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  & div.Mui-selected::before {
    border-radius: calc(var(--global-border-radius) * 2) !important;
    padding: 0.45rem;
    transition: 0.1s padding var(--cubic01) var(--delay-nav-out),
      0.1s border-radius var(--cubic01) var(--delay-nav-out),
      0.1s width var(--cubic01) var(--delay-nav-out),
      0.1s background-color var(--cubic01) !important;
  }
`;

const NavTabGroup = styled ( Box )`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--transparnet);
`;

const NavTabList = styled ( List )`
  position: relative;
  padding: 0.12rem 0;
`;

const NavTabItem = styled ( ListItemButton )`
  position: relative;
  display: grid;
  grid-template-columns: 2.6rem auto;
  align-items: center;
  width: 100%;
  padding: calc((var(--box-contracted-length) - var(--big-icon-size)) / 2);
  transition: all 0.1s var(--cubic01);
  background-color: var(--transaparent);

  &:hover {
    background-color: var(--transaparent);
  }

  &:not(:hover) .MuiListItemText-root span {
    opacity: 0 !important;
  }

  &:hover .MuiListItemText-root span {
    opacity: 0.88;
  }

  &.Mui-selected .MuiListItemText-root span {
    opacity: 0.88;
    box-shadow: inset 0 0 0 calc(var(--line-thickness) * 1.4) var(--highlight01);
  }

  &.Mui-selected {
    background-color: var(--transaparent);
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    content: '';
    background-clip: content-box !important;
    background-color: var(--transaparent);
  }

  &:not(.Mui-selected):hover::before {
    background-color: var(--dark04);
  }

  &.Mui-selected::before {
    background-color: var(--highlight01);
  }

  &.Mui-selected span,
  &.Mui-selected svg {
    fill: var(--light01) !important;
  }
`;

const NavTabIconContainer = styled ( ListItemIcon )`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: var(--big-icon-size);
  min-height: var(--big-icon-size);
  width: var(--big-icon-size);
  height: var(--big-icon-size);

  z-index: 1;

  & svg {
    position: relative;
    min-width: calc(var(--big-icon-size) * 0.8);
    min-height: calc(var(--big-icon-size) * 0.8);
    width: calc(var(--big-icon-size) * 0.8);
    height: calc(var(--big-icon-size) * 0.8);
    color: var(--light03);
  }
`;

const NavTabText = styled ( ListItemText )`
  position: absolute;
  top: -10%;
  left: calc(var(--box-contracted-length) * 1.1);
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;

  user-select: none;
  pointer-events: none;

  & span {
    will-change: opacity, box-shadow;
    position: relative;
    font-size: calc(var(--global-text-size) * 0.96);
    color: var(--light01);
    white-space: nowrap;
    padding: 0.52rem 0.7rem;
    border-radius: var(--global-border-radius);
    box-shadow: inset 0 0 0 var(--line-thickness) var(--dark05);
    background-color: var(--dark03);

    opacity: 0;
    user-select: none;
    pointer-events: none;

    transition: opacity 0.1s var(--cubic01) 0.37s,
      box-shadow 0.1s var(--cubic01);
  }
`;

const MyIcon = styled ( Avatar )`
  position: absolute;
  bottom: 20px;
`;

export default Nav;

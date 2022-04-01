import React, {useEffect, useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/Inbox';
import HomeIcon from '@mui/icons-material/Home';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MailIcon from '@mui/icons-material/Mail';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WorkIcon from '@mui/icons-material/Work';
import WorkOutlineOutlinedIcon from '@mui/icons-material/WorkOutlineOutlined';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Avatar from '@mui/material/Avatar';
import FilloutIcon from '../contents/Icon/FilloutIcon';
import Box from '@mui/material/Box';
import styled from 'styled-components';
import Link from 'next/link';
import {useRouter} from 'next/router';
import ProfileModal from '../contents/Profile/ProfileModal';
import {Button, Modal} from '@mui/material';

const Nav = () => {
  const [profileOpen, setProfileOpen] = React.useState(false);
  const handleOpen = () => setProfileOpen(true);
  const handleClose = () => setProfileOpen(false);

  const router = useRouter();
  const isApprovalPage = router.pathname.includes('/approval');
  const isAssignmentPage = router.pathname.includes('/assignment');
  const isDocumentPage = router.pathname.includes('/document');
  const isOrganization = router.pathname.includes('/organization');

  const mainNavListData = [
    {
      text: '홈 화면',
      link: '',
      iconName: 'home',
      isDisabled: false,
    },
    {
      text: '전자 결재',
      link: 'approval',
      iconName: 'approval',
      isDisabled: false,
    },
    {
      text: '문서 관리',
      link: 'document',
      iconName: 'document',
      isDisabled: false,
    },
    {
      text: '과제 정보',
      link: 'assignment',
      iconName: 'assignment',
      isDisabled: false,
    },
    {
      text: '조직 정보',
      link: 'organization',
      iconName: 'organization',
      isDisabled: true,
    },
  ];

  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (isApprovalPage) setSelectedIndex(1);
    else if (isDocumentPage) setSelectedIndex(2);
    else if (isAssignmentPage) setSelectedIndex(3);
    else if (isOrganization) setSelectedIndex(4);
    else setSelectedIndex(0);
  }, []);

  return (
    <NavLayout>
      <NavContainer aria-label="main nav">
        <NavTabGroup>
          <NavTabList component="nav" aria-label="nav list selection">
            {mainNavListData.map((object, index) => {
              if (object.isDisabled != true)
                return (
                  <Link key={object.text + 'link'} href={'/' + object.link}>
                    <NavTabItem
                      key={object.text + 'link'}
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}>
                      <NavTabIconContainer>
                        {selectedIndex === index ? (
                          <FilloutIcon
                            name={object.iconName}
                            size="big"
                            type="filled"
                          />
                        ) : (
                          <FilloutIcon
                            name={object.iconName}
                            size="big"
                            type="outlined"
                          />
                        )}
                      </NavTabIconContainer>
                      <NavTabText
                        key={object.text + 'text'}
                        primary={object.text}
                      />
                    </NavTabItem>
                  </Link>
                );
            })}
          </NavTabList>
          <MyIcon onClick={handleOpen}>A</MyIcon>
          <Modal
            open={profileOpen}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <ProfileModal />
          </Modal>
        </NavTabGroup>
      </NavContainer>
    </NavLayout>
  );
};

const NavLayout = styled(Box)`
  &&& {
    position: relative;
    width: var(--box-contracted-length);
    height: 100%;
  }
`;

const NavContainer = styled(Box)`
  &&& {
    position: relative;
    will-change: width;
    width: var(
      --box-contracted-length
    ); /* this width will be controlled by js, according to its parent */
    height: 100%;
    z-index: 1;
    background-color: var(--dark02);
    box-shadow: inset calc(var(--line-thickness) * -1) 0 0 0 var(--dark04);
    pointer-events: none;

    transition: width 0.13s var(--cubic01) var(--delay-nav-out);
  }

  &&& * {
    pointer-events: auto;
  }

  &&& svg {
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
  }

  &&& div.Mui-selected::before {
    border-radius: calc(var(--global-border-radius) * 2) !important;
    padding: 0.6rem;
    transition: 0.1s padding var(--cubic01) var(--delay-nav-out),
      0.1s border-radius var(--cubic01) var(--delay-nav-out),
      0.1s width var(--cubic01) var(--delay-nav-out),
      0.1s background-color var(--cubic01) !important;
  }
`;

const NavTabGroup = styled(Box)`
  &&& {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--transparnet);
  }
`;

const NavTabList = styled(List)`
  &&& {
    position: relative;
    padding: 0.12rem 0;
  }
`;

const NavTabItem = styled(ListItemButton)`
  &&& {
    position: relative;
    display: grid;
    align-items: center;
    width: 100%;
    padding: calc((var(--box-contracted-length) - var(--big-icon-size)) / 2);
    transition: all 0.1s var(--cubic01);
    background-color: var(--transaparent);
  }

  &&&:hover {
    background-color: var(--transaparent);
  }

  &&&:not(:hover) .MuiListItemText-root span {
    opacity: 0 !important;
  }

  &&&:hover .MuiListItemText-root span {
    opacity: 0.88;
  }

  &&&.Mui-selected .MuiListItemText-root span {
    opacity: 0.88;
    box-shadow: inset 0 0 0 calc(var(--line-thickness) * 1.4) var(--highlight01);
  }

  &&&.Mui-selected {
    background-color: var(--transaparent);
  }

  &&&::before {
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

  &&&:not(.Mui-selected):hover::before {
    background-color: var(--dark04);
  }

  &&&.Mui-selected::before {
    background-color: var(--highlight01);
  }

  &&&.Mui-selected span,
  &&&.Mui-selected svg {
    fill: var(--light01) !important;
  }
`;

const NavTabIconContainer = styled(ListItemIcon)`
  &&& {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: var(--big-icon-size);
    min-height: var(--big-icon-size);
    width: var(--big-icon-size);
    height: var(--big-icon-size);

    z-index: 1;
  }

  &&& svg {
    position: relative;
    min-width: calc(var(--big-icon-size) * 0.8);
    min-height: calc(var(--big-icon-size) * 0.8);
    width: calc(var(--big-icon-size) * 0.8);
    height: calc(var(--big-icon-size) * 0.8);
    color: var(--light03);
  }
`;

const NavTabText = styled(ListItemText)`
  &&& {
    position: absolute;
    top: -10%;
    left: calc(var(--box-contracted-length) * 1.1);
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    user-select: none;
    pointer-events: none;
  }

  &&& span {
    will-change: opacity, box-shadow;
    position: relative;
    font-size: calc(var(--global-text-size) * 0.96);
    color: var(--light01);
    white-space: nowrap;
    padding: 0.52rem 0.7rem;
    border-radius: var(--global-border-radius);
    box-shadow: inset 0 0 0 var(--line-thickness) var(--dark05);
    background-color: var(--dark01-transparent);
    backdrop-filter: blur(1rem);

    opacity: 0;
    user-select: none;
    pointer-events: none;

    transition: opacity 0.1s var(--cubic01) 0.37s,
      box-shadow 0.1s var(--cubic01);
  }
`;

const MyIcon = styled(Avatar)`
  &&& {
    position: absolute;
    bottom: 20px;
  }
`;

export default Nav;

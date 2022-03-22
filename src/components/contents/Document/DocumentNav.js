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
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

//components
import SubNavList from '../SubNav/SubNavList';

const DocumentNav = () => {
  const router = useRouter();
  const parentLink = '/document';

  // sub nav data for storage
  const subNavListData_storage = [
    {
      name: '내부 공문',
      link: '/received',
      type: 'title',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '출장 신청서',
      link: '/trip_request',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '출장 복명서',
      link: '/trip_report',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '지출 요청서',
      link: '/expenditure_request',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '회의비 보고서',
      link: '/conference_report',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '명함 신청서',
      link: '/card',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '품의서',
      link: '/temp1',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '초과 근무 신청서',
      link: '/temp2',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '개인카드 사용보고서',
      link: '/temp3',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '휴가신청서',
      link: '/temp2',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: 'ㅇㅇ',
      link: '/temp3',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '외부 문서',
      link: '/received',
      type: 'title',
      icon: <FilloutIcon name="" size="small" type="outlined" />,
    },
  ];

  const isStorage = router.pathname.includes(parentLink + '/storage');

  const [selectedStorageIndex, setSelectedStorageIndex] = React.useState(-1);
  const [selectedCreationIndex, setSelectedCreationIndex] = React.useState(-1);

  const handleSelectedStorageIndex = (selectedIndex) => {
    setSelectedStorageIndex((selectedStorageIndex) => selectedIndex);
  };

  const handleSelectedCreationIndex = (selectedIndex) => {
    setSelectedCreationIndex((selectedCreationIndex) => selectedIndex);
  };

  return (
    <ViewBox>
      {isStorage && (
        <Box className="sub-nav__container" role="presentation">
          <SubNavList
            handleSelectedStorageIndex={handleSelectedStorageIndex}
            selectedStorageIndex={selectedStorageIndex}
            parentLink={parentLink + '/storage'}
            subNavListData={subNavListData_storage}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default DocumentNav;

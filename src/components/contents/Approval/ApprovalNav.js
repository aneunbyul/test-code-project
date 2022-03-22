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

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

//components
import SubNavList from '../SubNav/SubNavList';
import ConversionButton from '../ReusableContent/ConversionButton';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';

const ApprovalNav = () => {
  const router = useRouter();
  const parentLink = '/approval';
  //
  // sub nav data for base
  const subNavListData_base = [
    {
      name: '개인함',
      link: '/sent',
      type: 'title',
      iconName: '',
    },
    {
      name: '미결된 결재',
      link: '/unfinished',
      iconName: '',
    },
    {
      name: '완료된 결재',
      link: '/completed',
      iconName: '',
    },
    {
      name: '반려된 결재',
      link: '/rejected',
      iconName: '',
    },
    {
      name: '취소된 결재',
      link: '/canceled',
      iconName: '',
    },
  ];

  // sub nav data for creation
  const subNavListData_creation = [
    {
      name: '출장 신청서',
      link: '/trip-request',
      iconName: '',
    },
    {
      name: '출장 복명서',
      link: '/trip_report',
      iconName: '',
    },
    {
      name: '지출 요청서',
      link: '/expenditure_request',
      iconName: '',
    },
    {
      name: '회의비 보고서',
      link: '/conference_report',
      iconName: '',
    },
    {
      name: '명함 신청서',
      link: '/card',
      iconName: '',
    },
    {
      name: '임시 문서1',
      link: '/temp1',
      iconName: '',
    },
    {
      name: '임시 문서2',
      link: '/temp2',
      iconName: '',
    },
  ];

  const afterPath = router.pathname.substring(
    router.pathname.indexOf(parentLink) + parentLink.length + 2,
  );
  const isBase =
    afterPath == '' && router.pathname.includes(parentLink) ? true : false;

  // selected category index hooks for base page & creation page
  const [selectedBaseIndex, setSelectedBaseIndex] = React.useState(-1);
  const [selectedCreationIndex, setSelectedCreationIndex] = React.useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  const handleSelectedCreationIndex = (selectedIndex) => {
    setSelectedCreationIndex((selectedCreationIndex) => selectedIndex);
  };

  return (
    <ViewBox>
      {isBase && (
        <Box className="sub-nav__container" role="presentation">
          <ConversionButton
            icon={
              <FilloutIcon
                sx={{
                  marginLeft: '-12%',
                }}
                name="write"
                size="small"
                type="outlined"
              />
            }
            text="추가하기"
            link={parentLink + '/creation'}
          />

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedIndex={handleSelectedBaseIndex}
            selectedIndex={selectedBaseIndex}
            parentLink={parentLink}
            subNavListData={subNavListData_base}></SubNavList>
        </Box>
      )}
      {!isBase && (
        <Box className="sub-nav__container" role="presentation">
          <ConversionButton
            icon={
              <FilloutIcon
                sx={{
                  marginLeft: '-12%',
                }}
                name="toright"
                size="small"
                type="outlined"
              />
            }
            text="돌아가기"
            link={parentLink}
          />

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedIndex={handleSelectedCreationIndex}
            selectedIndex={selectedCreationIndex}
            parentLink={parentLink + '/creation'}
            subNavListData={subNavListData_creation}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default ApprovalNav;

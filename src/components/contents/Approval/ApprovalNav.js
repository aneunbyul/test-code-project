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
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '완료된 결재',
      link: '/completed',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '반려된 결재',
      link: '/rejected',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '취소된 결재',
      link: '/canceled',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
  ];

  // sub nav data for creation
  const subNavListData_creation = [
    {
      name: '출장 신청서',
      link: '/trip_request',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '출장 복명서',
      link: '/trip_report',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '지출 요청서',
      link: '/expenditure_request',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '회의비 보고서',
      link: '/conference_report',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '명함 신청서',
      link: '/card',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '임시 문서1',
      link: '/temp1',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
    {
      name: '임시 문서2',
      link: '/temp2',
      iconName: <FilloutIcon name="" size="small" type="outlined" />,
    },
  ];

  const afterPath = router.pathname.substring(
    router.pathname.indexOf('parentLink') + parentLink.length + 2,
  );
  const isBase = afterPath == '' ? true : false;

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
            handleSelectedBaseIndex={handleSelectedBaseIndex}
            selectedBaseIndex={selectedBaseIndex}
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
            handleSelectedBaseIndex={handleSelectedCreationIndex}
            selectedBaseIndex={selectedCreationIndex}
            parentLink={parentLink + '/creation'}
            subNavListData={subNavListData_creation}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default ApprovalNav;

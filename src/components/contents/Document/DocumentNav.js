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

//componentss
import SubNavList from '../SubNav/SubNavList';
import ConversionButton from '../ReusableContent/ConversionButton';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';

const DocumentNav = () => {
  const router = useRouter();
  const parentLink = '/document';

  // sub nav data for base
  const subNavListData_base = [
    {
      name: '내부 공문',
      link: '/received',
      type: 'title',
      iconName: '',
    },
    {
      name: '출장 신청서',
      link: '/trip_request',
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
      name: '품의서',
      link: '/temp1',
      iconName: '',
    },
    {
      name: '초과 근무 신청서',
      link: '/temp2',
      iconName: '',
    },
    {
      name: '개인카드 사용보고서',
      link: '/temp3',
      iconName: '',
    },
    {
      name: '휴가신청서',
      link: '/temp2',
      iconName: '',
    },
    {
      name: 'ㅇㅇ',
      link: '/temp3',
      iconName: '',
    },
    {
      name: '외부 문서',
      link: '/received',
      type: 'title',
      iconName: '',
    },
  ];

  const afterPath = router.pathname.substring(
    router.pathname.indexOf('parentLink') + parentLink.length + 1,
  );
  const isBase = afterPath == '' ? true : false;

  const [selectedBaseIndex, setSelectedBaseIndex] = React.useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  return (
    <ViewBox>
      {isBase && (
        <Box className="sub-nav__container" role="presentation">
          <SubNavList
            handleSelectedBaseIndex={handleSelectedBaseIndex}
            selectedBaseIndex={selectedBaseIndex}
            parentLink={parentLink}
            subNavListData={subNavListData_base}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default DocumentNav;

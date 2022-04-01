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
import SubNavHeader from '../SubNav/SubNavHeader';

const DocumentNav = () => {
  const router = useRouter();
  const parentLink = '/document';

  // sub nav data for base
  const subNavListData_base = [
    {
      name: '내부 공문',
      link: '/internal',
      type: 'title',
      iconName: '',
    },
    {
      name: '출장 신청서',
      link: '/trip-request',
      iconName: '',
    },
    {
      name: '출장 복명서',
      link: '/trip-report',
      iconName: '',
    },
    {
      name: '지출 요청서',
      link: '/expenditure-request',
      iconName: '',
    },
    {
      name: '회의비 사용 보고',
      link: '/conference-report',
      iconName: '',
    },
    {
      name: '명함 신청서',
      link: '/card',
      iconName: '',
      disabled: true,
    },
    {
      name: '품의서',
      link: '/#',
      iconName: '',
      disabled: true,
    },
    {
      name: '초과 근무 신청서',
      link: '/#',
      iconName: '',
      disabled: true,
    },
    {
      name: '개인카드 사용보고서',
      link: '/#',
      iconName: '',
      disabled: true,
    },
    {
      name: '휴가신청서',
      link: '/#',
      iconName: '',
      disabled: true,
    },
    {
      name: '외부 문서',
      link: '/received',
      type: 'title',
      iconName: '',
      disabled: true,
    },
  ];

  const [isBasePage, setIsBasePage] = React.useState(true);

  const [selectedBaseIndex, setSelectedBaseIndex] = React.useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  //첫 입장 시 정해진 서브 네비게이션이 기본적으로 활성화 되게 함
  function checkPathValidity(myLink, openingIndex) {
    if (openingIndex < 0 && openingIndex >= subNavListData_base.length) return;

    const afterSubPath = router.pathname.substring(
      router.pathname.indexOf(myLink) + myLink.length + 2,
    );

    const isLinkBase =
      afterSubPath == '' && router.pathname.includes(myLink) ? true : false;

    if (isLinkBase) {
      handleSelectedBaseIndex(openingIndex);
      router.push(
        subNavListData_base[openingIndex].disabled == true
          ? ''
          : myLink + subNavListData_base[openingIndex].link,
      );
    }
  }

  useEffect(() => {
    checkPathValidity(parentLink, 0);
  }, [router.asPath]);

  return (
    <ViewBox>
      {isBasePage && (
        <Box className="sub-nav__container" role="presentation">
          <SubNavHeader text="문서 관리" />
          <Divider className="line-divider" />
          <SubNavList
            handleSelectedIndex={handleSelectedBaseIndex}
            selectedIndex={selectedBaseIndex}
            parentLink={parentLink}
            subNavListData={subNavListData_base}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default DocumentNav;

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
import Link from 'next/link';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';

import {useRouter} from 'next/router';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {useEffect, useRef, useState} from 'react';

//components
import SubNavList from '../SubNav/SubNavList';
import ConversionButton from '../ReusableContent/ConversionButton';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SubNavHeader from '../SubNav/SubNavHeader';

const AssignmentNav = ({animation}) => {
  const router = useRouter();
  const parentLink = '/assignment';

  // sub nav data for base
  const subNavListData_base = [
    {
      name: '진행 과제',
      link: '/ongoing',
      iconName: '',
    },
    {
      name: '완료 과제',
      link: '/completed',
      iconName: '',
    },
    {
      name: '취소된 과제',
      link: '/canceled',
      iconName: '',
    },
  ];

  const [selectedBaseIndex, setSelectedBaseIndex] = useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  const convertToCreationPage = (linkPath) => {
    setIsBasePage(false);
    router.push(linkPath);
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
      <Box className="sub-nav__container" role="presentation">
        <SubNavHeader
          text="과제 정보"
          button={
            <ConversionButton
              icon={<FilloutIcon name="write" size="small" type="outlined" />}
              clickAction={convertToCreationPage}
              clickActionValue={parentLink + '/creation'}
            />
          }
        />

        <Divider className="line-divider" />

        <SubNavList
          handleSelectedIndex={handleSelectedBaseIndex}
          selectedIndex={selectedBaseIndex}
          parentLink={parentLink}
          subNavListData={subNavListData_base}
          subNavTitles={null}></SubNavList>
      </Box>
    </ViewBox>
  );
};

export default AssignmentNav;

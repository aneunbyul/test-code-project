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
import SubNavHeader from '../SubNav/SubNavHeader';

const ApprovalNav = ({animation}) => {
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
      name: '미결함',
      link: '/unfinished',
      iconName: '',
    },
    {
      name: '완료함',
      link: '/completed',
      iconName: '',
    },
    {
      name: '반려함',
      link: '/rejected',
      iconName: '',
    },
    {
      name: '취소함',
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
      link: '/trip-report',
      iconName: '',
    },
    {
      name: '지출 요청서',
      link: '/expenditure-request',
      iconName: '',
    },
    {
      name: '회의비 보고서',
      link: '/conference-report',
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

  /*
  const afterPath = router.pathname.substring(
    router.pathname.indexOf(parentLink) + parentLink.length + 2,
  );
  const isBase =
    afterPath == '' && router.pathname.includes(parentLink) ? true : false;
    */

  // base 화면을 출력해야 하는지 확인하는 hook
  const [isBasePage, setIsBasePage] = React.useState(true);

  // selected category index hooks for base page & creation page
  const [selectedBaseIndex, setSelectedBaseIndex] = React.useState(-1);
  const [selectedCreationIndex, setSelectedCreationIndex] = React.useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  const handleSelectedCreationIndex = (selectedIndex) => {
    setSelectedCreationIndex((selectedCreationIndex) => selectedIndex);
  };

  const convertToCreationPage = (linkPath) => {
    setIsBasePage(false);
    router.push(linkPath);
  };

  return (
    <ViewBox>
      {isBasePage && (
        <Box className="sub-nav__container" role="presentation">
          <SubNavHeader
            text="전자 결재"
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
            subNavListData={subNavListData_base}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

ApprovalNav.defaultProps = {
  animation: true,
};

export default ApprovalNav;

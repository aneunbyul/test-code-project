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
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';

//components
import SubNavList from '../SubNav/SubNavList';
import ConversionButton from '../ReusableContent/ConversionButton';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';

const OrganizationNav = () => {
  const router = useRouter();
  const parentLink = '/organization';

  // sub nav data for base
  const subNavListData_base = [
    {
      name: '임직원',
      link: '/employee',
      iconName: '',
    },
    {
      name: '팀 · 부서',
      link: '/dept',
      iconName: '',
    },
    {
      name: '기타',
      link: '/etc',
      iconName: '',
    },
  ];

  // sub nav data for creation
  const subNavListData_creation = [
    {
      name: '임직원',
      link: '/employee',
      iconName: '',
    },
    {
      name: '팀 · 부서',
      link: '/dept',
      iconName: '',
    },
    {
      name: '기타',
      link: '/etc',
      iconName: '',
    },
  ];

  const afterPath = router.pathname.substring(
    router.pathname.indexOf(parentLink) + parentLink.length + 2,
  );
  const isBase =
    afterPath == '' && router.pathname.includes(parentLink) ? true : false;

  const [selectedBaseIndex, setSelectedBaseIndex] = useState(-1);
  const [selectedCreationIndex, setSelectedCreationIndex] = useState(-1);

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
            subNavListData={subNavListData_base}
            subNavTitles={null}></SubNavList>
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
            subNavListData={subNavListData_creation}
            subNavTitles={null}></SubNavList>
        </Box>
      )}
    </ViewBox>
  );
};

export default OrganizationNav;

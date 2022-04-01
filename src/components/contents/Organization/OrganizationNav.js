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
import OrganizationChartForm from './OrganizationChart/OrganizationChartForm';
import SubNavHeader from '../SubNav/SubNavHeader';

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

  const [selectedBaseIndex, setSelectedBaseIndex] = useState(-1);

  const handleSelectedBaseIndex = (selectedIndex) => {
    setSelectedBaseIndex((selectedBaseIndex) => selectedIndex);
  };

  const convertToCreationPage = (linkPath) => {
    setIsBasePage(false);
    router.push(linkPath);
  };

  return (
    <ViewBox>
      <Box className="sub-nav__container" role="presentation">
        <SubNavHeader
          text="조직 정보"
          button={
            <ConversionButton
              icon={<FilloutIcon name="write" size="small" type="outlined" />}
              clickAction={convertToCreationPage}
              clickActionValue={parentLink + '/creation'}
            />
          }
        />

        <Divider className="line-divider" />
        <OrganizationChartForm />
      </Box>
    </ViewBox>
  );
};

export default OrganizationNav;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListSubheader from '@mui/material/ListSubheader';
import styled from 'styled-components';
import EmailIcon from '@mui/icons-material/Email';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Link from 'next/link';
import useScrollFadeIn from '../../../hooks/useScrollFadeIn';
import {useRouter} from 'next/router';

import {useState, useEffect} from 'react';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SubNavList = ({
  handleSelectedIndex,
  selectedIndex,
  parentLink,
  subNavListData,
}) => {
  const router = useRouter();
  let titleFlag = false;

  // 서브 네비게이션의 카테고리 주소에 접근 시
  // 현재 주소를 확인하여서 선택되지 않은 카테고리가 하이라이트 되는 오류를 막음
  useEffect(() => {
    for (let ind = 0; ind < subNavListData.length; ind++) {
      const afterSubPath = router.pathname.substring(
        router.pathname.indexOf(subNavListData[ind].link) +
          subNavListData[ind].link.length +
          2,
      );

      const isSubBase =
        afterSubPath == '' && router.pathname.includes(subNavListData[ind].link)
          ? true
          : false;

      if (isSubBase) {
        handleSelectedIndex(ind);
        break;
      }
    }
  }, [router.asPath]);

  return (
    <SubNavListWrapper
      forceVisible="y"
      autoHide={true}
      component="nav"
      aria-label="nav selection">
      {subNavListData.map((object, index, array) => {
        if (object.type == 'title') titleFlag = true;

        return (
          <div key={object.name + 'div'}>
            {
              //Divider is generated for all the titles excluding first one.
              array.length > 0 &&
                object != null &&
                object != undefined &&
                object.type == 'title' &&
                index > 0 &&
                ((titleFlag = false),
                (
                  <Divider
                    key={object.name + 'divider'}
                    className="line-divider"
                  />
                ))
            }

            {
              //Interactable title category generation
              array.length > 0 &&
                object != null &&
                object != undefined &&
                object.type == 'title' && (
                  <Link
                    key={object.name + 'title-link'}
                    href={
                      object.disabled == true ? '' : parentLink + object.link
                    }>
                    <SubNavListItem
                      key={object.name + 'title'}
                      type="title"
                      selected={selectedIndex == index}
                      onClick={(event) => {
                        if (object.disabled == false)
                          handleSelectedIndex(index);
                      }}>
                      {selectedIndex != index ? (
                        <FilloutIcon
                          sx={{marginRight: '4%'}}
                          name={object.iconName}
                          size="small"
                          type="outlined"
                        />
                      ) : (
                        <FilloutIcon
                          sx={{marginRight: '4%'}}
                          name={object.iconName}
                          size="small"
                          type="filled"
                        />
                      )}
                      <ListItemText
                        key={object.name + 'title-text'}
                        primary={object.name}
                      />
                    </SubNavListItem>
                  </Link>
                )
            }

            {
              //Interactable general category generation
              array.length > 0 &&
                object != null &&
                object != undefined &&
                object.type != 'title' && (
                  <Link
                    key={object.name + 'item-link'}
                    href={
                      object.disabled == true ? '' : parentLink + object.link
                    }>
                    <SubNavListItem
                      key={object.name + 'item'}
                      selected={selectedIndex === index}
                      onClick={(event) => {
                        if (object.disabled == false)
                          handleSelectedIndex(index);
                      }}>
                      {selectedIndex != index ? (
                        <FilloutIcon
                          sx={{
                            marginRight: '4%',
                            marginLeft: '0%',
                            ...(titleFlag == true && {
                              marginLeft: '4%',
                            }),
                          }}
                          name={object.iconName}
                          size="small"
                          type="outlined"
                        />
                      ) : (
                        <FilloutIcon
                          sx={{
                            marginRight: '4%',
                            marginLeft: '0%',
                            ...(titleFlag == true && {
                              marginLeft: '4%',
                            }),
                          }}
                          name={object.iconName}
                          size="small"
                          type="filled"
                        />
                      )}
                      <ListItemText
                        key={object.name + 'item-text'}
                        primary={object.name}
                      />
                    </SubNavListItem>
                  </Link>
                )
            }
          </div>
        );
      })}
    </SubNavListWrapper>
  );
};

/* sub navigation */
const SubNavListWrapper = styled(SimpleBar)`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }
`;

const SubNavListItem = styled(ListItem)`
  &&& {
    width: 100%;
    height: var(--tab-height);
    padding: 0.2rem 0rem;
    padding-left: 5%;
    transition: all 0.1s var(--cubic01);
    background-color: var(--transaparent);
    z-index: 0;
    transition: all 0.2s ease-in-out;
  }

  &&& * {
    user-select: none;
    transition: all 0.1s ease-in-out;
  }

  &&& span {
    font-size: var(--global-text-size);
    color: var(--light02);
    background-color: var(--transaparent);
  }

  &&&:hover {
    background-color: var(--dark04);
  }

  &&&:hover span {
    color: var(--light01);
  }

  &&&.Mui-selected {
    background-color: var(--transaparent);
  }

  &&&.Mui-selected svg {
    fill: var(--light01);
  }

  &&&::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-clip: content-box !important;
    background-color: var(--transaparent);
  }

  &&&:not(.Mui-selected):hover::before {
    background-color: var(--dark04);
  }

  &&&.Mui-selected::before {
    background-color: var(--dark01);
  }

  &&&.Mui-selected span,
  &&&.Mui-selected svg {
    color: var(--light01) !important;
    font-weight: 500;
  }

  &&&[type='title'] {
    padding-left: 3%;
  }

  &&&[type='title']::after {
    content: '';
    position: absolute;
    top: 26%;
    left: 0;
    width: 0.2rem;
    height: 45%;
    background-color: var(--light02);
    z-index: 12;
  }

  &&&[type='title'] span {
    font-weight: 400;
    color: var(--light01) !important;
  }

  &&&[type='title'] svg {
    color: var(--light01);
  }
`;

export default SubNavList;

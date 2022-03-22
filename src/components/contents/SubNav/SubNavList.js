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

import {useState, useEffect} from 'react';
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const SubNavList = ({
  handleSelectedBaseIndex,
  selectedBaseIndex,
  parentLink,
  subNavListData,
}) => {
  return (
    <SubNavListWrapper
      forceVisible="y"
      autoHide={true}
      className="sub-nav__list"
      component="nav"
      aria-label="nav selection">
      {subNavListData.map((object, index, array) => {
        return (
          <div key={object.name + 'div'}>
            {
              //Divider is generated for all the titles excluding first one.
              array.length > 0 &&
                object != null &&
                object != undefined &&
                object.type == 'title' &&
                index > 0 && (
                  <Divider
                    key={object.name + 'divider'}
                    className="line-divider"
                  />
                )
            }

            {
              //Interactable title category generation
              array.length > 0 &&
                object != null &&
                object != undefined &&
                object.type == 'title' && (
                  <Link
                    key={object.name + 'title-link'}
                    href={parentLink + object.link}>
                    <SubNavListItem
                      key={object.name + 'title'}
                      type="title"
                      selected={selectedBaseIndex == index}
                      onClick={(event) => {
                        handleSelectedBaseIndex(index);
                      }}>
                      {selectedBaseIndex != index ? (
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
                    href={parentLink + object.link}>
                    <SubNavListItem
                      key={object.name + 'item'}
                      selected={selectedBaseIndex === index}
                      onClick={(event) => {
                        handleSelectedBaseIndex(index);
                      }}>
                      {selectedBaseIndex != index ? (
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
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

const SubNavListItem = styled(ListItem)`
  width: 100%;
  padding: 0.2rem 0rem;
  padding-left: 5%;
  transition: all 0.1s var(--cubic01);
  background-color: var(--transaparent);
  z-index: 0;

  & * {
    user-select: none;
  }

  & span {
    font-size: var(--global-text-size);
    color: var(--light02);
    background-color: var(--transaparent);
  }

  &:hover {
    background-color: var(--dark04);
  }

  &:hover span {
    color: var(--light01);
  }

  &.Mui-selected {
    background-color: var(--transaparent);
  }

  &.Mui-selected svg {
    fill: var(--light01);
  }

  &::before {
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

  &:not(.Mui-selected):hover::before {
    background-color: var(--dark04);
  }

  &.Mui-selected::before {
    background-color: var(--highlight01);
  }

  &.Mui-selected span,
  &.Mui-selected svg {
    color: var(--light01) !important;
  }

  &[type='title'] {
    padding-left: 3%;
  }

  &[type='title']::after {
    content: '';
    position: absolute;
    top: 26%;
    left: 0;
    width: 0.2rem;
    height: 45%;
    background-color: var(--light02);
    z-index: 12;
  }

  &[type='title'] span {
    font-weight: 500;
    margin-left: -0.1rem;
    color: var(--light01) !important;
  }

  &[type='title'] svg {
    color: var(--light01);
  }
`;

export default SubNavList;

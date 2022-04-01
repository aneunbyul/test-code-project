import {useState, useCallback, useEffect, useRef, useContext} from 'react';
import Header from '../../layouts/Header';
import Nav from '../../layouts/Nav';
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import * as React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MainCard from './MainCard';
import ViewBox from '../ViewBox/ViewBox';

const MainTop = () => {
  return (
    <ViewBox>
      <Stack direction={'row'}>
        <MainCard value={'미결함'} />
        <MainCard value={'진행함'} />
        <MainCard value={'완료함'} />
        <MainCard value={'반려함'} />
        <MainCard value={'취소함'} />
      </Stack>
    </ViewBox>
  );
};

export default MainTop;

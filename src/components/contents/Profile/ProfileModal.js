import * as React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {
  Box,
  Modal,
  Button,
  Typography,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

//components
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ProfileModal = () => {
  return (
    <ProfileWrapper sx={{boxShadow: 24}}>
      <ViewBox>
        <ProfileContainer>
          <Button
            sx={{
              position: 'absolute',
              top: 0,
              right: 0,
              minWidth: 'calc(var(--box-contracted-length) * 0.4)',
              minHeight: 'calc(var(--box-contracted-length) * 0.4)',
            }}>
            <FilloutIcon size="big" />
          </Button>

          <GridContainer container row-spacing={0}>
            <Grid item xs={12}>
              <Box component="h6">ID</Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{shrink: false}}
                fullWidth
                required
                id="outlined-required"
                label="입력"
              />
            </Grid>

            <Grid item xs={12}>
              <Box component="h6">passwords</Box>
            </Grid>
            <Grid item xs={12}>
              <TextField
                InputLabelProps={{shrink: false}}
                fullWidth
                required
                id="outlined-required"
                label="입력"
              />
            </Grid>

            <Grid item xs={12}>
              <Button sx={{marginTop: '2rem'}}>
                <FilloutIcon text="로그인" size="big" />
              </Button>
            </Grid>
          </GridContainer>
        </ProfileContainer>
      </ViewBox>
    </ProfileWrapper>
  );
};

const ProfileWrapper = styled(Box)`
  position: absolute;
  bottom: var(--box-contracted-length);
  left: var(--box-contracted-length);
  transform: translate(var(--box-contracted-length), 0);
  width: 22rem;
  height: auto;
  background-color: transparent;
`;

const ProfileContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding: 0.7rem;

  padding-bottom: 3rem;
`;

const GridContainer = styled(Grid)`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;

    padding: 0rem var(--writing-padding);
  }
`;

export default ProfileModal;

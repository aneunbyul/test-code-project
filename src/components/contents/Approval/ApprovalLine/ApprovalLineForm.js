import * as React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  GlobalStyle,
} from '@mui/material';
import OrganizationBox from './OrganizationBox';
import PersonelListBox from './PersonelListBox';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../CustomMuiStyle';
import ViewBox from '../../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ApprovalLineForm = () => {
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  function union(a, b) {
    return [...a, ...not(b, a)];
  }

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);
  const [bottom, setBottom] = React.useState([8, 9]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);
  const bottomChecked = intersection(checked, bottom);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedBottom = () => {
    setBottom(bottom.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleCheckedLeftFromBottom = () => {
    setLeft(left.concat(bottomChecked));
    setBottom(not(bottom, bottomChecked));
    setChecked(not(checked, bottomChecked));
  };

  return (
    <ViewBox>
      <Stack
        direction={'row'}
        alignSelf={'center'}
        justifyContent={'center'}
        sx={{marginTop: '1.5rem'}}>
        <Box component="h5">결재선</Box>
      </Stack>
      <FormContainer>
        <GridContainer container columnSpacing={{xs: 0}}>
          <Grid item xs={5}>
            <OrganizationBox />
          </Grid>
          <Grid item xs={7}>
            <PersonelListBox
              borderType="leftOff"
              title="임직원 목록"
              checked={checked}
              assignedHooks={left}
              numberOfChecked={numberOfChecked}
              handleToggle={handleToggle}
              handleToggleAll={handleToggleAll}></PersonelListBox>
          </Grid>
        </GridContainer>
        <GridContainer
          sx={{marginTop: '3vh'}}
          container
          columnSpacing={{xs: 5}}>
          <Grid item xs={6}>
            <Grid container direction="rows" alignItems="center">
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '100%',
                    borderTopRightRadius: '0 !important',
                    borderBottomRightRadius: '0 !important',
                    borderRightWidth: '0 !important',
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedRight}
                  disabled={leftChecked.length === 0}
                  aria-label="move selected left"
                  startIcon={<ArrowDropDownIcon />}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '100%',
                    borderTopLeftRadius: '0 !important',
                    borderBottomLeftRadius: '0 !important',
                    borderLeftWidth: '0 !important',
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeft}
                  disabled={rightChecked.length === 0}
                  aria-label="move selected left"
                  startIcon={<ArrowDropUpIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <Grid container direction="rows" alignItems="center">
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '100%',
                    borderTopRightRadius: '0 !important',
                    borderBottomRightRadius: '0 !important',
                    borderRightWidth: '0 !important',
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedBottom}
                  disabled={leftChecked.length === 0}
                  startIcon={<ArrowDropDownIcon />}
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  sx={{
                    width: '100%',
                    borderTopLeftRadius: '0 !important',
                    borderBottomLeftRadius: '0 !important',
                    borderLeftWidth: '0 !important',
                  }}
                  variant="outlined"
                  size="small"
                  onClick={handleCheckedLeftFromBottom}
                  disabled={bottomChecked.length === 0}
                  startIcon={<ArrowDropUpIcon />}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <PersonelListBox
              title="결재자 목록"
              checked={checked}
              assignedHooks={right}
              numberOfChecked={numberOfChecked}
              handleToggle={handleToggle}
              handleToggleAll={handleToggleAll}></PersonelListBox>
          </Grid>

          <Grid item xs={6}>
            <PersonelListBox
              title="참조자 목록"
              checked={checked}
              assignedHooks={bottom}
              numberOfChecked={numberOfChecked}
              handleToggle={handleToggle}
              handleToggleAll={handleToggleAll}></PersonelListBox>
          </Grid>
        </GridContainer>
        <Button size={'large'}>적용하기</Button>
      </FormContainer>
    </ViewBox>
  );
};

const FormContainer = styled(Box)`
  width: 100%;
  height: 100%;
  padding: var(--writing-padding);
`;
const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
  }
  }
`;
export default ApprovalLineForm;

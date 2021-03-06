import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from '@mui/material';
import styled from 'styled-components';

const ExpenseDetails = (props) => {
  const [Assignment, setAssignment] = React.useState('');

  const handleChange = (event) => {
    setAssignment(event.target.value);
  };

  const [BudgetMajorCategory, setBudgetMajorCategory] = React.useState('');

  const BudgetMajorCategoryHandleChange = (event) => {
    setBudgetMajorCategory(event.target.value);
  };

  return (
    <>
      <GridContainer container columnSpacing={2} rowSpacing={1.5}>
        <Grid item xs={3 / 2}>
          <Box component="h6">구분</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">성명</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">교통비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">일비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">식비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">숙박비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">기타</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h6">합계</Box>
        </Grid>

        {/*출장자 추가시 아래 항목도 함께 추가*/}
        <Grid item xs={3 / 2}>
          <Box component="h5">사용경비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">안은별</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">125,0000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">20,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">27,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">50,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">13,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">255,000</Box>
        </Grid>
        {/**/}
        <Grid item xs={3 / 2}>
          <Box component="h5">사용경비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">조지헌</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">100,0000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">20,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">27,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">50,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">0</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">217,000</Box>
        </Grid>

        {/**/}
        <Grid item xs={3}>
          <Box component="h5">합계</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">225,0000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">40,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">54,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">100,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">13,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box component="h5">472,000</Box>
        </Grid>
      </GridContainer>
    </>
  );
};
ExpenseDetails.defaultProps = {
  disableSelection: false,
};

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;

export default ExpenseDetails;

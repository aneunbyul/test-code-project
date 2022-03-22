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

const ExpenseDetails = () => {
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
      <GridContainer container>
        <Grid item xs={3 / 2}>
          <Box>구분</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>성명</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>교통비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>일비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>식비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>숙박비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>기타</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>합계</Box>
        </Grid>

        {/*출장자 추가시 아래 항목도 함께 추가*/}
        <Grid item xs={3 / 2}>
          <Box>사용경비</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>안은별</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>125,0000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>20,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>27,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>50,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>13,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>255,000</Box>
        </Grid>

        {/**/}
        <Grid item xs={3}>
          <Box>합계</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>125,0000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>20,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>27,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>50,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>13,000</Box>
        </Grid>
        <Grid item xs={3 / 2}>
          <Box>255,000</Box>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
    background-color: white;
    height: 10vh;
    align-items: center;
}
`;

export default ExpenseDetails;

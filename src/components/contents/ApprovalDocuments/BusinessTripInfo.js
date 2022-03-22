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

const BusinessTripInfo = () => {
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
        <Grid item xs={2}>
          <Box>신청인</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>안은별</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>신청번호(사번)</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>07</Box>
        </Grid>

        <Grid item xs={2}>
          <Box>목적지</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>부산</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>출장기간</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>2020/08/07 ~ 2020/08/07 (0박 1일)</Box>
        </Grid>

        <Grid item xs={2}>
          <Box>출장목적</Box>
        </Grid>
        <Grid item xs={10}>
          <Box>산자부 진도 점검</Box>
        </Grid>

        <Grid item xs={2}>
          <Box>특이사항</Box>
        </Grid>
        <Grid item xs={10}>
          <Box>특이사항 입력상자</Box>
        </Grid>

        <Grid item xs={2}>
          <Box>출장자</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>00회</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>식비유보</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>00회</Box>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
    background-color: white;
    height: 20vh;
    align-items: center;
}
`;

export default BusinessTripInfo;

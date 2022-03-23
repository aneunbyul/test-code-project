import * as React from 'react';
import {Box, Button, Grid} from '@mui/material';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import DatePicker from '@mui/lab/DatePicker';

const EmployeeDetailInfo = () => {
  const [value, setValue] = React.useState(null);

  return (
    <>
      <GridContainer container>
        <Grid item xs={2}>
          <Box>부서</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            disabled
            id="outlined-required"
            label="부서 선택"
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">선택</Button>
        </Grid>

        <Grid item xs={2}>
          <Box>사원번호</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            type="number"
            id="outlined-required"
            label=""
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">중복체크</Button>
        </Grid>

        <Grid item xs={2}>
          <Box>직위</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField required id="outlined-required" label="직위" />
        </Grid>
        <Grid item xs={2}>
          <Box>직급</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField required id="outlined-required" label="직급" />
        </Grid>

        <Grid item xs={2}>
          <Box>입사일자</Box>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="yyyy-MM-dd"
              label="입사일자 선택"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={2}>
          <Box>퇴사 일자</Box>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="yyyy-MM-dd"
              label="퇴사일자 선택"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
  align-items: center;
`;

export default EmployeeDetailInfo;

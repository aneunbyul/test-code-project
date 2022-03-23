import * as React from 'react';
import {Box, Button, Grid, InputAdornment} from '@mui/material';
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import {MobileDateRangePicker} from '@mui/lab';

const EmployeeBasicInfo = () => {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get('email'),
  //     password: data.get('password'),
  //   });
  // };

  const [value, setValue] = React.useState(null);

  return (
    <>
      <GridContainer container>
        <Grid item xs={2}>
          <Box>사용자 ID</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="id 입력"
          />
        </Grid>
        <Grid item xs={2}>
          <Button variant="outlined">중복체크</Button>
        </Grid>
        <Grid item xs={6}></Grid>

        <Grid item xs={2}>
          <Box>비밀번호</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="비밀번호 입력"
          />
        </Grid>
        <Grid item xs={2}>
          <Box>비밀번호 확인</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="비밀번호 입력"
          />
        </Grid>

        <Grid item xs={2}>
          <Box>성명</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField fullWidth required id="outlined-required" label="성명" />
        </Grid>
        <Grid item xs={2}>
          <Box>생년월일</Box>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              inputFormat="yyyy-MM-dd"
              label="생년월일 선택"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item xs={2}>
          <Box>메일</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="메일주소"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">@telepix.net</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <Box>전화번호</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="전화번호"
          />
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
  align-items: center;
`;

export default EmployeeBasicInfo;

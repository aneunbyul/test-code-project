import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Box,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import styled from 'styled-components';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {DesktopDateRangePicker} from '@mui/lab';

const BusinessTripInfo = () => {
  const [value, setValue] = React.useState([null, null]);
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
          <TextField
            required
            id="outlined-required"
            label="필수입력"
            placeholder="목적지(도시)"
          />
        </Grid>
        <Grid item xs={2}>
          <Box>출장기간</Box>
        </Grid>
        <Grid item xs={4}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDateRangePicker
              startText="출발일"
              endText="도착일"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <TextField {...startProps} />
                  <TextField {...endProps} />
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={2}>
          <Box>출장목적</Box>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="필수입력"
          />
        </Grid>
        <Grid item xs={2}>
          <Box>특이사항</Box>
        </Grid>
        <Grid item xs={10}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
          />
        </Grid>
        <Grid item xs={2}>
          <Box>출장자</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>2명</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>식비유보</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            required
            id="outlined-required"
            label="선택입력"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">회</InputAdornment>
              ),
            }}
          />
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

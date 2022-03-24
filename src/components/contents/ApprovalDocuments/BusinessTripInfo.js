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
import {DesktopDateRangePicker, MobileDateRangePicker} from '@mui/lab';

const BusinessTripInfo = () => {
  const [value, setValue] = React.useState([null, null]);
  return (
    <>
      <GridContainer container spacing={4}>
        <Grid item xs={6}>
          <Box component="h6">신청인</Box>
          <Box component="h5">안은별</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">신청번호(사번)</Box>
          <Box component="h5">07</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">목적지</Box>
          <TextField
            required
            id="outlined-required"
            label="필수입력"
            placeholder="목적지(도시)"
          />
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">출장기간</Box>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateRangePicker
              startText="출발일"
              endText="도착일"
              value={value}
              inputFormat="yyyy/MM/dd"
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
        <Grid item xs={12}>
          <Box component="h6">출장목적</Box>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="필수입력"
          />
        </Grid>
        <Grid item xs={12}>
          <Box component="h6">특이사항</Box>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
          />
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">출장자</Box>
          <TextField
            required
            id="outlined-required"
            label="필수입력"
            type="number"
            InputProps={{
              endAdornment: (
                <InputAdornment position="start">명</InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">식비유보</Box>
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
  width: 100%;
  height: 100%;
  align-items: center;
`;

export default BusinessTripInfo;

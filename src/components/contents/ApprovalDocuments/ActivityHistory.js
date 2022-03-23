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
  TextField,
} from '@mui/material';
import styled from 'styled-components';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {MobileDateRangePicker} from '@mui/lab';

const ActivityHistory = () => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <GridContainer container>
        <Grid item xs={3}>
          <Box>출발일자</Box>
        </Grid>
        <Grid item xs={3}>
          <Box>종료일자</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>활동내역</Box>
        </Grid>

        {/*출장자가 추가될때마다 추가 생성*/}
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateRangePicker
              startText="출발일자"
              endText="종료일자"
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
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="선택입력"
            placeholder="활동내역 입력"
          />
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

export default ActivityHistory;

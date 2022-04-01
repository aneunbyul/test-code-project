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
import {DatePicker, MobileDateRangePicker} from '@mui/lab';

const ActivityHistory = (props) => {
  const [value, setValue] = React.useState(null);

  return (
    <>
      <GridContainer container columnSpacing={{xs: 5}}>
        <Grid item xs={3}>
          <Box component="h6">일자</Box>
        </Grid>
        <Grid item xs={9}>
          <Box component="h6">활동내역</Box>
        </Grid>

        {/*출장자가 추가될때마다 추가 생성*/}
        <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              disabled={props.disableSelection}
              label="입력"
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField disabled={props.disableSelection} {...params} />
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={9}>
          <TextField
            disabled={props.disableSelection}
            InputLabelProps={{shrink: false}}
            required
            fullWidth
            id="outlined-required"
            label="선택입력"
            placeholder="활동내역 입력"
          />
        </Grid>
      </GridContainer>
    </>
  );
};

ActivityHistory.defaultProps = {
  disableSelection: false,
};

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;

export default ActivityHistory;

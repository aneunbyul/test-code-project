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

const ActivityHistory = (props) => {
  const [value, setValue] = React.useState([null, null]);

  return (
    <>
      <GridContainer container columnSpacing={{xs: 5}}>
        <Grid item xs={3}>
          <Box component="h6">출발일자</Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">종료일자</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">활동내역</Box>
        </Grid>

        {/*출장자가 추가될때마다 추가 생성*/}
        <Grid item xs={6}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <MobileDateRangePicker
              disabled={props.disableSelection}
              InputLabelProps={{shrink: false}}
              startText="출발일자"
              endText="종료일자"
              cancelText="취소"
              clearText="초기화"
              okText="적용"
              toolbarTitle="날짜 선택"
              value={value}
              inputFormat={'yyyy-MM-dd'}
              mask={'____-__-__'}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(startProps, endProps) => (
                <React.Fragment>
                  <React.Fragment>
                    <TextField
                      disabled={props.disableSelection}
                      InputLabelProps={{shrink: false}}
                      {...startProps}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius:
                            'var(--global-border-radius) 0 0 var(--global-border-radius)',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderRightWidth: '0',
                        },
                      }}
                    />
                    <TextField
                      disabled={props.disableSelection}
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius:
                            '0 var(--global-border-radius) var(--global-border-radius) 0',
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                          borderLeftWidth: '0',
                        },
                      }}
                      InputLabelProps={{shrink: false}}
                      {...endProps}
                    />
                  </React.Fragment>
                </React.Fragment>
              )}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled={props.disableSelection}
            InputLabelProps={{shrink: false}}
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
  &&& {
    align-items: center;

    padding: 0rem var(--writing-padding);
  }
`;

export default ActivityHistory;

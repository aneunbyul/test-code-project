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

import TextField from '@mui/material/TextField';

const BusinessTravelerInfo = (props) => {
  return (
    <>
      <GridContainer container columnSpacing={{xs: 1}}>
        <Grid item xs={2}>
          <Box component="h6">출장자</Box>
        </Grid>
        <Grid item xs={2}>
          <Box component="h6">출발지</Box>
        </Grid>
        <Grid item xs={2}>
          <Box component="h6">목적지</Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">출장기간</Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">교통수단</Box>
        </Grid>

        {/*신청인이 디폴트값으로 들어감*/}
        {/*추가 버튼 누를때마다 한줄씩 추가*/}
        {/*추가버튼은 위치 미정*/}
        <Grid item xs={2}>
          <Box component="h5">안은별</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            disabled={props.disableSelection}
            InputLabelProps={{shrink: false}}
            fullWidth
            required
            id="outlined-required"
            label="입력"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            disabled={props.disableSelection}
            InputLabelProps={{shrink: false}}
            fullWidth
            required
            id="outlined-required"
            label="입력"
            defaultValue="부산"
          />
        </Grid>
        <Grid item xs={3}>
          <Box component="h5">{'2020.08.07 - 2020.08.07'}</Box>
        </Grid>
        <Grid item xs={3}>
          <TextField
            disabled={props.disableSelection}
            InputLabelProps={{shrink: false}}
            fullWidth
            required
            id="outlined-required"
            label="입력"
          />
        </Grid>
      </GridContainer>
    </>
  );
};

BusinessTravelerInfo.defualtProps = {
  disableSelection: false,
};

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;

export default BusinessTravelerInfo;

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

const BusinessTravelerInfo = () => {
  return (
    <>
      <GridContainer container>
        <Grid item xs={2}>
          <Box>출장자</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>출발지</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>경유지</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>목적지</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>출장기간</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>교통수단</Box>
        </Grid>

        {/*신청인이 디폴트값으로 들어감*/}
        {/*추가 버튼 누를때마다 한줄씩 추가*/}
        {/*추가버튼은 위치 미정*/}
        <Grid item xs={2}>
          <Box>안은별</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
            defaultValue="부산"
          />
        </Grid>
        <Grid item xs={2}>
          <Box>2020/08/07~2020/08/07</Box>
        </Grid>
        <Grid item xs={2}>
          <TextField
            fullWidth
            required
            id="outlined-required"
            label="선택입력"
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
`;

export default BusinessTravelerInfo;

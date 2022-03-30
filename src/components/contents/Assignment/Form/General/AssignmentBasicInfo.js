import * as React from 'react';
import styled from 'styled-components';
import {
  Stack,
  Box,
  TextField,
  Typography,
  Container,
  Grid,
} from '@mui/material';

const AssignmentBasicInfo = (props) => {
  // 이 변수로 Mui select와 label의 비활성화 결정
  let disableSelection = props.disableSelection;

  return (
    <>
      <GridContainer container columnSpacing={{xs: 3}}>
        <Grid item xs={4}>
          <Box component="h6">상위사업명</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">과제명</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">계정번호</Box>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="상위사업명"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="과제명"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="계정번호"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">과제책임자</Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">실무책임자</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">총사업기간</Box>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="과제책임자"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="실무책임자"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="총사업기간"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={3}>
          <Box component="h6">총사업비</Box>
        </Grid>
        <Grid item xs={3}>
          <Box component="h6">해당연차 사업비</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">해당연차 사업기간</Box>
        </Grid>

        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="총사업비"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="해당연차 사업비"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="해당연차 사업기간"
            variant="outlined"
          />
        </Grid>

        <Grid item xs={4}>
          <Box component="h6">발주처</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">관리기관(사업비관리시스템)</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">연관과제</Box>
        </Grid>

        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="발주처"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="관리기관"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="연관과제"
            variant="outlined"
          />
        </Grid>
      </GridContainer>
    </>
  );
};

AssignmentBasicInfo.defaultProps = {
  disableSelection: false,
};
const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;
export default AssignmentBasicInfo;

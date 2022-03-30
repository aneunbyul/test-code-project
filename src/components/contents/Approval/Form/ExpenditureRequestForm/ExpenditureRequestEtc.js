import * as React from 'react';
import styled from 'styled-components';
import {Box, Grid, TextField, Typography} from '@mui/material';

const ExpenditureRequestEtc = () => {
  return (
    <GridContainer container columnSpacing={5}>
      <Grid item xs={12}>
        <Box component="h6">기타사항</Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          InputLabelProps={{shrink: false}}
          fullWidth
          required
          id="outlined-required"
          label="선택 입력"
        />
      </Grid>
    </GridContainer>
  );
};

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;

    padding: 0 var(--writing-padding);
  }
`;

export default ExpenditureRequestEtc;

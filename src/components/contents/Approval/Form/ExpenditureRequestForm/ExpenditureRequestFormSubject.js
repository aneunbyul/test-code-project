import * as React from 'react';
import styled from 'styled-components';
import {Box, Grid, TextField} from '@mui/material';

const ExpenditureRequestFormSubject = () => {
  return (
    <GridContainer container columnSpacing={5}>
      <Grid item xs={12}>
        <Box component="h6">제목</Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          InputLabelProps={{shrink: false}}
          fullWidth
          required
          id="outlined-required"
          label="자동입력 형식 필요"
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

export default ExpenditureRequestFormSubject;

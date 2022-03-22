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

const AttachedFile = () => {
  return (
    <>
      <GridContainer container>
        <Grid item xs={2}>
          <Box>첨부파일</Box>
        </Grid>
        <Grid item xs={10}>
          <Box>파일리스트</Box>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
    height: 5vh;
    align-items: center;
}
`;

export default AttachedFile;

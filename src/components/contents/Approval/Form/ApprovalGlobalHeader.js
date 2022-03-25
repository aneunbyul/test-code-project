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
  Typography,
  GlobalStyle,
} from '@mui/material';
import styled from 'styled-components';

const ApprovalGlobalHeader = () => {
  return (
    <>
      <ToolContainer>
        <Stack spacing={2} direction="row">
          <Button variant="contained">기안</Button>
          <Button variant="outlined">결재선</Button>
          <Button variant="outlined">임시저장</Button>
          <Button variant="outlined">문서연결</Button>
        </Stack>
      </ToolContainer>

      <GridContainer>
        <Typography variant="h4" align="center">
          출장신청서
        </Typography>
      </GridContainer>
    </>
  );
};

const ToolContainer = styled(Box)`
  position: absolute;
  top: 0;
  left: 0;
`;

const GridContainer = styled(Grid)`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;
    padding: var(--writing-padding);
    margin-top: 3rem;
  }
`;

export default ApprovalGlobalHeader;

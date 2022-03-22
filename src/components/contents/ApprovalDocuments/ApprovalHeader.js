import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ApprovalHeader = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Button variant="contained">기안</Button>
        <Button variant="outlined">결재선</Button>
        <Button variant="outlined">임시저장</Button>
        <Button variant="outlined">문서연결</Button>
      </Stack>
      {/*<Button variant="contained">Contained</Button>*/}
    </>
  );
};

export default ApprovalHeader;

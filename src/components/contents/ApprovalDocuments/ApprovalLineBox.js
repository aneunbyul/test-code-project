import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import styled from 'styled-components';

const ApprovalLineBox = () => {
  return (
    <ApprovalGrid direction="row" align="center">
      <Box>결재</Box>
      {/*결재선 컨텐츠 수는 유동적임*/}
      <Stack>
        <div>기안</div>
        <div>안은별</div>
        <div>서명</div>
      </Stack>
      <Stack>
        <div>팀장</div>
        <div>함선정</div>
        <div>서명</div>
      </Stack>
      <Stack>
        <div>팀장</div>
        <div>권아롱새</div>
        <div>서명</div>
      </Stack>
    </ApprovalGrid>
  );
};

const ApprovalGrid = styled(Stack)`
  position: relative;
  width: 100%;
  height:5vh;
  justify-content: flex-end;
  align-items: center;
}
`;

export default ApprovalLineBox;

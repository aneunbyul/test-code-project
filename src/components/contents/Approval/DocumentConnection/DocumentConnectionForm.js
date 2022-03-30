import * as React from 'react';
import styled from 'styled-components';
import {Box, Button, Stack} from '@mui/material';

import ViewBox from '../../ViewBox/ViewBox';
import 'simplebar/dist/simplebar.min.css';
import TableSearchTab from '../../Format/TableSearchTab';
import TableGridBody from '../../Format/TableGridBody';
import {useRecoilState} from 'recoil';
import {isDocumentConnectionState} from '../../../recoil/store';

const DocumentConnectionForm = () => {
  const [, setDocumentConnection] = useRecoilState(isDocumentConnectionState);
  const closeDocumentConnection = () => {
    setDocumentConnection(false);
  };

  const tempColumns = [
    {field: 'name', headerName: '기안자', flex: 1},
    {field: 'team', headerName: '담당 부서', flex: 1},
    {field: 'subject', headerName: '제목', flex: 1.8},
    {field: 'assignment', headerName: '과제', flex: 1.2},
    {field: 'Classification', headerName: '문서 종류', flex: 1},
    {
      field: 'dateCreated',
      headerName: '결재일',
      type: 'date',
      flex: 0.8,
    },
  ];
  return (
    <ViewBox>
      <FormContainer>
        <Stack
          direction={'row'}
          alignSelf={'center'}
          justifyContent={'center'}
          sx={{margin: '3rem'}}>
          <Box component="h5">문서연결</Box>
        </Stack>
        <TableSearchTab filter={'과제선택 담당부서'} />
        <TableGridBody columnData={tempColumns} />
        <Button size={'large'}>문서 연결하기</Button>
        <Button size={'large'} onClick={closeDocumentConnection}>
          닫기
        </Button>
      </FormContainer>
    </ViewBox>
  );
};

const FormContainer = styled(Box)`
  width: 100%;
  height: 100%;
`;

export default DocumentConnectionForm;

import * as React from 'react';
import styled from 'styled-components';
import {
  Box,
  Button,
  Container,
  Stack,
  Typography,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  GlobalStyle,
} from '@mui/material';
import OrganizationBox from './OrganizationBox';
import EmployeeListBox from './EmployeeListBox';
import AuthorizedPerson from './AuthorizedPerson';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../CustomMuiStyle';
import ViewBox from '../../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ApprovalLineForm = () => {
  return (
    <ViewBox>
      <FormContainer>
        <Box component="h6">결재선</Box>
        <Stack direction={'row'} sx={{marginBottom: '3rem'}}>
          <OrganizationBox />
          {/*<EmployeeListBox/>*/}
          <AuthorizedPerson />
        </Stack>
        <Button size={'large'}>적용하기</Button>
      </FormContainer>
    </ViewBox>
  );
};

const FormContainer = styled(Box)`
  width: 100%;
  height: 100px;
`;

export default ApprovalLineForm;

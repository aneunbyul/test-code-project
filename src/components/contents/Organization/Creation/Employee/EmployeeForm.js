import * as React from 'react';
import ViewBox from '../../../ViewBox/ViewBox';
import EmployeeBasicInfo from './EmployeeBasicInfo';
import {Container} from '@mui/material';
import styled from 'styled-components';
import EmployeeDetailInfo from './EmployeeDetailInfo';
import Typography from '@mui/material/Typography';

const EmployeeForm = () => {
  return (
    <ViewBox>
      <EmployeeFormContainer>
        <Typography color="text.primary" variant="h4" align="center">
          임직원 정보 추가
        </Typography>
        <EmployeeBasicInfo />
        <EmployeeDetailInfo />
      </EmployeeFormContainer>
    </ViewBox>
  );
};

const EmployeeFormContainer = styled(Container)`
  background-color: white;

  & .MuiGrid-container {
    border: 1px solid gray;
    margin-bottom: 3rem;
  }
`;
export default EmployeeForm;

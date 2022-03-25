import * as React from 'react';
import ApprovalHeader from './ApprovalHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ApprovalGlobalHeader from './ApprovalGlobalHeader';
import ApprovalGlobalInfo from './ApprovalGlobalInfo';
import BusinessTripInfo from './BusinessTripInfo';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';
import Divider from '@mui/material/Divider';

//components
import {useStyles} from '../../CustomMuiStyle';
import ViewBox from '../../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const ApprovalCreationForm = () => {
  return (
    <ViewBox>
      <ApprovalCreationContainer>
        <ApprovalGlobalHeader />
        <ApprovalGlobalInfo />
        <hr className="hr-divider" />
      </ApprovalCreationContainer>
    </ViewBox>
  );
};

const ApprovalCreationContainer = styled(SimpleBar)`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--transparent);
  }
`;

export default ApprovalCreationForm;

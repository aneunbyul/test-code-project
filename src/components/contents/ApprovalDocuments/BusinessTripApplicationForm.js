import * as React from 'react';
import ApprovalHeader from './ApprovalHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ApprovalLineBox from './ApprovalLineBox';
import ApprovalSubject from './ApprovalSubject';
import ApprovalInfo from './ApprovalInfo';
import BusinessTripInfo from './BusinessTripInfo';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';
import {CssBaseline} from '@material-ui/core';

//components
import {useStyles} from '../CustomMuiStyle';
import ViewBox from '../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const BusinessTripApplicationForm = () => {
  return (
    <ViewBox>
      <CssBaseline />
      <BusinessTripApplicationContainer>
        <ApprovalHeader />
        <ApprovalSubject />
        <ApprovalLineBox />
        <ApprovalInfo />
        <BusinessTripInfo />
        <BusinessTravelerInfo />
        <ActivityHistory />
        <ExpenseDetails />
        <AttachedFile />
      </BusinessTripApplicationContainer>
    </ViewBox>
  );
};

const BusinessTripApplicationContainer = styled(SimpleBar)`
  position: relative;
  min-width: 48rem;
  max-width: 65vw;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 2rem;
  background-color: var(--transparent);
`;

export default BusinessTripApplicationForm;

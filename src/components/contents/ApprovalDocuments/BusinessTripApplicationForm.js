import * as React from 'react';
import ApprovalHeader from './ApprovalHeader';
import ViewBox from '../ViewBox/ViewBox';
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

const BusinessTripApplicationForm = () => {
  return (
    <ViewBox>
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

const BusinessTripApplicationContainer = styled(Container)`
  background-color: white;
  height: 100%;

  & > div {
    border: 1px solid;

    & .MuiGrid-container {
      border: 1px solid gray;
      margin-bottom: 3rem;
    }
`;
export default BusinessTripApplicationForm;

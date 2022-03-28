import * as React from 'react';
import styled from 'styled-components';
import 'simplebar/dist/simplebar.min.css';
import AssignmentBasicInfo from './AssignmentBasicInfo';
import ViewBox from '../../ViewBox/ViewBox';
import ParticipatingResearcher from './ParticipatingResearcher';
import AssignmentBudget from './AssignmentBudget';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import {Box, Container, Stack, Typography} from '@mui/material';
import AssignmentAccount from './AssignmentAccount';
import BusinessExpenseCard from './BusinessExpenseCard';

const AssignmentCreationForm = () => {
  return (
    <Temp xs={{width: '100vw'}}>
      <AssignmentBasicInfo />
      <ParticipatingResearcher />
      <AssignmentBudget />
      <AssignmentAccount />
      <BusinessExpenseCard />
    </Temp>
  );
};

const Temp = styled(Container)`
  &&& {
    width: 100vw;
`;
export default AssignmentCreationForm;

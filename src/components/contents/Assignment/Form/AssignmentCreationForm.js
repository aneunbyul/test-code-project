import * as React from 'react';
import styled from 'styled-components';
import {Box, Container, Stack, Typography} from '@mui/material';
import ViewBox from '../../ViewBox/ViewBox';
import AssignmentBasicInfo from './General/AssignmentBasicInfo';
import ParticipatingResearcher from './General/ParticipatingResearcher';
import AssignmentBudget from './General/AssignmentBudget';
import AssignmentAccount from './General/AssignmentAccount';
import BusinessExpenseCard from './General/BusinessExpenseCard';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const AssignmentCreationForm = () => {
  return (
    <ViewBox>
      <AssignmentCreationContainer>
        <AssignmentBasicInfo />
        <hr className="hr-divider" />
        <ParticipatingResearcher />
        <hr className="hr-divider" />
        <AssignmentBudget />
        <hr className="hr-divider" />
        <AssignmentAccount />
        <hr className="hr-divider" />
        <BusinessExpenseCard />
        <hr className="hr-divider" />
      </AssignmentCreationContainer>
    </ViewBox>
  );
};

const AssignmentCreationContainer = styled(SimpleBar)`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--transparent);
    padding-bottom: 6rem;
  }
`;
export default AssignmentCreationForm;

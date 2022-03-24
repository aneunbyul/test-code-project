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

  & p,
  span {
    color: var(--light02);
  }

  & h5 {
    font-size: calc(var(--global-text-size) * 1.1);
    color: var(--light01);
    white-space: pre-wrap;
  }

  & h6 {
    position: relative;
    color: var(--light04);
    font-weight: 400;
    font-size: calc(var(--global-text-size) * 0.9);
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    white-space: pre-wrap;
  }

  & h4 {
    color: var(--light01);
    font-weight: 500;
    font-size: calc(var(--global-text-size) * 2.2);
  }

  & .MuiGrid-root .MuiGrid-container {
    margin-bottom: 0.2rem;
  }

  & .MuiInputBase-input {
    border: 0;
    font-size: var(--global-text-size);
    background-color: var(--dark01);
  }

  & .MuiInputLabel-root {
    font-size: var(--global-text-size);
    color: var(--light02);
  }

  & .MuiPaper-root {
    font-size: var(--global-text-size);
    color: var(--light02);
    background-color: black;
  }

  & .MuiMenuItem-root {
    font-size: var(--global-text-size);
    color: var(--light02);
    background-color: black;
  }

  & .MuiMenuItem-gutters {
    font-size: var(--global-text-size);
    color: var(--light02);
  }
`;

export default BusinessTripApplicationForm;

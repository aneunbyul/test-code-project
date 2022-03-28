import * as React from 'react';
import ApprovalHeader from './ApprovalHeader';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../CustomMuiStyle';
import ViewBox from '../../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import ApprovalGlobalHeader from './ApprovalGlobalHeader';
import ApprovalGlobalInfo from './ApprovalGlobalInfo';
import ApprovalLineBox from './ApprovalLineBox';
import ApprovalSubject from './ApprovalSubject';
import ApprovalInfo from './ApprovalInfo';
import BusinessTripInfo from './BusinessTripInfo';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';

const ApprovalCreationForm = () => {
  const [selectedFormName, setSelectedFormName] = useState('');

  const handleSelectedFormName = (event) => {
    setSelectedFormName(event.target.value);
  };

  return (
    <ViewBox>
      <ApprovalCreationContainer>
        <ApprovalGlobalHeader
          selectedFormName={selectedFormName}
          handleSelectedFormName={handleSelectedFormName}
        />
        <ApprovalGlobalInfo />

        <hr className="hr-divider" />
        <BusinessTripInfo />
        <hr className="hr-divider" />
        <BusinessTravelerInfo />
        <hr className="hr-divider" />
        <ActivityHistory />
        <hr className="hr-divider" />
        <ExpenseDetails />
        <hr className="hr-divider" />
        <AttachedFile />
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
    padding-bottom: 6rem;
  }
`;

export default ApprovalCreationForm;

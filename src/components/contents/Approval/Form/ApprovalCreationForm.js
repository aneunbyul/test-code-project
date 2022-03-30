import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../CustomMuiStyle';
import ViewBox from '../../ViewBox/ViewBox';
import FormDivider from '../../ReusableContent/FormDivider';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import ApprovalHeader from './General/ApprovalHeader';
import ApprovalInfo from './General/ApprovalInfo';
import BusinessTripApplicationForm from './BusinessTripApplicationForm/BusinessTripApplicationForm';
import BusinessTripReportForm from './BusinessTripReportForm/BusinessTripReportForm';
import ExpenditureRequestForm from './ExpenditureRequestForm/ExpenditureRequestForm';
import ConferenceReportForm from './ConferenceReportForm/ConferenceReportForm';

const ApprovalCreationForm = (props) => {
  const [selectedFormName, setSelectedFormName] = useState('');
  const [formName, setFormName] = useState('');

  const handleSelectedFormName = (event) => {
    setSelectedFormName(event.target.value);
    setFormName(event.target.value);
  };

  return (
    <ViewBox>
      <ApprovalCreationContainer>
        <ApprovalHeader
          disabled={props.disableSelection}
          selectedFormName={selectedFormName}
          handleSelectedFormName={handleSelectedFormName}
        />
        <ApprovalInfo disabled={props.disableSelection} />
        <FormDivider />
        {formName === '출장신청서' ? (
          <BusinessTripApplicationForm disabled={props.disableSelection} />
        ) : formName === '출장복명서' ? (
          <BusinessTripReportForm disabled={props.disableSelection} />
        ) : formName === '지출요청서' ? (
          <ExpenditureRequestForm disabled={props.disableSelection} />
        ) : (
          <ConferenceReportForm disabled={props.disableSelection} />
        )}
      </ApprovalCreationContainer>
    </ViewBox>
  );
};

ApprovalCreationForm.defualtProps = {
  disableSelection: false,
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

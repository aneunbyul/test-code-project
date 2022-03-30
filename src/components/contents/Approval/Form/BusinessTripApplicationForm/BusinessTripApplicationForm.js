import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';
import Divider from '@mui/material/Divider';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../../CustomMuiStyle';
import ViewBox from '../../../ViewBox/ViewBox';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import FormCreationHeader from '../../../Format/FormCreationHeader';
import FormCreationInfo from '../../../Format/FormCreationInfo';
import BusinessTripInfo from './BusinessTripInfo';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';

const BusinessTripApplicationForm = (props) => {
  return (
    <div>
      <BusinessTripInfo disableSelection={props.disableSelection} />
      <hr className="hr-divider" />
      <BusinessTravelerInfo disabled={props.disableSelection} />
      <hr className="hr-divider" />
      <ActivityHistory disabled={props.disableSelection} />
      <hr className="hr-divider" />
      <ExpenseDetails disabled={props.disableSelection} />
      <hr className="hr-divider" />
      <AttachedFile disabled={props.disableSelection} />
    </div>
  );
};

BusinessTripApplicationForm.defaultProps = {
  disableSelection: false,
};

export default BusinessTripApplicationForm;

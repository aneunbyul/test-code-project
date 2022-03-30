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

import FormDivider from '../../../ReusableContent/FormDivider';
import BusinessTripInfo from './BusinessTripInfo';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';

const BusinessTripApplicationForm = (props) => {
  return (
    <div>
      <BusinessTripInfo disableSelection={props.disableSelection} />
      <FormDivider />
      <BusinessTravelerInfo disabled={props.disableSelection} />
      <FormDivider />
      <ActivityHistory disabled={props.disableSelection} />
      <FormDivider />
      <ExpenseDetails disabled={props.disableSelection} />
      <FormDivider />
      <AttachedFile disabled={props.disableSelection} />
    </div>
  );
};

BusinessTripApplicationForm.defaultProps = {
  disableSelection: false,
};

export default BusinessTripApplicationForm;

import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Container, Grid} from '@mui/material';
import styled from 'styled-components';

import {useState, useEffect} from 'react';

//components
import {useStyles} from '../../../CustomMuiStyle';
import ViewBox from '../../../ViewBox/ViewBox';
import FormDivider from '../../../ReusableContent/FormDivider';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

import BusinessTripInfo from './BusinessTripInfo';
import BusinessTravelerInfo from './BusinessTravelerInfo';
import ActivityHistory from './ActivityHistory';
import ExpenseDetails from './ExpenseDetails';
import AttachedFile from './AttachedFile';

const BusinessTripReportForm = (props) => {
  return (
    <div>
      <FormDivider />
      <BusinessTripInfo disableSelection={props.disableSelection} />
      <FormDivider />
      <BusinessTravelerInfo disableSelection={props.disableSelection} />
      <FormDivider />
      <ActivityHistory disableSelection={props.disableSelection} />
      <FormDivider />
      <ExpenseDetails disableSelection={props.disableSelection} />
      <FormDivider />
      <AttachedFile disableSelection={props.disableSelection} />
    </div>
  );
};

export default BusinessTripReportForm;

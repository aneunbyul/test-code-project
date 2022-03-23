import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import TripRequestListHeader from './TripRequestListHeader';
import TripRequestGrid from './TripRequestGrid';
import TripRequestGridSearch from './TripRequestGridSearch';

const TripRequestListForm = () => {
  return (
    <ViewBox>
      <TripRequestListHeader />
      <TripRequestGridSearch />
      <TripRequestGrid />
    </ViewBox>
  );
};

export default TripRequestListForm;

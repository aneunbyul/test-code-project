import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import TripRequestListHeader from './TripRequestListHeader';
import TripRequestListGrid from './TripRequestListGrid';
import TripRequestListSearch from './TripRequestListSearch';

const TripRequestListForm = () => {
  return (
    <ViewBox>
      <TripRequestListHeader />
      <TripRequestListSearch />
      <TripRequestListGrid />
    </ViewBox>
  );
};

export default TripRequestListForm;

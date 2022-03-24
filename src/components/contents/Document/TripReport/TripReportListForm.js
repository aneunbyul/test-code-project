import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import TripReportListHeader from './TripReportListHeader';
import TripReportListGrid from './TripReportListGrid';
import TripReportListSearch from './TripReportListSearch';

const TripReportListForm = () => {
  return (
    <ViewBox>
      <TripReportListHeader />
      <TripReportListSearch />
      <TripReportListGrid />
    </ViewBox>
  );
};

export default TripReportListForm;

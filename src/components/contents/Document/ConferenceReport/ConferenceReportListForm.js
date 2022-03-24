import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import ConferenceReportListHeader from './ConferenceReportListHeader';
import ExpenditureRequestGrid from './ConferenceReportListGrid';
import ConferenceReportListSearch from './ConferenceReportListSearch';

const ConferenceReportListForm = () => {
  return (
    <ViewBox>
      <ConferenceReportListHeader />
      <ConferenceReportListSearch />
      <ExpenditureRequestGrid />
    </ViewBox>
  );
};

export default ConferenceReportListForm;

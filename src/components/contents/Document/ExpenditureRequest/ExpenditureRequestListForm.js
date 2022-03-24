import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import ExpenditureRequestListHeader from './ExpenditureRequestListHeader';
import ExpenditureRequestListGrid from './ExpenditureRequestListGrid';
import ExpenditureRequestListSearch from './ExpenditureRequestListSearch';

const ExpenditureRequestListForm = () => {
  return (
    <ViewBox>
      <ExpenditureRequestListHeader />
      <ExpenditureRequestListSearch />
      <ExpenditureRequestListGrid />
    </ViewBox>
  );
};

export default ExpenditureRequestListForm;

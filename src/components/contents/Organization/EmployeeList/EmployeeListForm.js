import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Typography} from '@mui/material';
import EmployeeListHeader from './EmployeeListHeader';
import EmployeeListGrid from './EmployeeListGrid';
import EmployeeListSearch from './EmployeeListSearch';
import OrganizationChartForm from '../../OrganizationChart/OrganizationChartForm';

const EmployeeListForm = () => {
  return (
    <ViewBox>
      <OrganizationChartForm />
      <EmployeeListHeader />
      <EmployeeListSearch />
      <EmployeeListGrid />
    </ViewBox>
  );
};

export default EmployeeListForm;

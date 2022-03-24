import * as React from 'react';
import {Typography} from '@mui/material';

const EmployeeListHeader = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      height="5%"
      bgcolor="wheat"
      marginBottom="1rem">
      임직원 조회
    </Typography>
  );
};

export default EmployeeListHeader;

import * as React from 'react';
import {Typography} from '@mui/material';

const TripRequestListHeader = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      height="5%"
      bgcolor="wheat"
      marginBottom="1rem">
      출장신청서 조회
    </Typography>
  );
};

export default TripRequestListHeader;

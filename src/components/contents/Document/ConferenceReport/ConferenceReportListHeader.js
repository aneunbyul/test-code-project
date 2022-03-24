import * as React from 'react';
import {Typography} from '@mui/material';

const ConferenceReportListHeader = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      height="5%"
      bgcolor="wheat"
      marginBottom="1rem">
      회의비 사용 보고 조회
    </Typography>
  );
};

export default ConferenceReportListHeader;

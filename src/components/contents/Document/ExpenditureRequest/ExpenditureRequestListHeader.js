import * as React from 'react';
import {Typography} from '@mui/material';

const ExpenditureRequestListHeader = () => {
  return (
    <Typography
      variant="h4"
      align="center"
      height="5%"
      bgcolor="wheat"
      marginBottom="1rem">
      지출 요청서 조회
    </Typography>
  );
};

export default ExpenditureRequestListHeader;

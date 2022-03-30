import * as React from 'react';
import EditableTable from './EditableTableSrc';
import BusinessExpenseCardValue from './BusinessExpenseCardValue';
import {Box, Container, Stack, Typography} from '@mui/material';

const defaultData = [
  {
    bank: 'KB국민은행',
    account: '20220311',
    name: '권아롱새',
  },
];

const getData = (row) => {
  console.log(row, 'rows data');
};

const BusinessExpenseCard = () => {
  return (
    <Stack bgcolor={'transparent'}>
      <EditableTable
        initWithoutHead
        defaultData={defaultData}
        getData={getData}
        fieldsArr={BusinessExpenseCardValue}
      />
    </Stack>
  );
};

export default BusinessExpenseCard;

import * as React from 'react'
import EditableTable from './EditableTableSrc'
import AssignmentAccountValue from './AssignmentAccountValue'
import { Box, Container, Stack, Typography } from '@mui/material'

const defaultData = [
  {
    bank: 'KB국민은행',
    account: '20220311',
    amount: '20220311',
    date: '20220311',
  },
]

const getData = ( row ) => {
  console.log ( row, 'rows data' )
}

const AssignmentAccount = () => {
  return (
      <Stack bgcolor={ 'white' }>
        <Typography bgcolor={ 'Background' }>계좌 정보</Typography>
        <EditableTable
            initWithoutHead
            defaultData={ defaultData }
            getData={ getData }
            fieldsArr={ AssignmentAccountValue }
        />
      </Stack>
  )
}

export default AssignmentAccount

import * as React from 'react'
import EditableTable from './EditableTableSrc'
import ParticipatingResearcherValue from './ParticipatingResearcherValue'
import { Container, Stack, Typography } from '@mui/material'

const defaultData = [
  {
    name: '이름',
    start: '20220311',
    finish: '20220311',
  },
]

const getData = ( row ) => {
  console.log ( row, 'rows data' )
}

const ParticipatingResearcher = () => {
  return (
      <Stack bgcolor={ 'white' }>
        <Typography bgcolor={ 'Background' }>참여 연구원</Typography>
        <EditableTable
            initWithoutHead
            defaultData={ defaultData }
            getData={ getData }
            fieldsArr={ ParticipatingResearcherValue }
        />
      </Stack>
  )
}

export default ParticipatingResearcher

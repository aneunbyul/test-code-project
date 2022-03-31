import * as React from 'react'
import EditableTable from './EditableTableSrc'
import ParticipatingResearcherValue from './ParticipatingResearcherValue'
import { Container, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react'

const defaultData = [
  {
    name: '연구원 이름',
    start: '20220311',
    finish: '20220311',
  },
]

const getData = ( row ) => {
  console.log ( row, 'rows data' )
}

const ParticipatingResearcher = () => {
  return (
      <Stack bgcolor={ 'transparent' }>
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

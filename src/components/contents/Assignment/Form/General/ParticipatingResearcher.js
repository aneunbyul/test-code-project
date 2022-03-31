import * as React from 'react'
import EditableTable from './EditableTableSrc'
import ParticipatingResearcherValue from './ParticipatingResearcherValue'
import { Container, Stack, Typography } from '@mui/material'
import styled from 'styled-components'
import SimpleBar from 'simplebar-react'

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
      <TableContainer bgcolor={ 'transparent' }>
        <EditableTable
            initWithoutHead
            defaultData={ defaultData }
            getData={ getData }
            fieldsArr={ ParticipatingResearcherValue }
        />
      </TableContainer>
  )
}

const TableContainer = styled ( Stack )`
  &&& .MuiTable-root {
    border-bottom: 0.1rem solid var(--dark03);
    color: var(--light03);
  }

  &&& .MuiTable-root td {
    color: var(--light03);
  }

  &&& .MuiTableCell-head {
    border-bottom: 0.1rem solid var(--dark03);
    color: var(--light03);
  }

,
`
export default ParticipatingResearcher

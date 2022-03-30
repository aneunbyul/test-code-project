import * as React from 'react'
import ViewBox from '../../ViewBox/ViewBox'
import { Box, Grid, Container, Typography } from '@mui/material'
import styled from 'styled-components'
import TableSearchTab from '../../Format/TableSearchTab'
import TableGridBody from '../../Format/TableGridBody'

import { useState, useEffect } from 'react'
import AssignmentTableGridBody from '../../Format/AssignmentTableGridBody'

const CompletedTableForm = () => {
  const tempColumns = [
    { field: 'name', headerName: '과제책임자', flex: 1 },
    { field: 'team', headerName: '발주처', flex: 1 },
    { field: 'subject', headerName: '과제명', flex: 1.8 },
    { field: 'assignment', headerName: '총사업기간', flex: 1.2 },
    { field: 'Classification', headerName: '해당연차 사업기간', flex: 1 }
  ]

  return (
      <ViewBox>
        <FormContainer>
          <TableSearchTab filter={ ['담당부서', '과제선택'] }/>
          <AssignmentTableGridBody columnData={ tempColumns }/>
        </FormContainer>
      </ViewBox>
  )
}

const FormContainer = styled ( Box )`
  &&& {
    padding: 1rem 0;
    width: 100%;
    height: 95%;
  }
`

export default CompletedTableForm

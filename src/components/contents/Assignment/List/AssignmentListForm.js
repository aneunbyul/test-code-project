import * as React from 'react'
import ViewBox from '../../ViewBox/ViewBox'
import { Container, Typography } from '@mui/material'
import styled from 'styled-components'
import AssignmentListSearch from './AssignmentListSearch'
import AssignmentListGrid from './AssignmentListGrid'

const AssignmentListForm = () => {
  return (
      <Temp xs={ { width: '100vw' } }>
        <Typography>과제 조회</Typography>
        <AssignmentListSearch/>
        <AssignmentListGrid/>
      </Temp>
  )
}

const Temp = styled ( Container )`
  &&& {
    width: 100vw;
`
export default AssignmentListForm

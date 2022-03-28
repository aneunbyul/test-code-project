import * as React from 'react'
import ViewBox from '../../ViewBox/ViewBox'
import { Container, Typography } from '@mui/material'
import styled from 'styled-components'
import AssignmentListSearch from './PersonalDocumentsListSearch'
import AssignmentListGrid from './PersonalDocumentsListGrid'

const PersonalDocumentsListForm = () => {
  return (
      <Temp xs={ { width: '100vw' } }>
        <Typography>미결함</Typography>
        <AssignmentListSearch/>
        <AssignmentListGrid/>
      </Temp>
  )
}

const Temp = styled ( Container )`
  &&& {
    width: 100vw;
`
export default PersonalDocumentsListForm

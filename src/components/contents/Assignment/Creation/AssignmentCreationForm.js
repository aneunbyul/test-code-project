import * as React from 'react'
import styled from 'styled-components'
import 'simplebar/dist/simplebar.min.css'
import AssignmentBasicInfo from './AssignmentBasicInfo'
import ViewBox from '../../ViewBox/ViewBox'
import ParticipatingResearcher from './ParticipatingResearcher'
import AssignmentBudget from './AssignmentBudget'

const AssignmentCreationForm = () => {
  return (
      <ViewBox>
        <AssignmentBasicInfo/>
        <ParticipatingResearcher/>
        <AssignmentBudget/>
      </ViewBox>
  )
}

export default AssignmentCreationForm

import * as React from 'react'
import styled from 'styled-components'
import { Box, Container, Stack, Typography } from '@mui/material'
import ViewBox from '../../ViewBox/ViewBox'
import AssignmentBasicInfo from './General/AssignmentBasicInfo'
import ParticipatingResearcher from './General/ParticipatingResearcher'
import AssignmentBudget from './General/AssignmentBudget'
import AssignmentAccount from './General/AssignmentAccount'
import BusinessExpenseCard from './General/BusinessExpenseCard'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import FormDivider from '../../ReusableContent/FormDivider'

const AssignmentCreationForm = ( props ) => {
  return (
      <ViewBox>
        <AssignmentCreationContainer>
          <FormDivider text="과제 기본 정보"/>
          <AssignmentBasicInfo/>
          <FormDivider text="참여 연구원"/>
          <ParticipatingResearcher/>
          <FormDivider text="사업비"/>
          <AssignmentBudget/>
          <FormDivider text="계좌 정보"/>
          <AssignmentAccount/>
          <FormDivider text="사업비 사용카드"/>
          <BusinessExpenseCard/>
        </AssignmentCreationContainer>
      </ViewBox>
  )
}

AssignmentCreationForm.defualtProps = {
  disableSelection: false,
}

const AssignmentCreationContainer = styled ( SimpleBar )`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--transparent);
    padding-bottom: 6rem;
  }

  &&& .MuiTable-root {
    border-bottom: 0.1rem solid var(--dark03);
    color: var(--light03);
    width: inherit;
  }

  &&& .MuiTable-root tr {
    border-bottom: 0.1rem solid var(--dark03);
  }

  &&& .MuiTable-root td {
    color: var(--light03);
  }

  &&& .MuiTableCell-head {
    border-bottom: 0.1rem solid var(--dark03);
    color: var(--light03);
  }

  &&& .MuiTableCell-root input {
    color: var(--light03);
    padding: 16.5px 14px;
    border: 0.1rem solid var(--dark03);
  }

  &&& .ag-center-cols-viewport {
    background-color: var(--dark02);
  }

  &&& .ag-body-horizontal-scroll-viewport {
    background-color: var(--dark02);
  }

  &&& .ag-header-container {
    background-color: var(--dark02);
  }

  &&& .ag-row {
    color: var(--light02);
  }

  &&& .ag-row-even {
    background-color: var(--dark02);
  }

  &&& .ag-row-odd {
    background-color: var(--dark03);
  }

`
export default AssignmentCreationForm

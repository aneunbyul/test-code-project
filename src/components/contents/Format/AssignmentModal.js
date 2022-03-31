import * as React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {
  Box,
} from '@mui/material'

//components
import ViewBox from '../ViewBox/ViewBox'
import 'simplebar/dist/simplebar.min.css'
import ApprovalCreationForm from '../Approval/Form/ApprovalCreationForm'
import AssignmentCreationForm from '../Assignment/Form/AssignmentCreationForm'
import FormDivider from '../ReusableContent/FormDivider'
import AssignmentBasicInfo from '../Assignment/Form/General/AssignmentBasicInfo'
import ParticipatingResearcher from '../Assignment/Form/General/ParticipatingResearcher'
import AssignmentBudget from '../Assignment/Form/General/AssignmentBudget'
import AssignmentAccount from '../Assignment/Form/General/AssignmentAccount'
import BusinessExpenseCard from '../Assignment/Form/General/BusinessExpenseCard'
import SimpleBar from 'simplebar-react'
import AssignmentBudgetDetail from '../Assignment/Creation/AssignmentBudgetDetail'

const AssignmentModal = () => {
  const [disableFlag, setDisableFlag] = useState ( true )

  return (
      <ModalWrapper sx={ { boxShadow: 24 } }>
        <ViewBox>
          <AssignmentCreationContainer>
            <FormDivider text="과제 기본 정보"/>
            <AssignmentBasicInfo/>
            <FormDivider text="참여 연구원"/>
            <ParticipatingResearcher/>
            <FormDivider text="사업비"/>
            <AssignmentBudgetDetail/>
            <FormDivider text="계좌 정보"/>
            <AssignmentAccount/>
            <FormDivider text="사업비 사용카드"/>
            <BusinessExpenseCard/>
          </AssignmentCreationContainer>
        </ViewBox>
      </ModalWrapper>
  )
}

const ModalWrapper = styled ( Box )`
  position: absolute;
  top: 5%;
  left: 10%;
  transform: translate(var(--box-contracted-length), 0);
  width: 80%;
  height: 90%;
  background-color: transparent;
`

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
export default AssignmentModal

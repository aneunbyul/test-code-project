import * as React from 'react'
import ApprovalHeader from './ApprovalHeader'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Container, Grid } from '@mui/material'
import styled from 'styled-components'
import Divider from '@mui/material/Divider'

import { useState, useEffect } from 'react'

//components
import { useStyles } from '../../CustomMuiStyle'
import ViewBox from '../../ViewBox/ViewBox'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import FormCreationHeader from '../../Format/FormCreationHeader'
import FormCreationInfo from '../../Format/FormCreationInfo'
import BusinessTripApplicationForm from './BusinessTripApplicationForm/BusinessTripApplicationForm'
import BusinessTripReportForm from './BusinessTripReportForm/BusinessTripReportForm'
import ExpenditureRequestForm from './ExpenditureRequestForm/ExpenditureRequestForm'
import ConferenceReportForm from './ConferenceReportForm/ConferenceReportForm'

const ApprovalCreationForm = () => {
  const [selectedFormName, setSelectedFormName] = useState ( '' )
  const [formName, setFormName] = useState ( '' )

  const handleSelectedFormName = ( event ) => {
    setSelectedFormName ( event.target.value )
    setFormName ( event.target.value )

    console.log ( formName )
  }

  return (
      <ViewBox>
        <ApprovalCreationContainer>
          <FormCreationHeader
              selectedFormName={ selectedFormName }
              handleSelectedFormName={ handleSelectedFormName }
          />
          <FormCreationInfo/>
          <hr className="hr-divider"/>
          { (formName === '출장신청서') ? (<BusinessTripApplicationForm/>) :
              (formName === '출장복명서') ? (<BusinessTripReportForm/>) :
                  (formName === '지출요청서') ? (<ExpenditureRequestForm/>) :
                      (<ConferenceReportForm/>) }
        </ApprovalCreationContainer>
      </ViewBox>
  )
}

const ApprovalCreationContainer = styled ( SimpleBar )`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--transparent);
    padding-bottom: 6rem;
  }
`

export default ApprovalCreationForm

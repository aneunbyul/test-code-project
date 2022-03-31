import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Container, Grid } from '@mui/material'
import styled from 'styled-components'
import Divider from '@mui/material/Divider'

import { useState, useEffect } from 'react'

//components
import { useStyles } from '../../CustomMuiStyle'
import ViewBox from '../../ViewBox/ViewBox'
import FormDivider from '../../ReusableContent/FormDivider'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import ApprovalHeader from './General/ApprovalHeader'
import ApprovalInfo from './General/ApprovalInfo'
import BusinessTripApplicationForm from './BusinessTripApplicationForm/BusinessTripApplicationForm'
import BusinessTripReportForm from './BusinessTripReportForm/BusinessTripReportForm'
import ExpenditureRequestForm from './ExpenditureRequestForm/ExpenditureRequestForm'
import ConferenceReportForm from './ConferenceReportForm/ConferenceReportForm'

const ApprovalCreationForm = ( props ) => {
  const [selectedFormName, setSelectedFormName] = useState ( '' )
  const [formName, setFormName] = useState ( '' )

  const handleSelectedFormName = ( event ) => {
    setSelectedFormName ( event.target.value )
    setFormName ( event.target.value )
  }

  useEffect ( () => {
    if (formName === '') {
      setSelectedFormName ( '출장신청서' )
      setFormName ( '출장신청서' )
    }
  }, [] )

  return (
      <ViewBox>
        <ApprovalCreationContainer>
          <ApprovalHeader
              disableSelection={ props.disableSelection }
              selectedFormName={ selectedFormName }
              handleSelectedFormName={ handleSelectedFormName }
          />

          <ApprovalInfo disableSelection={ props.disableSelection }/>

          { formName != '' && <FormDivider/> }

          { formName === '출장신청서' ? (
              <BusinessTripApplicationForm
                  disableSelection={ props.disableSelection }
              />
          ) : formName === '출장복명서' ? (
              <BusinessTripReportForm disableSelection={ props.disableSelection }/>
          ) : formName === '지출요청서' ? (
              <ExpenditureRequestForm disableSelection={ props.disableSelection }/>
          ) : formName === '회의비 사용보고' ? (
              <ConferenceReportForm disableSelection={ props.disableSelection }/>
          ) : (
              <></>
          ) }
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

import * as React from 'react'
import ApprovalHeader from '../ApprovalHeader'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Container, Grid } from '@mui/material'
import styled from 'styled-components'
import Divider from '@mui/material/Divider'

import { useState, useEffect } from 'react'

//components
import { useStyles } from '../../../CustomMuiStyle'
import ViewBox from '../../../ViewBox/ViewBox'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

import FormCreationHeader from '../../../Format/FormCreationHeader'
import FormCreationInfo from '../../../Format/FormCreationInfo'
import BusinessTripInfo from './BusinessTripInfo'
import BusinessTravelerInfo from './BusinessTravelerInfo'
import ActivityHistory from './ActivityHistory'
import ExpenseDetails from './ExpenseDetails'
import AttachedFile from './AttachedFile'

const BusinessTripApplicationForm = () => {
  return (
      <div>
        <BusinessTripInfo/>
        <hr className="hr-divider"/>
        <BusinessTravelerInfo/>
        <hr className="hr-divider"/>
        <ActivityHistory/>
        <hr className="hr-divider"/>
        <ExpenseDetails/>
        <hr className="hr-divider"/>
        <AttachedFile/>
      </div>
  )
}

export default BusinessTripApplicationForm

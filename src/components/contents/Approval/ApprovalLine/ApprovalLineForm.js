import * as React from 'react'
import styled from 'styled-components'
import { Button, Container, Stack, Typography } from '@mui/material'
import OrganizationBox from './OrganizationBox'
import EmployeeListBox from './EmployeeListBox'
import AuthorizedPerson from './AuthorizedPerson'

const ApprovalLineForm = () => {
  return (
      <Temp>
        <Typography>결재선</Typography>
        <Stack direction={ 'row' } sx={ { marginBottom: '3rem' } }>
          <OrganizationBox/>
          {/*<EmployeeListBox/>*/ }
          <AuthorizedPerson/>
        </Stack>
        <Button size={ 'large' }>적용하기</Button>
      </Temp>
  )
}

const Temp = styled ( Container )`
  &&& {
    width: 100%;
    color: white;
`
export default ApprovalLineForm

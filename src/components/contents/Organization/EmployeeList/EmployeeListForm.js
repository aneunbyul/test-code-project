import * as React from 'react'
import ViewBox from '../../ViewBox/ViewBox'
import { Box, Typography } from '@mui/material'
import EmployeeListHeader from './EmployeeListHeader'
import EmployeeListGrid from './EmployeeListGrid'
import EmployeeListSearch from './EmployeeListSearch'
import OrganizationChartForm from '../OrganizationChart/OrganizationChartForm'
import TableSearchTab from '../../Format/TableSearchTab'
import AssignmentTableGridBody from '../../Format/AssignmentTableGridBody'
import styled from 'styled-components'
import EmployeeTableGridBody from './EmployeeTableGridBody'

const EmployeeListForm = () => {
  const columns = [
    { field: 'name', headerName: '이름', width: 180 },
    { field: 'team', headerName: '소속 부서', width: 180 },
    { field: 'position', headerName: '직위/직급', width: 300 },
    { field: 'phone', headerName: '연락처', width: 300 },
    { field: 'mail', headerName: '메일 주소', width: 300 },
  ]
  return (
      <ViewBox>
        {/*<EmployeeListHeader />*/ }
        {/*<EmployeeListSearch />*/ }
        {/*<EmployeeListGrid />*/ }
        >
        <FormContainer>
          <TableSearchTab filter={ ['담당부서', '과제선택'] }/>
          <EmployeeTableGridBody columnData={ columns }/>
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

export default EmployeeListForm

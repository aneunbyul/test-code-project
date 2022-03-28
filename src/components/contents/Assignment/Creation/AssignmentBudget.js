import styled from 'styled-components'
import { Button, Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const AssignmentBudget = () => {
  const gridRef = useRef ()

  const [rowData, setRowData] = useState ( [
    { 비목: '직접비', 세목: '인건비', 세세목: '내부인건비', 현금: '30000' },
    { 비목: '직접비', 세목: '연구활동비', 세세목: '회의비', 예산금액: '30000' },
    { 비목: '직접비', 세목: '연구활동비', 세세목: '출장비', 예산금액: '30000' },
  ] )

  const addRow = () => {
    const newData = {
      비목: '직접비',
      세목: '연구활동비',
      세세목: '생일파티 케익먹기'
    }
    setRowData ( [...rowData, newData] )
    return rowData
  }

  const GenderCellRenderer = ( props ) => {
    return props.value
  }
  const [columnDefs] = useState ( [
    {
      headerName: '사업비 항목',
      children: [
        { field: '비목', },
        { field: '세목' },
        { field: '세세목' },
      ]
    },
    {
      headerName: '예산금액',
      children: [
        { field: '현금', },
        { field: '현금(이월분)' },
        { field: '현물' },
        { field: '계' },
      ]
    },
  ] )

  return (
      <>
        <Typography bgcolor={ 'Background' } sx={ { marginTop: '5rem' } }>
          사업비
        </Typography>
        <Button variant="contained" onClick={ addRow }>항목 추가</Button>
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
          <AgGridReact
              ref={ gridRef }
              rowData={ rowData }
              columnDefs={ columnDefs }
              rowSelection="multiple"/>
        </div>
      </>
  )
}

export default AssignmentBudget
import styled from 'styled-components'
import { Container, Stack, TextField, Typography } from '@mui/material'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import { render } from 'react-dom'
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

const AssignmentBudget = () => {
  const gridRef = useRef ()


  let rowIdSequence = 100;

  const createDataItem = useCallback(() => {
    const obj = {
      id: rowIdSequence++,
      value1: Math.floor(Math.random() * 100),
      value2: Math.floor(Math.random() * 100)
    };

    return obj;
  }, [rowIdSequence]);

  // useEffect(() => {
  //   const createLeftRowData = () => ['Red', 'Green', 'Blue'].map(() => createDataItem())
  //   setLeftRowData(createLeftRowData());
  // }, [createDataItem]);

  const [rowData, setRowData] = useState ( [
    { 비목: '직접비', 세목: '인건비', 세세목: '내부인건비', 예산금액: '30000' },
    { 비목: '직접비', 세목: '연구활동비', 세세목: '회의비', 예산금액: '30000' },
    { 비목: '직접비', 세목: '연구활동비', 세세목: '출장비', 예산금액: '30000' },
  ] )

  const [columnDefs] = useState ( [
    { field: '비목' },
    { field: '세목' },
    { field: '세세목' },
    { field: '예산금액' },
  ] )

  return (
      <>
        <Typography bgcolor={ 'Background' } sx={ { marginTop: '5rem' } }>
          사업비
        </Typography>
        {/*<button onClick={ addRow }>추가</button>*/ }
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
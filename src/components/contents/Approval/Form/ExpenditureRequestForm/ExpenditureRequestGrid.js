import * as React from 'react'
// import 'simplebar/dist/simplebar.min.css'
import { useRef, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import { AgGridReact } from 'ag-grid-react'

const ExpenditureRequestGrid = () => {
  const gridRef = useRef ()

  const [rowData, setRowData] = useState ( [
    { contents: '전문가 활용', cost: 35000, num: 2, sum: 35000, date: '22.03.15' },
  ] )

  const [pinnedBottomRowData, setPinnedBottomRowData] = useState ( [
    { index: null, contents: '총 합계', sum: 'ㅁㅁㅁㅁ' },
  ] )

  const addRow = () => {
    const newData = {
      contents: '물품 구매',
      cost: '0',
      num: '1',
    }
    setRowData ( [...rowData, newData] )
    return rowData
  }

  const abValueGetter = ( params ) => {
    return params.data.cost * params.data.num
  }

  const [columnDefs] = useState ( [
    {
      headerName: '구분', colId: 0, valueGetter: ( params ) => { return params.node.rowIndex + 1 },
      field: 'index',
      width: 70,
    },
    {
      headerName: '항목',
      field: 'contents',
      editable: true,
      width: 250,
    },
    {
      field: 'cost',
      headerName: '비용',
      editable: true,
      width: 120,
      type: 'numType',
    },
    {
      field: 'num',
      headerName: '수량',
      editable: true,
      width: 70,
      type: 'numType'
    },
    {
      field: 'sum',
      headerName: '합계',
      colId: 'a&b',
      valueGetter: abValueGetter,
      width: 120
    },
    {
      field: '구매목적',
      editable: true
    },
    {
      field: 'date',
      headerName: '필요시점',
      editable: true,
      width: 150,
    },
  ] )

  return (
      <Stack direction={ 'row' }>
        <div className="ag-theme-alpine" style={ { height: 400, width: '100%' } }>
          <Button variant="contained" onClick={ addRow }>항목 추가</Button>
          <AgGridReact
              ref={ gridRef }
              rowData={ rowData }
              columnDefs={ columnDefs }
              rowSelection="multiple"
              pinnedBottomRowData={ pinnedBottomRowData }
          />
        </div>
      </Stack>
  )
}

export default ExpenditureRequestGrid

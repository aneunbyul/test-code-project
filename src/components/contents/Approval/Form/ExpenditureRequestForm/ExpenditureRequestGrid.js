import * as React from 'react'
import { useCallback, useRef, useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css'
import { AgGridReact } from 'ag-grid-react'

const ExpenditureRequestGrid = () => {
  const gridRef = useRef ()

  const onRemoveSelected = useCallback ( () => {
    const selectedData = gridRef.current.api.getSelectedRows ()
    const res = gridRef.current.api.applyTransaction ( { remove: selectedData } )
    printResult ( res )
  }, [] )

  const clearData = useCallback ( () => {
    setRowData ( [] )
  }, [] )

  const printResult = ( res ) => {
    console.log ( '---------------------------------------' )
    if (res.add) {
      res.add.forEach ( function ( rowNode ) {
        console.log ( 'Added Row Node', rowNode )
      } )
    }
    if (res.remove) {
      res.remove.forEach ( function ( rowNode ) {
        console.log ( 'Removed Row Node', rowNode )
      } )
    }
  }

  const [rowData, setRowData] = useState ( [
    {
      contents: '전문가 활용',
      cost: 35000,
      num: 2,
      sum: 35000,
      date: '22.03.15',
    },
  ] )

  const [pinnedBottomRowData, setPinnedBottomRowData] = useState ( [
    { index: null, contents: '총 합계', sum: '0' },
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
      headerName: '구분',
      colId: 0,
      valueGetter: ( params ) => {
        return params.node.rowIndex + 1
      },
      field: 'index',
    },
    {
      headerName: '항목',
      field: 'contents',
      editable: true,
    },
    {
      field: 'cost',
      headerName: '비용',
      editable: true,
      type: 'numType',
    },
    {
      field: 'num',
      headerName: '수량',
      editable: true,
      type: 'numType',
    },
    {
      field: 'sum',
      headerName: '합계',
      colId: 'a&b',
      valueGetter: { abValueGetter },
    },
    {
      field: '구매목적',
      editable: true,
    },
    {
      field: 'date',
      headerName: '필요시점',
      editable: true,
    },
  ] )

  return (
      <Stack direction={ 'row' }>
        <div
            className="ag-theme-balham-dark"
            style={ { height: 400, width: '100%' } }>
          <Button variant="contained" onClick={ addRow }>
            항목 추가
          </Button>
          <Button variant="contained" onClick={ onRemoveSelected }>
            항목 삭제
          </Button>
          <Button variant="contained" onClick={ clearData }>
            전체 삭제
          </Button>
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

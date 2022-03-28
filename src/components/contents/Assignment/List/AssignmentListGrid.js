import * as React from 'react'
import ViewBox from '../../ViewBox/ViewBox'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import {
  randomCommodity,
  randomCreatedDate, randomDate,
  randomTraderName, randomUpdatedDate,
} from '@mui/x-data-grid-generator'
import Typography from '@mui/material/Typography'

const AssignmentListGrid = () => {
  const columns = [
    { field: 'name', headerName: '과제책임자', width: 180 },
    { field: 'client', headerName: '발주처', width: 180 },
    { field: 'subject', headerName: '과제명', width: 500 },
    { field: 'total', headerName: '총사업기간', width: 300 },
    { field: 'year', headerName: '해당연차 사업기간', width: 300 },
  ]

  //더미 데이터로 그리드 생성
  const rows = []
  for (let i = 0; i < 100; i++) {
    rows.push ( {
      id: i,
      name: randomTraderName (),
      client: randomTraderName (),
      subject: randomCommodity (),
      total: '2020/10/01~2022/12/31',
      year: '2021/01/01~2022/03/31',
    } )
  }

  return (
      <div style={ { height: '70%', width: '100%', backgroundColor: 'wheat' } }>
        <DataGrid rows={ rows } columns={ columns } pageSize={ 15 } checkboxSelection/>
      </div>
  )
}

export default AssignmentListGrid

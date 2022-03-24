import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';
import {
  randomCommodity,
  randomCreatedDate,
  randomTraderName,
} from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';
import ExpenditureRequestListSearch from './ExpenditureRequestListSearch';

const ExpenditureRequestListGrid = () => {
  const columns = [
    {field: 'name', headerName: '기안자', width: 180},
    {field: 'team', headerName: '담당 부서', width: 180},
    {field: 'subject', headerName: '제목', width: 500},
    {field: 'assignment', headerName: '과제', width: 300},
    {field: 'Classification', headerName: '문서 종류', width: 300},
    {
      field: 'dateCreated',
      headerName: '결재일',
      type: 'date',
      width: 180,
    },
  ];

  //더미 데이터로 그리드 생성
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push({
      id: i,
      name: randomTraderName(),
      team: randomTraderName(),
      subject: randomCommodity(),
      assignment: randomCommodity(),
      dateCreated: randomCreatedDate(),
      Classification: '지출 요청서',
    });
  }

  return (
    <div style={{height: '70%', width: '100%', backgroundColor: 'wheat'}}>
      <DataGrid rows={rows} columns={columns} pageSize={15} checkboxSelection />
    </div>
  );
};

export default ExpenditureRequestListGrid;

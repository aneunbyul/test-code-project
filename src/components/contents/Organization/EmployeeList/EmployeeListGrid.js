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
  randomEmail,
  randomJobTitle,
  randomPhoneNumber,
  randomTraderName,
} from '@mui/x-data-grid-generator';
import Typography from '@mui/material/Typography';
import EmployeeListSearch from './EmployeeListSearch';

const EmployeeListGrid = () => {
  const columns = [
    {field: 'name', headerName: '이름', width: 180},
    {field: 'team', headerName: '소속 부서', width: 180},
    {field: 'position', headerName: '직위/직급', width: 300},
    {field: 'phone', headerName: '연락처', width: 300},
    {field: 'mail', headerName: '메일 주소', width: 300},
  ];

  //더미 데이터로 그리드 생성
  const rows = [];
  for (let i = 0; i < 100; i++) {
    rows.push({
      id: i,
      name: randomTraderName(),
      team: randomJobTitle(),
      position: randomCommodity() + ', ' + randomCommodity(),
      phone: randomPhoneNumber(),
      mail: randomEmail(),
    });
  }

  return (
    <div style={{height: '70%', width: '100%', backgroundColor: 'wheat'}}>
      <DataGrid rows={rows} columns={columns} pageSize={15} checkboxSelection />
    </div>
  );
};

export default EmployeeListGrid;

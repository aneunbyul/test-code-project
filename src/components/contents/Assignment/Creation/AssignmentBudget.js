import styled from 'styled-components';
import {Container, Stack, TextField, Typography} from '@mui/material';
import React, {useState} from 'react';
import {render} from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const AssignmentBudget = () => {
  const [rowData] = useState([
    {비목: '직접비', 세목: '인건비', 세세목: '내부인건비'},
    {비목: '직접비', 세목: '연구활동비', 세세목: '회의비'},
    {비목: '직접비', 세목: '연구활동비', 세세목: '출장비'},
  ]);

  const [columnDefs] = useState([
    {field: '비목'},
    {field: '세목'},
    {field: '세세목'},
    {field: '예산금액'},
  ]);
  return (
      <>
        <Typography bgcolor={'Background'} sx={{marginTop: '5rem'}}>
          사업비
        </Typography>
        <div className="ag-theme-alpine" style={{height: 400, width: '100%'}}>
          <AgGridReact rowData={rowData} columnDefs={columnDefs}></AgGridReact>
        </div>
      </>
  );
};

export default AssignmentBudget;
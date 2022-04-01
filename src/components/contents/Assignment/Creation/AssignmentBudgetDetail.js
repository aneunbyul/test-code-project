import * as React from 'react';
import {Button, Container, Stack, TextField, Typography} from '@mui/material';
import {useState, useRef, useCallback, useEffect} from 'react';
import {render} from 'react-dom';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import 'ag-grid-community/dist/styles/ag-theme-balham-dark.css';

const AssignmentBudgetDetail = (props) => {
  const gridRef = useRef();

  const printResult = (res) => {
    console.log('---------------------------------------');
    if (res.add) {
      res.add.forEach(function (rowNode) {
        console.log('Added Row Node', rowNode);
      });
    }
    if (res.remove) {
      res.remove.forEach(function (rowNode) {
        console.log('Removed Row Node', rowNode);
      });
    }
    if (res.update) {
      res.update.forEach(function (rowNode) {
        console.log('Updated Row Node', rowNode);
      });
    }
  };

  const defaultColDef = {
    width: 150,
    editable: true,
    // make every column use 'text' filter by default
    filter: 'agTextColumnFilter',
  };

  const [rowData, setRowData] = useState([
    {비목: '직접비', 세목: '인건비', 세세목: '내부인건비', 현금: '30000'},
    {비목: '직접비', 세목: '연구활동비', 세세목: '회의비', 예산금액: '30000'},
    {비목: '직접비', 세목: '연구활동비', 세세목: '출장비', 예산금액: '30000'},
  ]);

  const addRow = () => {
    const newData = {
      비목: '직접비',
      세목: '연구활동비',
      세세목: '장비구입',
    };
    setRowData([...rowData, newData]);
    return rowData;
  };

  const onRemoveSelected = useCallback(() => {
    const selectedData = gridRef.current.api.getSelectedRows();
    const res = gridRef.current.api.applyTransaction({remove: selectedData});
    printResult(res);
  }, []);

  const clearData = useCallback(() => {
    setRowData([]);
  }, []);

  const GenderCellRenderer = (props) => {
    return props.value;
  };
  const [columnDefs] = useState([
    {
      headerName: '사업비 항목',
      field: 'c1',
      children: [
        {
          field: '비목',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['직접비', '간접비'],
          },
        },
        {
          field: '세목',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: ['인건비', '연구활동비', '연구재료비'],
          },
        },
        {
          field: '세세목',
          cellEditor: 'agSelectCellEditor',
          cellEditorParams: {
            values: [
              '내부인건비',
              '연구시설',
              'others',
              'others',
              'others',
              'others',
              'others',
            ],
          },
        },
      ],
    },
    {
      headerName: '예산금액',
      field: 'c2',
      children: [
        {headerName: '현금', field: 'cash'},
        {headerName: '현금(이월분)', field: 'preCash'},
        {headerName: '현물', field: 'actual'},
        {headerName: '계', field: 'total'},
      ],
    },
    {
      headerName: '집행금액',
      children: [
        {
          field: '현금',
        },
        {
          field: '현금(이월분)',
        },
        {
          field: '현물',
        },
        {
          field: '계',
        },
      ],
    },
    {
      headerName: '잔액',
      children: [
        {
          field: '현금',
        },
        {
          field: '현금(이월분)',
        },
        {
          field: '현물',
        },
        {
          field: '계',
        },
      ],
    },
  ]);

  return (
    <>
      <Button
        disabled={props.disableSelection}
        variant="contained"
        onClick={addRow}>
        항목 추가
      </Button>
      <Button
        disabled={props.disableSelection}
        variant="contained"
        onClick={onRemoveSelected}>
        항목 삭제
      </Button>
      <Button
        disabled={props.disableSelection}
        variant="contained"
        onClick={clearData}>
        전체 삭제
      </Button>
      <div
        className="ag-theme-balham-dark"
        style={{height: 400, width: '100%'}}>
        <AgGridReact
          defaultColDef={defaultColDef}
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          rowSelection="multiple"
        />
      </div>
    </>
  );
};

export default AssignmentBudgetDetail;

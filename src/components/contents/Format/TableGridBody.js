import * as React from 'react';
import {Box, Grid, Container, Typography, LinearProgress} from '@mui/material';
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
  randomDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator';
import styled from 'styled-components';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const TableGridBody = ({columnData}) => {
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
      Classification: '출장 신청서',
    });
  }

  return (
    <SliderContainer>
      <DataGrid
        rows={rows}
        columns={columnData}
        pageSize={100}
        checkboxSelection
        scrollbarSize={17}
        components={{
          LoadingOverlay: LinearProgress,
        }}
        loading={false}
      />
    </SliderContainer>
  );
};

const SliderContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;

  & *::-webkit-scrollbar {
    width: 0.5rem;
  }
  & *::-webkit-scrollbar-thumb {
    overflow: visible;
    background-color: var(--dark03);
    border-radius: 1rem;
    border: 1px solid var(--light05);
  }
  & *::-webkit-scrollbar-thumb:hover {
    background-color: var(--light05) !important;
    border: 1px solid var(--light03);
  }
  & *::-webkit-scrollbar-track {
    background-color: transparent;
  }
`;

export default TableGridBody;

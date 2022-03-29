import * as React from 'react';
import ViewBox from '../../ViewBox/ViewBox';
import {Box, Grid, Container, Typography} from '@mui/material';
import styled from 'styled-components';
import TableSearchTab from '../../Format/TableSearchTab';
import TableGridBody from '../../Format/TableGridBody';

import {useState, useEffect} from 'react';

const CardRequestTableForm = () => {
  const tempColumns = [
    {field: 'name', headerName: '기안자', flex: 1},
    {field: 'team', headerName: '담당 부서', flex: 1},
    {field: 'subject', headerName: '제목', flex: 1.8},
    {field: 'assignment', headerName: '과제', flex: 1.2},
    {field: 'Classification', headerName: '문서 종류', flex: 1},
    {
      field: 'dateCreated',
      headerName: '결재일',
      type: 'date',
      flex: 0.8,
    },
  ];

  return (
    <ViewBox>
      <FormContainer>
        <TableSearchTab filter={['담당부서', '과제선택']} />
        <TableGridBody columnData={tempColumns} />
      </FormContainer>
    </ViewBox>
  );
};

const FormContainer = styled(Box)`
  &&& {
    padding: 1rem 0;
    width: 100%;
    height: 95%;
  }
`;

export default CardRequestTableForm;

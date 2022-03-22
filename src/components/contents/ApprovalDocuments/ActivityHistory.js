import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import styled from 'styled-components';

const ActivityHistory = () => {
  const [Assignment, setAssignment] = React.useState('');

  const handleChange = (event) => {
    setAssignment(event.target.value);
  };

  const [BudgetMajorCategory, setBudgetMajorCategory] = React.useState('');

  const BudgetMajorCategoryHandleChange = (event) => {
    setBudgetMajorCategory(event.target.value);
  };

  return (
    <>
      <GridContainer container>
        <Grid item xs={3}>
          <Box>출발일자</Box>
        </Grid>
        <Grid item xs={3}>
          <Box>종료일자</Box>
        </Grid>
        <Grid item xs={6}>
          <Box>활동내역</Box>
        </Grid>

        {/*출장자가 추가될때마다 추가 생성*/}
        <Grid item xs={3}>
          <Box>2022/03/01</Box>
        </Grid>
        <Grid item xs={3}>
          <Box>2022/03/01</Box>
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="outlined-required"
            label="선택입력"
            placeholder="활동내역 입력"
          />
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
    background-color: white;
    height: 10vh;
    align-items: center;
}
`;

export default ActivityHistory;

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
} from '@mui/material';
import styled from 'styled-components';

const ApprovalInfo = () => {
  const [Team, setTeam] = React.useState('');
  const [Assignment, setAssignment] = React.useState('');
  const [BudgetMajorCategory, setBudgetMajorCategory] = React.useState('');
  const [BudgetSubCategory, setBudgetSubCategory] = React.useState('');

  const TeamHandleChange = (event) => {
    setTeam(event.target.value);
  };
  const AssignmentHandleChange = (event) => {
    setAssignment(event.target.value);
  };
  const BudgetMajorCategoryHandleChange = (event) => {
    setBudgetMajorCategory(event.target.value);
  };
  const BudgetSubCategoryHandleChange = (event) => {
    setBudgetSubCategory(event.target.value);
  };

  const teamNames = [
    '전자통신연구팀',
    '광기계연구팀',
    '광전자연구팀',
    'AI연구팀',
    '영상과학연구팀',
    '전략기획연구팀',
  ];

  return (
    <>
      <GridContainer container>
        <Grid item xs={2}>
          <Box>발의번호</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>TPX_BT_사번_20220103</Box>
        </Grid>
        <Grid item xs={2}>
          <Box>발의일자</Box>
        </Grid>
        <Grid item xs={4}>
          <Box>2021/01/03</Box>
        </Grid>
      </GridContainer>

      <GridContainer container>
        <Grid item xs={2}>
          <Box>문서분류</Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="team-select-label">팀 선택</InputLabel>
            <Select
              labelId="team-select-label"
              value={Team}
              label="팀 선택"
              onChange={TeamHandleChange}>
              {teamNames.map((value, index, array) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Box>과제번호</Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">과제선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={Assignment}
              label="과제선택"
              onChange={AssignmentHandleChange}>
              <MenuItem value={10}>산자부 과제(PC-01-13)</MenuItem>
              <MenuItem value={20}>미도 과제(PC-03-02)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </GridContainer>

      {/*세부예산항목 제공된 양식이 없어서 임의로 생성함 -> 추후 변경 예정*/}
      <GridContainer container>
        <Grid item xs={2}>
          <Box>중분류</Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">예산 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={BudgetMajorCategory}
              label="과제선택"
              onChange={BudgetMajorCategoryHandleChange}>
              <MenuItem value={10}>내부인건비</MenuItem>
              <MenuItem value={20}>외부인건비</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Box>소분류</Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">예산 선택</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              value={BudgetSubCategory}
              label="과제선택"
              onChange={BudgetSubCategoryHandleChange}>
              <MenuItem value={10}>연구활동비</MenuItem>
              <MenuItem value={20}>평가성성과급</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
    background-color: white;
    height: 5vh;
    align-items: center;
}
`;

export default ApprovalInfo;

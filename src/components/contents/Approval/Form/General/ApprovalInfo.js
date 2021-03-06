import * as React from 'react';
import {
  Box,
  FormControl,
  Grid,
  Button,
  Stack,
  InputLabel,
  MenuItem,
  Select,
  GlobalStyle,
  TextField,
} from '@mui/material';
import styled from 'styled-components';

const ApprovalInfo = (props) => {
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
      <GridContainer container columnSpacing={{xs: 2}}>
        <Grid item xs={6}>
          <Box component="h6">발의번호</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">발의일자</Box>
        </Grid>

        <Grid item xs={6}>
          <TextField
            disabled={true}
            InputLabelProps={{shrink: false}}
            fullWidth
            id="outlined-required"
            defaultValue="TPX_BT_사번_20220103"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            disabled={true}
            InputLabelProps={{shrink: false}}
            fullWidth
            id="outlined-required"
            defaultValue="2021/01/03"
            InputProps={{
              readOnly: true,
            }}
          />
        </Grid>
      </GridContainer>

      <GridContainer container columnSpacing={{xs: 2}}>
        <Grid item xs={6}>
          <Box component="h6">문서분류</Box>
        </Grid>
        <Grid item xs={6}>
          <Box component="h6">과제번호</Box>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth disabled={props.disableSelection}>
            <InputLabel id="team-select-label">팀 선택</InputLabel>
            <Select
              InputLabelProps={{shrink: false}}
              labelId="team-select-label"
              value={Team}
              onChange={TeamHandleChange}>
              {teamNames.map((value, index, array) => (
                <MenuItem key={value + index} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <FormControl fullWidth disabled={props.disableSelection}>
            <InputLabel id="demo-simple-select-label">과제선택</InputLabel>
            <Select
              InputLabelProps={{shrink: false}}
              labelId="demo-simple-select-label"
              value={Assignment}
              onChange={AssignmentHandleChange}>
              <MenuItem value={10}>산자부 과제(PC-01-13)</MenuItem>
              <MenuItem value={20}>미도 과제(PC-03-02)</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </GridContainer>

      {/*세부예산항목 제공된 양식이 없어서 임의로 생성함 -> 추후 변경 예정*/}
      <GridContainer container columnSpacing={{xs: 2}}>
        <Grid item xs={4}>
          <Box component="h6">비목</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">세목</Box>
        </Grid>
        <Grid item xs={4}>
          <Box component="h6">세세목</Box>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth disabled={props.disableSelection}>
            <InputLabel id="demo-simple-select-label">예산 선택</InputLabel>
            <Select
              InputLabelProps={{shrink: false}}
              labelId="demo-simple-select-label"
              value={BudgetMajorCategory}
              onChange={BudgetMajorCategoryHandleChange}>
              <MenuItem value={10}>내부인건비</MenuItem>
              <MenuItem value={20}>외부인건비</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth disabled={props.disableSelection}>
            <InputLabel id="demo-simple-select-label">예산 선택</InputLabel>
            <Select
              InputLabelProps={{shrink: false}}
              labelId="demo-simple-select-label"
              value={BudgetMajorCategory}
              onChange={BudgetMajorCategoryHandleChange}>
              <MenuItem value={10}>내부인건비</MenuItem>
              <MenuItem value={20}>외부인건비</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={4}>
          <FormControl fullWidth disabled={props.disableSelection}>
            <InputLabel id="demo-simple-select-label">예산 선택</InputLabel>
            <Select
              InputLabelProps={{shrink: false}}
              labelId="demo-simple-select-label"
              value={BudgetSubCategory}
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
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;

export default ApprovalInfo;

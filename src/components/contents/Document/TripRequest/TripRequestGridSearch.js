import * as React from 'react';
import {
  Container,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';

const TripRequestGridSearch = () => {
  const [Team, setTeam] = React.useState('');
  const [Assignment, setAssignment] = React.useState('');

  const TeamHandleChange = (event) => {
    setTeam(event.target.value);
  };
  const AssignmentHandleChange = (event) => {
    setAssignment(event.target.value);
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
    <TrpRequestGridSearchContainer>
      <Paper
        component="form"
        sx={{display: 'flex', alignItems: 'center', width: 600}}>
        <InputBase
          sx={{ml: 1, flex: 1}}
          placeholder="제목, 기안자, 담당 부서 등을 입력하세요 "
          inputProps={{'aria-label': '받아 올 검색 값'}}
        />
        <IconButton type="submit" sx={{p: '10px'}} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>

      <SelectBoxContainer>
        <FormControl sx={{width: '10vw'}}>
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
        <FormControl sx={{width: '10vw'}}>
          <InputLabel id="team-select-label">담당 부서 선택</InputLabel>
          <Select
            labelId="team-select-label"
            value={Team}
            label="담당 부서 선택"
            onChange={TeamHandleChange}>
            {teamNames.map((value, index, array) => (
              <MenuItem value={value}>{value}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </SelectBoxContainer>
    </TrpRequestGridSearchContainer>
  );
};

const TrpRequestGridSearchContainer = styled(Container)`
  background-color: white;
  display: flex;
  margin: 10px 0;
`;
const SelectBoxContainer = styled(Container)`
  display: flex;
  justify-content: flex-end;
`;

export default TripRequestGridSearch;

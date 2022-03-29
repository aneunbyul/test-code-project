import * as React from 'react';
import {
  Box,
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

//components
import SearchBox from '../ReusableContent/SearchBox';

const TableSearchTab = ({filter}) => {
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
    <GridSearchContainer>
      <Box sx={{width: '35%'}}>
        <SearchBox />
      </Box>
      {/*<Paper
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
  </Paper>*/}

      <FilterBoxContainer>
        {filter != null && filter.length > 0 && filter.includes('과제선택') && (
          <FormControl sx={{width: '8rem'}}>
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
        )}
        {filter != null && filter.length > 0 && filter.includes('담당부서') && (
          <FormControl sx={{width: '8rem'}}>
            <InputLabel id="team-select-label">담당부서</InputLabel>
            <Select
              labelId="team-select-label"
              value={Team}
              label="담당 부서 선택"
              onChange={TeamHandleChange}>
              {teamNames.map((value) => (
                <MenuItem value={value}>{value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      </FilterBoxContainer>
    </GridSearchContainer>
  );
};

TableSearchTab.defaultProps = {
  filter: null,
};

const GridSearchContainer = styled(Box)`
  display: flex;
  padding: 0 0.7rem;
`;
const FilterBoxContainer = styled(Box)`
  display: flex;
  justify-content: flex-end;
`;

export default TableSearchTab;

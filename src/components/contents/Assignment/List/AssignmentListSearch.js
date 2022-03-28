import * as React from 'react'
import {
  Container,
  FormControl,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import styled from 'styled-components'

const AssignmentListSearch = () => {
  const [Year, setYear] = React.useState ( '' )
  const [Assignment, setAssignment] = React.useState ( '' )

  const YearHandleChange = ( event ) => {
    setYear ( event.target.value )
  }
  const AssignmentHandleChange = ( event ) => {
    setAssignment ( event.target.value )
  }

  const years = [
    '2019',
    '2020',
    '2021',
    '2022',
  ]
  return (
      <TrpRequestGridSearchContainer>
        <Paper
            component="form"
            sx={ { display: 'flex', alignItems: 'center', width: 600 } }>
          <InputBase
              sx={ { ml: 1, flex: 1 } }
              placeholder="과제 책임자, 발주처, 과제명을 입력하세요 "
              inputProps={ { 'aria-label': '받아 올 검색 값' } }
          />
          <IconButton type="submit" sx={ { p: '10px' } } aria-label="search">
            <SearchIcon/>
          </IconButton>
        </Paper>

        <SelectBoxContainer>
          <FormControl sx={ { width: '10vw' } }>
            <InputLabel id="demo-simple-select-label">발주처 선택</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={ Assignment }
                label="과제선택"
                onChange={ AssignmentHandleChange }>
              <MenuItem value={ 10 }>산자부 과제(PC-01-13)</MenuItem>
              <MenuItem value={ 20 }>미도 과제(PC-03-02)</MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={ { width: '10vw' } }>
            <InputLabel id="team-select-label">연도 선택</InputLabel>
            <Select
                labelId="team-select-label"
                value={ Year }
                label="연도 선택"
                onChange={ YearHandleChange }>
              { years.map ( ( value, index, array ) => (
                  <MenuItem value={ value }>{ value }</MenuItem>
              ) ) }
            </Select>
          </FormControl>
        </SelectBoxContainer>
      </TrpRequestGridSearchContainer>
  )
}

const TrpRequestGridSearchContainer = styled ( Container )`
  background-color: white;
  display: flex;
  margin: 10px 0;
`
const SelectBoxContainer = styled ( Container )`
  display: flex;
  justify-content: flex-end;
`

export default AssignmentListSearch

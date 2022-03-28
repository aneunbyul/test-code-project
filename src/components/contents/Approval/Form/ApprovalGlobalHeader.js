import * as React from 'react'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  GlobalStyle,
} from '@mui/material'
import styled from 'styled-components'
import { propsToClassKey } from '@mui/styles'

const ApprovalGlobalHeader = ( { selectedFormName, handleSelectedFormName } ) => {
  const formNames = ['출장신청서', '출장복명서', '지출요청서', '회의비 사용보고']

  return (
      <>
        <ToolContainer>
          <Stack spacing={ 2 } direction="row">
            <Button variant="contained">기안</Button>
            <Button variant="outlined">결재선</Button>
            <Button variant="outlined">임시저장</Button>
            <Button variant="outlined">문서연결</Button>
          </Stack>
        </ToolContainer>

        <GridContainer className="approval-header__grid">
          <FormControl className="approval-header__form-select">
            <InputLabel id="team-select-label">결재문서 선택</InputLabel>
            <Select
                InputLabelProps={ { shrink: false } }
                labelId="team-select-label"
                value={ selectedFormName }
                onChange={ handleSelectedFormName }>
              { formNames.map ( ( value, index ) => (
                  <MenuItem key={ value + index } value={ value }>
                    { value }
                  </MenuItem>
              ) ) }
            </Select>
          </FormControl>
        </GridContainer>
      </>
  )
}

ApprovalGlobalHeader.defaultProps = {
  selectedFormName: '',
  handleSelectedFormName: function () {},
}

const ToolContainer = styled ( Box )`
  position: absolute;
  top: 0;
  left: 0;
`

const GridContainer = styled ( Grid )`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;
    padding: var(--writing-padding);
    margin-top: 3rem;
  }
`

export default ApprovalGlobalHeader

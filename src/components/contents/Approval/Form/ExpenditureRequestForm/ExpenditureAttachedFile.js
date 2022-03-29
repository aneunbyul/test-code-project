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
} from '@mui/material'
import styled from 'styled-components'

const ExpenditureAttachedFile = () => {
  return (
      <>
        <GridContainer container>
          <Box component="h6">※ 물품의 경우 물품 세부내용을 첨부해주세요</Box>
          <Grid item xs={ 12 }>
            <Box component="h6">첨부목록</Box>
          </Grid>

          <Grid item xs={ 2 }>
            <label htmlFor="contained-button-file">
              <input
                  accept="*"
                  id="contained-button-file"
                  multiple
                  type="file"
                  style={ { display: 'none' } }
              />
              <Button variant="contained" component="span">
                파일추가
              </Button>
            </label>
          </Grid>
          <Grid item xs={ 2 }>
            <Button variant="outlined">파일삭제</Button>
          </Grid>
        </GridContainer>
      </>
  )
}

const GridContainer = styled ( Grid )`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;

    padding: 0 var(--writing-padding);
  }
`

export default ExpenditureAttachedFile

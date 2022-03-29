import * as React from 'react'
import styled from 'styled-components'
import { Box, Grid, TextField, Typography } from '@mui/material'

const ExpenditureRequestEtc = () => {
  return (
      <GridContainer container spacing={ 4 }>
        <Grid item xs={ 12 }>
          <Box component="h6">기타사항</Box>
        </Grid>
        <Grid item xs={ 12 }>
          <TextField
              InputLabelProps={ { shrink: false } }
              fullWidth
              required
              id="outlined-required"
              label="선택 입력"
          />
        </Grid>
      </GridContainer>

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

export default ExpenditureRequestEtc
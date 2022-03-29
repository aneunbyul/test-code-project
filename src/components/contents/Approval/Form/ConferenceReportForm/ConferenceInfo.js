import * as React from 'react'
import {
  Box,
  Grid, TextField,
} from '@mui/material'
import styled from 'styled-components'
import { DesktopDatePicker, LocalizationProvider, MobileDatePicker, TimePicker } from '@mui/lab'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

const ConferenceInfo = () => {
  const [value, setValue] = React.useState ( [null, null] )
  const [startTime, setStartTime] = React.useState ( [null, null] )
  const [finish, setFinish] = React.useState ( [null, null] )

  return (
      <>
        <GridContainer container>
          <Grid item xs={ 12 }>
            <Box component="h5">회의록</Box>
          </Grid>
          <Grid item xs={ 4 }>
            <Box component="h6">회의일자</Box>
          </Grid>
          <Grid item xs={ 4 }>
            <Box component="h6">시작시간</Box>
          </Grid>
          <Grid item xs={ 4 }>
            <Box component="h6">종료시간</Box>
          </Grid>
          <Grid item xs={ 4 }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
              <MobileDatePicker
                  label="회의 일자"
                  value={ value }
                  minDate={ new Date ( '2017-01-01' ) }
                  onChange={ ( newValue ) => {
                    setValue ( newValue )
                  } }
                  renderInput={ ( params ) => <TextField { ...params } /> }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={ 4 }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
              <TimePicker
                  label="시작시간"
                  value={ startTime }
                  onChange={ ( newValue ) => {
                    setStartTime ( newValue )
                  } }
                  renderInput={ ( params ) => <TextField { ...params } /> }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={ 4 }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
              <TimePicker
                  label="종료시간"
                  value={ finish }
                  onChange={ ( newValue ) => {
                    setFinish ( newValue )
                  } }
                  renderInput={ ( params ) => <TextField { ...params } /> }
              />
            </LocalizationProvider>
          </Grid>


          <Grid item xs={ 6 }>
            <Box component="h6">장소</Box>
          </Grid>
          <Grid item xs={ 6 }>
            <Box component="h6">참석인원</Box>
          </Grid>
          <Grid item xs={ 6 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
            />
          </Grid>
          <Grid item xs={ 6 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
                type={ 'number' }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Box component="h6">참석자</Box>
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Box component="h6">회의내용</Box>
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
            />
          </Grid>

          <Grid item xs={ 6 }>
            <Box component="h6">총 소요비용</Box>
          </Grid>
          <Grid item xs={ 6 }>
            <Box component="h6">1인당 소요비용</Box>
          </Grid>
          <Grid item xs={ 6 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
            />
          </Grid>
          <Grid item xs={ 6 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="필수입력"
                type={ 'number' }
            />
          </Grid>
          <Grid item xs={ 12 }>
            <Box component="h6">기타사항</Box>
          </Grid>
          <Grid item xs={ 12 }>
            <TextField
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="선택입력"
            />
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

export default ConferenceInfo

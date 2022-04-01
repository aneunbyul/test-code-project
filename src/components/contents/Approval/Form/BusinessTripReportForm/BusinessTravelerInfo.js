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

import TextField from '@mui/material/TextField'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import { MobileDateRangePicker } from '@mui/lab'

const BusinessTravelerInfo = ( props ) => {
  const [value, setValue] = React.useState ( [null, null] )
  return (
      <>
        <GridContainer container columnSpacing={ { xs: 1 } }>
          <Grid item xs={ 2 }>
            <Box component="h6">출장자</Box>
          </Grid>
          <Grid item xs={ 2 }>
            <Box component="h6">출발지</Box>
          </Grid>
          <Grid item xs={ 2 }>
            <Box component="h6">목적지</Box>
          </Grid>
          <Grid item xs={ 4 }>
            <Box component="h6">출장기간</Box>
          </Grid>
          <Grid item xs={ 2 }>
            <Box component="h6">교통수단</Box>
          </Grid>

          {/*신청인이 디폴트값으로 들어감*/ }
          {/*추가 버튼 누를때마다 한줄씩 추가*/ }
          {/*추가버튼은 위치 미정*/ }
          <Grid item xs={ 2 }>
            <TextField
                disabled={ props.disableSelection }
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="입력"
            />
          </Grid>
          <Grid item xs={ 2 }>
            <TextField
                disabled={ props.disableSelection }
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="입력"
            />
          </Grid>
          <Grid item xs={ 2 }>
            <TextField
                disabled={ props.disableSelection }
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="입력"
            />
          </Grid>
          <Grid item xs={ 4 }>
            <LocalizationProvider dateAdapter={ AdapterDateFns }>
              <MobileDateRangePicker
                  disabled={ props.disableSelection }
                  startText="출발일"
                  endText="종료일"
                  cancelText="취소"
                  clearText="초기화"
                  okText="적용"
                  toolbarTitle="날짜 선택"
                  inputFormat={ 'yyyy-MM-dd' }
                  mask={ '____-__-__' }
                  value={ value }
                  onChange={ ( newValue ) => {
                    setValue ( newValue )
                  } }
                  renderInput={ ( startProps, endProps ) => (
                      <React.Fragment>
                        <TextField
                            disabled={ props.disableSelection }
                            InputLabelProps={ { shrink: false } }
                            { ...startProps }
                            sx={ {
                              '& .MuiOutlinedInput-root': {
                                borderRadius:
                                    'var(--global-border-radius) 0 0 var(--global-border-radius)',
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderRightWidth: '0',
                              },
                            } }
                        />
                        <TextField
                            disabled={ props.disableSelection }
                            sx={ {
                              '& .MuiOutlinedInput-root': {
                                borderRadius:
                                    '0 var(--global-border-radius) var(--global-border-radius) 0',
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderLeftWidth: '0',
                              },
                            } }
                            InputLabelProps={ { shrink: false } }
                            { ...endProps }
                        />
                      </React.Fragment>
                  ) }
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={ 2 }>
            <TextField
                disabled={ props.disableSelection }
                InputLabelProps={ { shrink: false } }
                fullWidth
                required
                id="outlined-required"
                label="입력"
            />
          </Grid>
        </GridContainer>
      </>
  )
}

const GridContainer = styled ( Grid )`
  &&& {
    align-items: center;

    padding: 0rem var(--writing-padding);
  }
`

export default BusinessTravelerInfo

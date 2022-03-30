import * as React from 'react'
import styled from 'styled-components'
import { Container, Stack, TextField, Typography } from '@mui/material'

const AssignmentBasicInfo = () => {
  return (
      <>
        <Typography bgcolor={ 'Background' }>과제 기본 정보</Typography>
        <Stack direction={ 'row' }>
          <Typography>상위사업명</Typography>
          <TextField id="outlined-basic" label="상위사업명" variant="outlined"/>
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>과제명</Typography>
          <TextField id="outlined-basic" label="과제명" variant="outlined"/>
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>계정번호</Typography>
          <TextField id="outlined-basic" label="계정번호" variant="outlined"/>
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>과제책임자</Typography>
          <TextField id="outlined-basic" label="과제책임자" variant="outlined"/>
          <Typography>실무책임자</Typography>
          <TextField id="outlined-basic" label="실무책임자" variant="outlined"/>
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>총사업기간</Typography>
          <TextField id="outlined-basic" label="총사업기간" variant="outlined"/>
          <Typography>해당연차 사업기간</Typography>
          <TextField
              id="outlined-basic"
              label="해당연차 사업기간"
              variant="outlined"
          />
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>총사업비</Typography>
          <TextField id="outlined-basic" label="총사업비" variant="outlined"/>
          <Typography>해당연차 사업비</Typography>
          <TextField
              id="outlined-basic"
              label="해당연차 사업비"
              variant="outlined"
          />
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>발주처</Typography>
          <TextField id="outlined-basic" label="발주처" variant="outlined"/>
          <Typography>관리기관(사업비관리시스템)</Typography>
          <TextField id="outlined-basic" label="관리기관" variant="outlined"/>
        </Stack>
        <Stack direction={ 'row' }>
          <Typography>연관과제</Typography>
          <TextField id="outlined-basic" label="연관과제" variant="outlined"/>
        </Stack>
      </>
  )
}

export default AssignmentBasicInfo

import * as React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Box, Button, Grid, } from '@mui/material'
import { atom, useRecoilState } from 'recoil'

//components
import ViewBox from '../ViewBox/ViewBox'
import 'simplebar/dist/simplebar.min.css'

const CheckModal = () => {

  return (
      <ProfileWrapper sx={ { boxShadow: 24 } }>
        <ViewBox>
          <ProfileContainer>
            <GridContainer container row-spacing={ 0 }>
              <Grid item xs={ 12 }>
                <Box marginBottom={ '2rem' } textAlign={ 'center' } component="h5"> 결재작성 완료 </Box>
              </Grid>

              <Grid item xs={ 6 }>
                <Link href={ '/approval' }>
                  <Button variant={ 'contained' }>확인</Button>
                </Link>
              </Grid>
              <Grid item xs={ 6 }>
                <Button variant={ 'contained' }>취소</Button>
              </Grid>

            </GridContainer>
          </ProfileContainer>
        </ViewBox>
      </ProfileWrapper>
  )
}

const ProfileWrapper = styled ( Box )`
  position: absolute;
  bottom: 50%;
  left: 25%;
  transform: translate(var(--box-contracted-length), 0);
  width: 22rem;
  height: 10rem;
  background-color: transparent;
`

const ProfileContainer = styled ( Box )`
  width: 100%;
  height: 100%;
  padding: 3rem;
`

const GridContainer = styled ( Grid )`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;

    padding: 0 var(--writing-padding);
  }
`

export default CheckModal

import * as React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import {
  Box,
  Modal,
  Slide,
  Button,
  Typography,
  TextField, AppBar, Toolbar, IconButton, Grid,
} from '@mui/material'

import CloseIcon from '@mui/icons-material/Close'
//components
import ViewBox from '../ViewBox/ViewBox'
import FilloutIcon from '../Icon/FilloutIcon'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import BusinessTripApplicationForm from '../Approval/Form/BusinessTripApplicationForm/BusinessTripApplicationForm'
import ApprovalCreationForm from '../Approval/Form/ApprovalCreationForm'
import { useRouter } from 'next/router'

const DocumentModal = ( { handleClose } ) => {
  const [disableFlag, setDisableFlag] = useState ( true )

  const router = useRouter ()

  const isInUnfinishedPage =
      router.pathname.includes ( '/approval/unfinished' )
  const isInRejectedPage =
      router.pathname.includes ( '/approval/rejected' )

  return (
      <ModalWrapper sx={ { boxShadow: 24 } }>
        <ViewBox>
          <AppBar sx={ { position: 'relative' } }>
            <Toolbar>
              <Button onClick={ handleClose } variant={ 'contained' }>
                닫기
              </Button>
              <Button onClick={ handleClose } variant={ 'contained' }
                      disabled={ isInUnfinishedPage ? false : true }>
                결재
              </Button>
              <Button onClick={ handleClose } variant={ 'contained' }
                      disabled={ isInUnfinishedPage ? false : true }>
                반려
              </Button>
              <Button onClick={ handleClose } variant={ 'contained' }
                      disabled={ isInUnfinishedPage ? false : true }>
                취소
              </Button>
              <Button onClick={ handleClose } variant={ 'contained' }
                      disabled={ isInRejectedPage ? false : true }>
                수정
              </Button>
            </Toolbar>
          </AppBar>
          <ApprovalCreationForm
              disableSelection={ disableFlag }
              setDisableSelection={ setDisableFlag }
          />
        </ViewBox>
      </ModalWrapper>
  )
}

const ModalWrapper = styled ( Box )`
  position: absolute;
  top: 5%;
  left: 25%;
  transform: translate(var(--box-contracted-length), 0);
  width: 50%;
  height: 90%;
  background-color: transparent;
`

export default DocumentModal

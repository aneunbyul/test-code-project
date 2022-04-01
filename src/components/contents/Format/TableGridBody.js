import * as React from 'react'
import {
  Box,
  Grid,
  Container,
  Typography,
  LinearProgress,
  Modal,
} from '@mui/material'
import {
  DataGrid,
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import {
  randomCommodity,
  randomCreatedDate,
  randomDate,
  randomTraderName,
  randomUpdatedDate,
} from '@mui/x-data-grid-generator'
import styled from 'styled-components'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import ProfileModal from '../Profile/ProfileModal'
import DocumentModal from './DocumentModal'
import CheckModal from './CheckModal'

const TableGridBody = ( { columnData } ) => {
  const [profileOpen, setProfileOpen] = React.useState ( false )
  const handleOpen = () => setProfileOpen ( true )
  const handleClose = () => setProfileOpen ( false )
  //더미 데이터로 그리드 생성
  const rows = []
  for (let i = 0; i < 100; i++) {
    rows.push ( {
      id: i,
      name: randomTraderName (),
      team: randomTraderName (),
      subject: randomCommodity (),
      assignment: randomCommodity (),
      dateCreated: randomCreatedDate (),
      Classification: '출장 신청서',
    } )
  }

  return (
      <SliderContainer>
        <DataGrid
            rows={ rows }
            columns={ columnData }
            pageSize={ 100 }
            checkboxSelection
            disableSelectionOnClick
            scrollbarSize={ 17 }
            components={ {
              LoadingOverlay: LinearProgress,
            } }
            loading={ false }
            onRowClick={ ( params, event ) => {
              console.log ( params.row )
              handleOpen ()
            } }
        />
        <Modal
            open={ profileOpen }
            onClose={ handleClose }
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
          <DocumentModal handleClose={ handleClose }/>
        </Modal>
      </SliderContainer>
  )
}

const SliderContainer = styled ( Box )`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`

export default TableGridBody

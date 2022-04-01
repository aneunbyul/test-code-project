import * as React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {
  Box,
  Modal,
  Slide,
  Button,
  Typography,
  TextField,
  AppBar,
  Toolbar,
  IconButton,
  Grid,
  Stack,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';
//components
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import BusinessTripApplicationForm from '../Approval/Form/BusinessTripApplicationForm/BusinessTripApplicationForm';
import ApprovalCreationForm from '../Approval/Form/ApprovalCreationForm';
import {useRouter} from 'next/router';

const DocumentModal = ({handleClose}) => {
  const [disableFlag, setDisableFlag] = useState(true);

  const router = useRouter();

  const isInUnfinishedPage = router.pathname.includes('/approval/unfinished');
  const isInRejectedPage = router.pathname.includes('/approval/rejected');

  return (
    <ModalWrapper sx={{boxShadow: 24}}>
      <ViewBox>
        <StickyContainer>
          <ToolContainer>
            <Stack spacing={1.3} direction="row">
              <Button
                onClick={handleClose}
                className="floatingButton"
                variant={'contained'}>
                닫기
              </Button>
              <Button
                className="floatingButton"
                onClick={handleClose}
                variant={'contained'}
                disabled={isInUnfinishedPage ? false : true}>
                결재
              </Button>
              <Button
                className="floatingButton"
                onClick={handleClose}
                variant={'contained'}
                disabled={isInUnfinishedPage ? false : true}>
                반려
              </Button>
              <Button
                className="floatingButton"
                onClick={handleClose}
                variant={'contained'}
                disabled={isInUnfinishedPage ? false : true}>
                취소
              </Button>
              <Button
                className="floatingButton"
                onClick={handleClose}
                variant={'contained'}
                disabled={isInRejectedPage ? false : true}>
                수정
              </Button>
            </Stack>
          </ToolContainer>
        </StickyContainer>
        <ApprovalCreationForm
          disableSelection={disableFlag}
          setDisableSelection={setDisableFlag}
        />
      </ViewBox>
    </ModalWrapper>
  );
};
const StickyContainer = styled(Stack)`
  position: Sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;
`;

const ToolContainer = styled(Box)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const ModalWrapper = styled(Box)`
  position: absolute;
  top: 5%;
  left: 10%;
  transform: translate(var(--box-contracted-length), 0);
  width: 50%;
  height: 90%;
  background-color: transparent;
`;

export default DocumentModal;

import * as React from 'react';
import {
  Button,
  Stack,
  Modal,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
import {useRecoilState, useRecoilValue} from 'recoil';
import {
  isApprovalLineState,
  isDocumentConnectionState,
} from '../../../../recoil/store';
import CheckModal from '../../../Format/CheckModal';
import styled from 'styled-components';
import { useEffect } from 'react'

const ApprovalHeader = ({
  disableSelection,
  setDisableSelection,
  selectedFormName,
  handleSelectedFormName,
}) => {
  //기안버튼 이벤트
  const [checkModalOpen, setCheckModalOpen] = React.useState(false);
  const handleOpen = () => setCheckModalOpen(true);
  const handleClose = () => setCheckModalOpen(false);

  //결재라인 이벤트
  const [isApprovalLine, setIsApprovalLine] =
    useRecoilState(isApprovalLineState);
  const ClickApprovalLine = () => {
    {
      isApprovalLine === true
        ? setIsApprovalLine(false)
        : setIsApprovalLine(true);
      setDocumentConnection(false);
    }
  };

  //문서연결 이벤트
  const [isDocumentConnection, setDocumentConnection] = useRecoilState(
    isDocumentConnectionState,
  );
  const ClickDocumentConnection = () => {
    {
      isDocumentConnection === true
        ? setDocumentConnection(false)
        : setDocumentConnection(true);
      setIsApprovalLine(false);
    }
  };

  useEffect(()=>{
    isApprovalLineState;
        isDocumentConnectionState;
  },[])
  const formNames = [
    '출장신청서',
    '출장복명서',
    '지출요청서',
    '회의비 사용보고',
  ];

  return (
    <>
      {
        // 문서 결제 버튼들. disabled 시에는 비활성화
      }
      {disableSelection == false && (
        <ToolContainer>
          <Stack spacing={2} direction="row">
            <Button variant="contained" onClick={handleOpen}>
              기안
            </Button>
            <Modal
              open={checkModalOpen}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description">
              <CheckModal />
            </Modal>

            <Button variant="outlined" onClick={ClickApprovalLine}>
              결재선
            </Button>
            <Button variant="outlined">임시저장</Button>
            <Button variant="outlined" onClick={ClickDocumentConnection}>
              문서연결
            </Button>
          </Stack>
        </ToolContainer>
      )}

      <ApprovalGridContainer>
        <Grid
          container
          justifyContent="flex-end"
          rowSpacing={1}
          columnSpacing={{xs: 0}}>
          {/*결재선 컨텐츠 수는 유동적임*/}
          <Grid item xs={4}>
            <p>기안</p>
          </Grid>
          <Grid item xs={4}>
            <p>팀장</p>
          </Grid>
          <Grid item xs={4}>
            <p>팀장</p>
          </Grid>
          <Grid item xs={4}>
            <h5>안은별</h5>
          </Grid>
          <Grid item xs={4}>
            <h5>함선정</h5>
          </Grid>
          <Grid item xs={4}>
            <h5>권아롱새</h5>
          </Grid>
        </Grid>
      </ApprovalGridContainer>

      <GridContainer
        sx={{marginTop: '7rem', marginBottom: '2rem'}}
        className="approval-header__grid">
        <FormControl
          className="approval-header__form-select"
          disabled={disableSelection}>
          <InputLabel id="team-select-label">결재문서 선택</InputLabel>
          <Select
            InputLabelProps={{shrink: false}}
            labelId="team-select-label"
            value={selectedFormName}
            onChange={handleSelectedFormName}>
            {formNames.map((value, index) => (
              <MenuItem key={value + index} value={value}>
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </GridContainer>
    </>
  );
};

ApprovalHeader.defaultProps = {
  selectedFormName: '',
  handleSelectedFormName: function () {},
  disableSelection: false,
};

const ToolContainer = styled(Box)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;
    padding: 0rem var(--writing-padding);
  }
`;

const ApprovalGridContainer = styled(Box)`
  &&& {
    position: absolute;
    top: 1rem;
    right: 1rem;
    user-select: none;
  }
  & p {
    color: var(--light04);
    font-size: calc(var(--global-text-size) * 0.8);
  }
`;

const ApprovalLineBox = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: auto;
  height: auto;
  padding: 0.3rem;
  //border-radius: var(--global-border-radius);
  //box-shadow: 0 0 0 var(--line-thickness) var(--dark05);
`;

export default ApprovalHeader;

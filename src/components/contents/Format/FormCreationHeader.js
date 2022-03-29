import * as React from 'react';
import {
  Box,
  Button,
  Stack,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
<<<<<<< Updated upstream
  Select, Modal,
} from '@mui/material'
import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil'
import { isApprovalLineState } from '../Approval/ApprovalAtoms'
import CheckModal from './CheckModal'

const FormCreationHeader = ( { selectedFormName, handleSelectedFormName } ) => {

  //기안버튼 이벤트
  const [checkModalOpen, setCheckModalOpen] = React.useState ( false )
  const handleOpen = () => setCheckModalOpen ( true )
  const handleClose = () => setCheckModalOpen ( false )
=======
  Select,
} from '@mui/material';
import styled from 'styled-components';
import {useRecoilState} from 'recoil';
import {isApprovalLineState} from '../Approval/ApprovalAtoms';

const FormCreationHeader = ({selectedFormName, handleSelectedFormName}) => {
  const [isApprovalLine, setIsApprovalLine] =
    useRecoilState(isApprovalLineState);
>>>>>>> Stashed changes

  //결재선 이벤트
  const [isApprovalLine, setIsApprovalLine] = useRecoilState ( isApprovalLineState )
  const ClickApprovalLine = () => {
    {
      isApprovalLine === true
        ? setIsApprovalLine(false)
        : setIsApprovalLine(true);
    }
  };

  const formNames = [
    '출장신청서',
    '출장복명서',
    '지출요청서',
    '회의비 사용보고',
  ];

  // 이 변수로 Mui select와 label의 비활성화 결정
  let disableSelection = false;

  return (
<<<<<<< Updated upstream
      <>
        <ToolContainer>
          <Stack spacing={ 2 } direction="row">
            <Button variant="contained" onClick={ handleOpen }>기안</Button>
            <Modal
                open={ checkModalOpen }
                onClose={ handleClose }
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
              <CheckModal/>
            </Modal>

            <Button variant="outlined" onClick={ ClickApprovalLine }>결재선</Button>
            <Button variant="outlined">임시저장</Button>
            <Button variant="outlined">문서연결</Button>
          </Stack>
        </ToolContainer>
=======
    <>
      <ToolContainer>
        <Stack spacing={2} direction="row">
          <Button variant="contained">기안</Button>
          <Button variant="outlined" onClick={ClickApprovalLine}>
            결재선
          </Button>
          <Button variant="outlined">임시저장</Button>
          <Button variant="outlined">문서연결</Button>
        </Stack>
      </ToolContainer>
>>>>>>> Stashed changes

      <GridContainer className="approval-header__grid">
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

FormCreationHeader.defaultProps = {
  selectedFormName: '',
  handleSelectedFormName: function () {},
};

const ToolContainer = styled(Box)`
  position: absolute;
  top: 1rem;
  left: 1rem;
`;

const GridContainer = styled(Grid)`
  &&& {
    width: 100%;
    height: 100%;
    align-items: center;
    padding: var(--writing-padding);
    margin-top: 3rem;
  }
`;

export default FormCreationHeader;

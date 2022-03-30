import * as React from 'react';
import styled from 'styled-components';
import {useState, useEffect} from 'react';
import {
  Box,
  Modal,
  Button,
  Typography,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';

//components
import ViewBox from '../ViewBox/ViewBox';
import FilloutIcon from '../Icon/FilloutIcon';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import BusinessTripApplicationForm from '../Approval/Form/BusinessTripApplicationForm/BusinessTripApplicationForm';
import ApprovalCreationForm from '../Approval/Form/ApprovalCreationForm';

const DocumentModal = () => {
  const [disableFlag, setDisableFlag] = useState(true);

  return (
    <ModalWrapper sx={{boxShadow: 24}}>
      <ViewBox>
        <ApprovalCreationForm
          disableSelection={disableFlag}
          setDisableSelection={setDisableFlag}
        />
      </ViewBox>
    </ModalWrapper>
  );
};

const ModalWrapper = styled(Box)`
  position: absolute;
  top: 5%;
  left: 25%;
  transform: translate(var(--box-contracted-length), 0);
  width: 50%;
  height: 90%;
  background-color: transparent;
`;

export default DocumentModal;

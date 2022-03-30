import * as React from 'react';
import styled from 'styled-components';
import {Box, Container, Stack, Typography} from '@mui/material';
import ViewBox from '../../ViewBox/ViewBox';
import AssignmentBasicInfo from './General/AssignmentBasicInfo';
import ParticipatingResearcher from './General/ParticipatingResearcher';
import AssignmentBudget from './General/AssignmentBudget';
import AssignmentAccount from './General/AssignmentAccount';
import BusinessExpenseCard from './General/BusinessExpenseCard';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';
import FormDivider from '../../ReusableContent/FormDivider';

const AssignmentCreationForm = (props) => {
  return (
    <ViewBox>
      <AssignmentCreationContainer>
        <FormDivider text="과제 기본 정보" />
        <AssignmentBasicInfo />
        <FormDivider text="참여 연구원" />
        <ParticipatingResearcher />
        <FormDivider text="사업비" />
        <AssignmentBudget />
        <FormDivider text="계좌 정보" />
        <AssignmentAccount />
        <FormDivider text="사업비 사용카드" />
        <BusinessExpenseCard />
      </AssignmentCreationContainer>
    </ViewBox>
  );
};

AssignmentCreationForm.defualtProps = {
  disableSelection: false,
};

const AssignmentCreationContainer = styled(SimpleBar)`
  &&& {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: var(--transparent);
    padding-bottom: 6rem;
  }
`;
export default AssignmentCreationForm;

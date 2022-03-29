import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {createContext} from 'react';
import {Box} from '@material-ui/core';
import {FastfoodOutlined} from '@mui/icons-material';

// components
import ApprovalNav from '../contents/Approval/ApprovalNav';
import AssignmentNav from '../contents/Assignment/AssignmentNav';
import OrganizationNav from '../contents/Organization/OrganizationNav';
import DoucmentNav from '../contents/Document/DocumentNav';
import DocumentNav from '../contents/Document/DocumentNav';

const ScrollToTop = () => {
  const router = useRouter();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router]);
  return null;
};

export const HeaderBgContext = createContext();

const Layout = ({children}) => {
  const router = useRouter();

  const isApprovalBasePage =
    router.pathname.includes('/approval/creation') == false &&
    router.pathname.includes('/approval') == true
      ? true
      : false;

  const isInApprovalCreationPage =
    router.pathname.includes('/approval/creation');

  const isAssignmentBasePage =
    router.pathname.includes('/assignment/creation') == false &&
    router.pathname.includes('/assignment') == true
      ? true
      : false;

  const isInAssignmentCreationPage = router.pathname.includes(
    '/assignment/creation',
  );

  const isDocumentBasePage =
    router.pathname.includes('/document/creation') == false &&
    router.pathname.includes('/document') == true
      ? true
      : false;

  const isOrganizationBasePage =
    router.pathname.includes('/organization/creation') == false &&
    router.pathname.includes('/organization') == true
      ? true
      : false;

  const config = {};

  return (
    <ClientLayout>
      <ScrollToTop />
      <Header />
      <Nav />
      <Main
        style={{
          gridTemplateColumns: isApprovalBasePage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isInApprovalCreationPage
            ? 'minmax(32rem, 3.5fr) 2.9fr'
            : isAssignmentBasePage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isInAssignmentCreationPage
            ? 'minmax(32rem, 3.5fr) 2.9fr'
            : isDocumentBasePage
            ? 'calc(var(--box-expanded-length)*0.9) auto'
            : isOrganizationBasePage
            ? 'calc(var(--box-expanded-length)*1.5) auto'
            : 'auto',
        }}>
        {isApprovalBasePage && <ApprovalNav />}
        {isAssignmentBasePage && <AssignmentNav />}
        {isDocumentBasePage && <DocumentNav />}
        {isOrganizationBasePage && <OrganizationNav />}
        {children}
      </Main>
    </ClientLayout>
  );
};

const ClientLayout = styled.div`
  &&& {
    width: 100vw;
    height: 100vh;

    display: grid;
    grid-template-rows:
      0
      100%;
    grid-template-columns: var(--box-contracted-length) auto;

    background-color: var(--dark01);
  }
`;

const Main = styled(Box)`
  &&& {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto;
    padding: 0.6rem;
    gap: 0.6rem;
  }
`;

export default Layout;

import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import {useRouter} from 'next/router';
import {useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {createContext} from 'react';
import {Box} from '@material-ui/core';
import ApprovalNav from '../contents/Approval/ApprovalNav';
import OrganizationNav from '../contents/Organization/OrganizationNav';
import AssignmentNav from '../contents/Assignment/AssignmentNav';
import DoucmentNav from '../contents/Document/DocumentNav';

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
    router.pathname.substring(
      router.pathname.indexOf('/approval') + '/approval'.length + 2,
    ) == '' && router.pathname.includes('/approval')
      ? true
      : false;

  const isInApprovalCreationPage =
    router.pathname.includes('/approval/creation');

  const isApprovalPage = router.pathname.includes('/approval');
  const isAssignmentPage = router.pathname.includes('/assignment');
  const isDocumentPage = router.pathname.includes('/document');
  const isOrganizationPage = router.pathname.includes('/organization');
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
            ? '2fr 1fr'
            : isAssignmentPage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isDocumentPage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isOrganizationPage
            ? 'calc(var(--box-expanded-length)*1.5) auto'
            : 'auto',
        }}>
        {children}
        {/*
        <WorkspaceWrapper>
          <WorkspaceContainer>{children}</WorkspaceContainer>
        </WorkspaceWrapper>
      */}
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

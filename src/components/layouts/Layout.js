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
      <SubNavWrapper>
        <SubNavContainer
          style={{
            gridTemplateColumns: isApprovalPage
              ? 'calc(var(--box-expanded-length) * 0.8) auto'
              : isAssignmentPage
              ? 'calc(var(--box-expanded-length) * 0.8) auto'
              : isDocumentPage
              ? 'calc(var(--box-expanded-length) * 0.8) auto'
              : isOrganizationPage
              ? 'calc(var(--box-expanded-length) * 0.8) auto'
              : '',
          }}>
          {isApprovalPage && <ApprovalNav />}
          {isAssignmentPage && <AssignmentNav />}
          {isOrganizationPage && <OrganizationNav />}
          {isDocumentPage && <DoucmentNav />}
        </SubNavContainer>
      </SubNavWrapper>
      <WorkspaceWrapper>
        <WorkspaceContainer>
          <main>{children}</main>
        </WorkspaceContainer>
      </WorkspaceWrapper>
      {/*<Footer/>*/}
    </ClientLayout>
  );
};

const ClientLayout = styled.div`
  width: 100vw;
  height: 100vh;

  display: grid;
  grid-template-rows:
    0
    auto;
  grid-template-columns:
    var(--box-contracted-length)
    calc(var(--box-expanded-length) * 0.8)
    auto;

  background-color: var(--dark01);
`;

const SubNavWrapper = styled(Box)`
  padding: 0.6rem;
  padding-right: 0;
`;

const WorkspaceWrapper = styled(Box)`
  padding: 0.6rem;
`;

const SubNavContainer = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const WorkspaceContainer = styled(Box)`
  position: relative;
  display: grid;
  padding: 0rem;
  column-gap: 0.6rem;
  width: 100%;
  height: 100%;
`;

export default Layout;

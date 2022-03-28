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
import {FastfoodOutlined} from '@mui/icons-material';

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
  /*
  const isApprovalBasePage =
    router.pathname.substring(
      router.pathname.indexOf('/approval') + '/approval'.length + 2,
    ) == '' && router.pathname.includes('/approval')
      ? true
      : false;*/

  const isApprovalBasePage =
    router.pathname.includes('/approval/creation') == false &&
    router.pathname.includes('/approval') == true
      ? true
      : false;

  const isInApprovalCreationPage =
    router.pathname.includes('/approval/creation');

  /*
  const isAssignmentBasePage =
    router.pathname.substring(
      router.pathname.indexOf('/assignment') + '/assignment'.length + 2,
    ) == '' && router.pathname.includes('/assignment')
      ? true
      : false;
*/
  const isAssignmentBasePage =
    router.pathname.includes('/assignment/creation') == false &&
    router.pathname.includes('/assignment') == true
      ? true
      : false;
  const isInAssignmentCreationPage = router.pathname.includes(
    '/assignment/creation',
  );

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
            ? 'minmax(32rem, 3fr) 2fr'
            : isAssignmentBasePage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isDocumentPage
            ? 'calc(var(--box-expanded-length)*0.8) auto'
            : isOrganizationPage
            ? 'calc(var(--box-expanded-length)*1.5) auto'
            : 'auto',
        }}>
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

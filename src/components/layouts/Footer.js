import styled from 'styled-components';
import LimitWidthLayout from '../base/LimitWidthLayout';
import Link from 'next/link';

const Footer = () => {
  return (
    <StyledFooter>
      {/*<LimitWidthLayout padding="36px 0">*/}
      <InnerWrapper>
        <p>TelePIX © 2022</p>
        <TagBox></TagBox>
      </InnerWrapper>
      {/*</LimitWidthLayout>*/}
    </StyledFooter>
  );
};

const TagBox = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
  }

  &&& > div {
    padding-right: 0;
  }
  &&& a {
    font-size: 2.4rem;
    color: white;
    line-height: 3rem;
    //padding-right: 4rem;
  }
  &&& img {
    height: 2rem;
    padding-right: 4rem;
  }
`;

const InnerWrapper = styled.div`
  &&& {
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    text-transform: uppercase;
    color: #979797;

    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
  }

  &&& > p {
    font-size: 2.6rem;
    color: grey;
    line-height: 3rem;
  }
`;

const StyledFooter = styled.footer`
  &&& {
    background-color: #1b1b1b;
    z-index: -2;
  }
`;
export default Footer;

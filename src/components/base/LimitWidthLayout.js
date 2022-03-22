import styled, {css} from 'styled-components';

const LimitWidthLayout = ({
  children,
  bgColor = 'none',
  flex = false,
  padding = '0 20px',
  mPadding = '15%',
  gap = 0,
  bgImageColor = 'none',
  height = '100%',
  className,
  moveRef,
}) => {
  return (
    <LayoutWrapper
      bgColor={bgColor}
      padding={padding}
      mPadding={mPadding}
      bgImageColor={bgImageColor}
      height={height}
      ref={moveRef}>
      <Layout flex={flex} gap={gap} className={className}>
        {children}
      </Layout>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  width: 100%;
  height: ${({height}) => height};
  background-color: ${({bgColor}) => bgColor};
  background-image: ${({bgImageColor}) => bgImageColor};
  padding: ${({mPadding}) => `${mPadding} 15px`};
  @media ${({theme}) => theme.device.mobile} {
    padding: ${({padding}) => padding};
  }
`;

const Layout = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0 0;
  ${({flex}) =>
    flex
      ? css`
          display: flex;
        `
      : css``}
  @media ${({theme}) => theme.device.laptop} {
    ${({flex, gap}) =>
      flex
        ? css`
            display: flex;
            justify-content: center;
            gap: ${gap}px;
          `
        : css``}
    max-width: 1280px;
    margin: 0 auto;
  }
`;

export default LimitWidthLayout;

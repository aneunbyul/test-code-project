import {useRouter} from 'next/router';
import {forwardRef, useEffect, useState} from 'react';
import styled, {css} from 'styled-components';
import LimitWidthLayout from './LimitWidthLayout';

// eslint-disable-next-line react/display-name
const BaseBG = forwardRef(
  ({children, url, padding, height, fixed = true, mPadding, top}, ref) => {
    const [changePosition, setChangePosition] = useState('block');
    const [h, setH] = useState(0);
    const scrolling = () => {
      if (Math.floor(window.pageYOffset) >= top) {
        setChangePosition('fixed');
      } else {
        setChangePosition('block');
      }
    };
    useEffect(() => {
      if (!url) return;
      setH(
        ref.current.getBoundingClientRect().top -
          ref.current.getBoundingClientRect().bottom,
      );
      scrolling();
      document.addEventListener('scroll', scrolling);
      return () => {
        document.removeEventListener('scroll', scrolling);
      };
    }, [top]);

    return (
      <BG
        url={url}
        ref={ref}
        height={height}
        fixed={fixed}
        p={top}
        h={h}
        position={changePosition}>
        <StyledLimit padding={padding} mPadding={mPadding}>
          {children}
        </StyledLimit>
      </BG>
    );
  },
);

const BG = styled.div`
  height: 100vh;
  position: relative;
  z-index: 2;
  ${({position}) =>
    position === 'fixed'
      ? css`
          &:before {
            content: '';
            position: fixed;
            z-index: -1;
            display: block;
            top: 0;
            left: 0px;
            bottom: 0px;
            right: 0px;
            height: ${({h}) => `${Math.abs(parseInt(h))}px`};
            background-image: ${({url}) => url && `url(${url})`};
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center top;
          }
        `
      : css`
          background-image: ${({url}) => url && `url(${url})`};
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center top;
        `};

  @media ${({theme}) => theme.device.mobile} {
    position: relative;
    background-image: ${({url}) => url && `url(${url})`};
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    min-height: ${({height}) => height ?? '100vh'};
    min-height: -webkit-fill-available;
    image-rendering: pixelated;
    width: 100vw;
    height: 100%;
    z-index: 10;
    overflow: hidden;
    background-attachment: ${({fixed}) => (fixed ? 'fixed' : 'initial')};
  }
`;

const StyledLimit = styled(LimitWidthLayout)`
  display: flex;
  align-items: center;
`;

export default BaseBG;

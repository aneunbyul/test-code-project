/* eslint-disable @next/next/link-passhref */
import { nanoid } from "nanoid";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const HeaderNavLink = ( {
  title,
  baseUrl,
  list = [],
  hasQuery = false,
  isLast = false,
  closeShowMobile,
  setCurrentMobileTab,
  currentMobileTab
} ) => {
  const router = useRouter ();
  const [isMobile, setIsMobile] = useState ( false );
  const [showDropdown, setShowDropdown] = useState ( false );
  const [showMobileDropdown, setMobileShowDropdown] = useState ( false );

  const isOnlyHeader = list.length === 1;

  useEffect ( () => {
    currentMobileTab !== title
      ? setMobileShowDropdown ( false )
      : setMobileShowDropdown ( true );
  }, [currentMobileTab] );

  const checkMobileStatus = () => {
    window.innerWidth >= 578 ? setIsMobile ( false ) : setIsMobile ( true );
  };

  useEffect ( () => {
    window.addEventListener ( "resize", checkMobileStatus );
    return () => window.removeEventListener ( "resize", checkMobileStatus );
  }, [] );

  return (
    <NavWrapper
      onMouseEnter={ () => setShowDropdown ( true ) }
      onMouseLeave={ () => setShowDropdown ( false ) }>
      <Nav
        onClick={ () => {
          currentMobileTab === title && setMobileShowDropdown ( ( p ) => !p );
          setCurrentMobileTab ( title );
          isOnlyHeader && closeShowMobile ();
          (!isMobile || isOnlyHeader) &&
          router.push (
            hasQuery
              ? { pathname: baseUrl, query: { current: list[0], index: 0 } }
              : { pathname: `${ baseUrl }/${ list[0] }` }
          );
        } }
        active={ isOnlyHeader ? false : showMobileDropdown }>
        <div>{ title }</div>
        <MobileMoreIconBox active={ showMobileDropdown } onlyOne={ isOnlyHeader }>
          <div>
            <div />
            <div />
          </div>
        </MobileMoreIconBox>
      </Nav>
      { !isOnlyHeader && (
        <DropdownBox
          show={ showDropdown }
          isLast={ isLast }
          mobileShow={ showMobileDropdown }>
          { list.map ( ( item, i ) => {
            return (
              <Link
                scroll
                href={
                  hasQuery
                    ? { pathname: baseUrl, query: { current: item, index: i } }
                    : { pathname: `${ baseUrl }/${ item }` }
                }
                key={ nanoid () }>
                <div
                  onClick={ () => {
                    closeShowMobile ();
                    setMobileShowDropdown ( false );
                    setShowDropdown ( false );
                  } }>
                  { item.toUpperCase () }
                </div>
              </Link>
            );
          } ) }
        </DropdownBox>
      ) }
    </NavWrapper>
  );
};

const MobileMoreIconBox = styled.div`
  position: absolute;
  top: 50%;
  right: 5%;
  transform: translateY(-50%);
  ${ ( { onlyOne } ) =>
  onlyOne &&
  css`
      display: none;
    ` }
  & > div {
    position: relative;
  }
  & > div > div {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background-color: white;
    height: 2px;
    width: 15px;
  }
  & > div > :first-child {
    transition: transform 300ms ease;

    ${ ( { active } ) =>
  active
    ? css`
            transform: translateY(-50%);
          `
    : css`
            transform: translateY(-50%) rotate(90deg);
          ` }
  }
  @media ${ ( { theme } ) => theme.device.mobile } {
    display: none;
  }
`;

const Nav = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  text-align: start;
  padding: 20px;
  cursor: pointer;
  height: 100%;
  width: 100%;
  font-size: 3.2rem;

  ${ ( { active } ) =>
  active &&
  css`
      background-color: #2f2f2f;
    ` }
  @media ${ ( { theme } ) => theme.device.mobile } {
    font-size: 1.6rem;
    background: none;
    padding: 20px 0.5vw;
  }
`;

const NavWrapper = styled.div`
  position: relative;
  overflow: hidden;
  @media ${ ( { theme } ) => theme.device.mobile } {
    overflow: unset;
  }
`;

const DropdownBox = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 300ms linear;
  text-align: start;
  & > * {
    padding: 20px 40px;
    cursor: pointer;
  }
  font-family: 'Montserrat-Thin';
  font-size: 2.8rem;
  ${ ( { mobileShow } ) =>
  mobileShow
    ? css`
          opacity: 1;
          max-height: 500px;
          background-color: #2f2f2f;
        `
    : css`
          opacity: 0;
          max-height: 0;
        ` }
  ${ ( { isLast } ) =>
  isLast
    ? css`
          right: 0;
          transform-origin: right top;
        `
    : css`
          transform-origin: left top;
        ` }
  @media ${ ( { theme } ) => theme.device.mobile } {
    font-family: 'Montserrat';
    transition: all 100ms linear;
    max-height: 500px;
    ${ ( { show } ) =>
  show
    ? css`
            transform: scale(1);
            opacity: 1;
          `
    : css`
            transform: scale(0);
            opacity: 0;
          ` }
    ${ ( { isLast } ) =>
  isLast
    ? css`
            right: 0;
            transform-origin: right top;
          `
    : css`
            transform-origin: left top;
          ` }
    position: absolute;
    background-color: black;
    white-space: nowrap;
    padding: 6px 16px;
    font-size: 1.4rem;
    & > * {
      padding: 10px 0;
    }
  }
`;

export default HeaderNavLink;

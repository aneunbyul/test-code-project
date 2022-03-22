import { useEffect, useRef, useCallback, useState } from "react";
import { useRouter } from "next/router";
import BaseBG from "./BaseBG";
import styled from "styled-components";

const BaseMoveScroll = ( { children, name, url, padding, mPadding } ) => {
  const [top, setTop] = useState ( 0 );

  const router = useRouter ();
  const moveRef = useRef ( null );

  const moveScroll = useCallback ( () => {
    const page = router.query.current;
    if (page !== name?.toUpperCase ()) return;
    moveRef.current.scrollIntoView ( { behavior: "smooth" } );
  }, [router] );

  useEffect ( () => {
    moveScroll ();
  }, [router] );

  useEffect ( () => {
    setTop ( moveRef.current.getBoundingClientRect ().top );
  }, [router] );

  return (
    <BaseBG
      url={ url }
      padding={ padding }
      ref={ moveRef }
      mPadding={ mPadding }
      top={ top }>
      { children }
    </BaseBG>
  );
};

export default BaseMoveScroll;

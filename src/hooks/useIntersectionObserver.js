import { RefObject, useEffect, useCallback, useState } from "react";

const useIntersectionObserver = (
  element,
  threshold = 0.7,
  repeat = false,
  rootMargin = "0px 0px 0px 0px"
) => {
  const [isActive, setIsActive] = useState ( false );

  const handleScroll = useCallback ( ( [entry] ) => {
    if (entry.isIntersecting) {
      setIsActive ( true );
    } else {
      if (repeat) {
        setIsActive ( false );
      }
    }
  }, [] );

  useEffect ( () => {
    const { current } = element;
    if (current) {
      const observer = new IntersectionObserver ( handleScroll, {
        threshold,
        rootMargin
      } );
      observer.observe ( current );
      return () => observer && observer.disconnect ();
    }
  }, [handleScroll] );

  return isActive;
};

export default useIntersectionObserver;

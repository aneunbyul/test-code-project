import { useRef } from "react";

const useScrollBlock = () => {
  const scroll = useRef ( false );
  const blockScroll = () => {
    if (typeof document === "undefined") return;
    // const html = document.documentElement;
    const { body } = document;
    if (!body || !body.style || scroll.current) return;
    scroll.current = true;
    document.body.style.cssText = `position: fixed; top: -${ window.scrollY }px; width: -webkit-fill-available;`;
  };
  const allowScroll = () => {
    if (typeof document === "undefined") return;
    // const html = document.documentElement;
    const { body } = document;
    if (!body || !body.style || !scroll.current) return;
    scroll.current = false;
    const scrollY = document.body.style.top;
    document.body.style.cssText = `position: ""; top: ""; width:"; scroll: none;`;
    window.scrollTo ( 0, parseInt ( scrollY || "0" ) * -1 );
  };

  return [blockScroll, allowScroll];
};

export { useScrollBlock };

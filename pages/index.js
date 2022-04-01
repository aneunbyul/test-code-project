import styled from 'styled-components';
import BaseHead from '../src/components/base/BaseHead';
import MainTop from '../src/components/contents/Main/MainTop';

const Page = () => {
  return (
    <>
      <BaseHead title="Home" />
      <MainTop>
        <p>main</p>
      </MainTop>
    </>
  );
};

export default Page;

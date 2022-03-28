import BaseHead from '../../../src/components/base/BaseHead';
import DocumentNav from '../../../src/components/contents/Document/DocumentNav';
import ExpenditureRequestListForm from '../../../src/components/contents/Document/ExpenditureRequest/ExpenditureRequestListForm';

const Page = () => {
  return (
    <>
      <DocumentNav />
      <ExpenditureRequestListForm />
    </>
  );
};

export default Page;

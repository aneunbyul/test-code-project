import BaseHead from '../../src/components/base/BaseHead';
import AssignmentListForm from '../../src/components/contents/Assignment/List/AssignmentListForm';
import SubNav from '../../src/components/contents/Assignment/AssignmentNav';

const Page = () => {
  return (
    <>
      <SubNav animation={false} />
      <AssignmentListForm />
    </>
  );
};

export default Page;

import BaseHead from '../../src/components/base/BaseHead';
import SubNav from '../../src/components/contents/Approval/ApprovalNav';
import TableForm from '../../src/components/contents/Approval/TableForm/UnfinishedTableForm';

const Page = () => {
  return (
    <>
      <SubNav animation={false} />
      <TableForm />
    </>
  );
};

export default Page;

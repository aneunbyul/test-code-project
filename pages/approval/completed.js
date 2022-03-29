import BaseHead from '../../src/components/base/BaseHead';
import SubNav from '../../src/components/contents/Approval/ApprovalNav';
import TableForm from '../../src/components/contents/Approval/TableForm/CompletedTableForm';

const Page = () => {
  return (
    <>
      <SubNav animation={false} />
      <TableForm />
    </>
  );
};

export default Page;

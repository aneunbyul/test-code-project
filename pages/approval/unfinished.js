import BaseHead from '../../src/components/base/BaseHead';
import ApprovalNav from '../../src/components/contents/Approval/ApprovalNav';
import PersonalDocumentsListForm from '../../src/components/contents/Approval/PersonalDocumentsList/PersonalDocumentsListForm';

const Page = () => {
  return (
    <>
      <ApprovalNav animation={false} />
      <PersonalDocumentsListForm />
    </>
  );
};

export default Page;

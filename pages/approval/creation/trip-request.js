import BaseHead from '../../../src/components/base/BaseHead';
import BusinessTripApplicationForm from '../../../src/components/contents/ApprovalDocuments/BusinessTripApplicationForm';
import ApprovalHeader from '../../../src/components/contents/ApprovalDocuments/ApprovalHeader';

const Page = () => {
  return (
    <>
      <BaseHead title="MAIN" />
      <BusinessTripApplicationForm />
    </>
  );
};

export default Page;

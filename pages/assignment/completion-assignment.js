import BaseHead from '../../src/components/base/BaseHead';
import BusinessTripApplicationForm from '../../src/components/contents/Approval/Form/BusinessTripApplicationForm';
import AssignmentListForm from '../../src/components/contents/Assignment/List/AssignmentListForm';
import AssignmentNav from '../../src/components/contents/Assignment/AssignmentNav';

const Page = () => {
  return (
    <>
      <AssignmentNav animation={false} />
      <AssignmentListForm />
    </>
  );
};

export default Page;

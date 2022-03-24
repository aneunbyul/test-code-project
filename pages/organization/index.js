import BaseHead from '../../src/components/base/BaseHead';
import OrganizationNav from '../../src/components/contents/Organization/OrganizationNav';
import OrganizationTable from '../../src/components/contents/Organization/OrganizationTable';
import EmployeeListForm from '../../src/components/contents/Organization/EmployeeList/EmployeeListForm';

const Page = () => {
  return (
    <>
      <BaseHead title="MAIN" />
      <EmployeeListForm />
    </>
  );
};

export default Page;

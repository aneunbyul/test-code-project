import BaseHead from "../../src/components/base/BaseHead";
import OrganizationNav from "../../src/components/contents/Organization/OrganizationNav";
import OrganizationTable from "../../src/components/contents/Organization/OrganizationTable";

const Page = () => {
  return (
    <>
      <BaseHead title="MAIN" />
      <OrganizationTable />
    </>
  );
};

export default Page;

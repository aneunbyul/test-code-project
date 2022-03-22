import BaseHead from '../../src/components/base/BaseHead';

import {Assignment} from '@material-ui/icons';
import AssignmentTable from '../../src/components/contents/Assignment/AssignmentTable';

const Page = () => {
  return (
    <>
      <BaseHead title="MAIN" />
      <AssignmentTable />
    </>
  );
};
export default Page;

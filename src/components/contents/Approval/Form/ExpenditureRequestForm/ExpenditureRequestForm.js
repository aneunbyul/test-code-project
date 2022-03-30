import * as React from 'react';
import 'simplebar/dist/simplebar.min.css';
import ExpenditureRequestFormSubject from './ExpenditureRequestFormSubject';
import ExpenditureRequestEtc from './ExpenditureRequestEtc';
import ExpenditureAttachedFile from './ExpenditureAttachedFile';
import ExpenditureRequestGrid from './ExpenditureRequestGrid';

import FormDivider from '../../../ReusableContent/FormDivider';

const ExpenditureRequestForm = () => {
  return (
    <div>
      <ExpenditureRequestFormSubject />
      <FormDivider />
      <ExpenditureRequestGrid />
      <FormDivider />
      <ExpenditureRequestEtc />
      <FormDivider />
      <ExpenditureAttachedFile />
    </div>
  );
};

export default ExpenditureRequestForm;

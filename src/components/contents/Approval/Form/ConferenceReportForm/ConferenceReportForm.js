import * as React from 'react';
import 'simplebar/dist/simplebar.min.css';
import ConferenceInfo from './ConferenceInfo';
import ConferenceAttachedFile from './ConferenceAttachedFile';
import FormDivider from '../../../ReusableContent/FormDivider';

const ConferenceReportForm = (props) => {
  return (
    <div>
      <FormDivider text="회의록" />
      <ConferenceInfo disableSelection={props.disableSelection} />
      <FormDivider />
      <ConferenceAttachedFile disableSelection={props.disableSelection} />
    </div>
  );
};

export default ConferenceReportForm;

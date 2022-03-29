import * as React from 'react'
import 'simplebar/dist/simplebar.min.css'
import ExpenditureRequestFormSubject from './ExpenditureRequestFormSubject'
import ExpenditureRequestEtc from './ExpenditureRequestEtc'
import ExpenditureAttachedFile from './ExpenditureAttachedFile'
import ExpenditureRequestGrid from './ExpenditureRequestGrid'

const ExpenditureRequestForm = () => {
  return (
      <div>
        <ExpenditureRequestFormSubject/>
        <hr className="hr-divider"/>
        <ExpenditureRequestGrid/>
        <hr className="hr-divider"/>
        <ExpenditureRequestEtc/>
        <hr className="hr-divider"/>
        <ExpenditureAttachedFile/>
      </div>
  )
}

export default ExpenditureRequestForm

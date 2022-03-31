import BaseHead from '../../../src/components/base/BaseHead'
import ApprovalCreationForm from '../../../src/components/contents/Approval/Form/ApprovalCreationForm'
import ApprovalLineForm from '../../../src/components/contents/Approval/ApprovalLine/ApprovalLineForm'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import {
  isApprovalLineState,
  isDocumentConnectionState,
} from '../../../src/components/recoil/store'
import DocumentConnectionForm
  from '../../../src/components/contents/Approval/DocumentConnection/DocumentConnectionForm'
import { useState, useEffect } from 'react'

const Page = () => {
  const isApprovalLineValue = useRecoilValue ( isApprovalLineState )
  const isDocumentConnectionValue = useRecoilValue ( isDocumentConnectionState )

  const [disableFlag, setDisableFlag] = useState ( false )

  return (
      <>
        <ApprovalCreationForm disableSelection={ disableFlag }/>
        { isApprovalLineValue ? <ApprovalLineForm/> : <></> }
        { isDocumentConnectionValue ? <DocumentConnectionForm/> : <></> }
      </>
  )
}

export default Page

import BaseHead from '../../../src/components/base/BaseHead'
import ApprovalCreationForm from '../../../src/components/contents/Approval/Form/ApprovalCreationForm'
import ApprovalLineForm from '../../../src/components/contents/Approval/ApprovalLine/ApprovalLineForm'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { isApprovalLineState } from '../../../src/components/contents/Approval/ApprovalAtoms'

const Page = () => {

  const isApprovalLineValue = useRecoilValue ( isApprovalLineState )

  return (
      <>
        <ApprovalCreationForm/>
        { isApprovalLineValue ? <ApprovalLineForm/> : <></> }
      </>
  )
}

export default Page

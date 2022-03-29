import * as React from 'react'
import 'simplebar/dist/simplebar.min.css'
import ConferenceInfo from './ConferenceInfo'
import ConferenceAttachedFile from './ConferenceAttachedFile'

const ConferenceReportForm = () => {
  return (
      <div>
        <ConferenceInfo/>
        <ConferenceAttachedFile/>
      </div>
  )
}

export default ConferenceReportForm

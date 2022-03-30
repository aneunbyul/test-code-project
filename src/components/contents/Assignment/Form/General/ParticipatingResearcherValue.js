import * as React from 'react'

const ParticipatingResearcherValue = [
  {
    label: '이름',
    name: 'name',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length < 1) {
        return false
      } else {
        return true
      }
    },
    error: '이름을 입력하세요',
  },
  {
    label: '참여시작일자',
    name: 'start',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length !== 8) {
        return false
      } else {
        return true
      }
    },
    error: 'YYYYMMdd 형식으로 입력하세요',
  },
  {
    label: '참여종료일자',
    name: 'finish',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length !== 8) {
        return false
      } else {
        return true
      }
    },
    error: 'YYYYMMdd 형식으로 입력하세요',
  },

  //select 필요할 경우 아래의 코드 참고

  // {
  //   label: '내부/외부',
  //   selectMessage: 'Select',
  //   name: '참여종료일자',
  //   type: 'select',
  //   options: [
  //     {label: '내부', value: 'inside'},
  //     {label: '외부', value: 'outside'},
  //   ],
  //   validation: (e, a) => {
  //     const name = e.target.value;
  //     if (name.length > 6) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   },
  //   error: 'go home kid',
  // },
]
export default ParticipatingResearcherValue

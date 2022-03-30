import * as React from 'react'

const BusinessExpenseCardValue = [
  {
    label: '카드사',
    name: 'bank',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length < 1) {
        return false
      } else {
        return true
      }
    },
    error: '카드사를 입력하세요',
  },
  {
    label: '카드번호',
    name: 'account',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length < 1) {
        return false
      } else {
        return true
      }
    },
    error: '카드번호를 입력하세요',
  },
  {
    label: '주소유자',
    name: 'name',
    validation: ( e ) => {
      const name = e.target.value
      if (name.length < 1) {
        return false
      } else {
        return true
      }
    },
    error: '주소유자를 입력하세요',
  }

]
export default BusinessExpenseCardValue

import * as React from 'react';

const AssignmentAccountValue = [
  {
    label: '은행명',
    name: 'bank',
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 1) {
        return false;
      } else {
        return true;
      }
    },
    error: '은행명을 입력하세요',
  },
  {
    label: '계좌번호',
    name: 'account',
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 1) {
        return false;
      } else {
        return true;
      }
    },
    error: '계좌번호를 입력하세요',
  },
  {
    label: '입금액',
    name: 'amount',
    validation: (e) => {
      const name = e.target.value;
      if (name.length < 1) {
        return false;
      } else {
        return true;
      }
    },
    error: '계좌번호를 입력하세요',
  },
  {
    label: '입금일자',
    name: 'date',
    validation: (e) => {
      const name = e.target.value;
      if (name.length !== 8) {
        return false;
      } else {
        return true;
      }
    },
    error: 'YYYYMMdd 형식으로 입력하세요',
  },
];
export default AssignmentAccountValue;

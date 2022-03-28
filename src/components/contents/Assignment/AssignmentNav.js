import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import styled from 'styled-components'
import AddBoxIcon from '@mui/icons-material/AddBox'
import Link from 'next/link'
import useScrollFadeIn from '../../../hooks/useScrollFadeIn'

import { useRouter } from 'next/router'
import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import { useEffect, useRef, useState } from 'react'

//components
import SubNavList from '../SubNav/SubNavList'
import ConversionButton from '../ReusableContent/ConversionButton'
import ViewBox from '../ViewBox/ViewBox'
import FilloutIcon from '../Icon/FilloutIcon'
import SubNavHeader from '../SubNav/SubNavHeader'

const AssignmentNav = () => {
  const router = useRouter ()
  const parentLink = '/assignment'

  // sub nav data for base
  const subNavListData_base = [
    {
      name: '진행 과제',
      link: '/progressive-assignment',
      iconName: '',
    },
    {
      name: '완료 과제',
      link: '/completion-assignment',
      iconName: '',
    },
    {
      name: '취소된 과제',
      link: '/canceld',
      iconName: '',
    },
  ]

  // sub nav data for creation
  const subNavListData_creation = [
    {
      name: '진행 과제',
      link: '/unfinished',
      iconName: '',
    },
    {
      name: '완료 과제',
      link: '/completed',
      iconName: '',
    },
    {
      name: '대기 과제',
      link: '/impending',
      iconName: '',
    },
  ]

  /*
  const afterPath = router.pathname.substring(
    router.pathname.indexOf(parentLink) + parentLink.length + 2,
  );
  const isBase =
    afterPath == '' && router.pathname.includes(parentLink) ? true : false;
    */

  // base 화면을 출력해야 하는지 확인하는 hook
  const [isBasePage, setIsBasePage] = React.useState ( true )

  const [selectedBaseIndex, setSelectedBaseIndex] = useState ( -1 )
  const [selectedCreationIndex, setSelectedCreationIndex] = useState ( -1 )

  const handleSelectedBaseIndex = ( selectedIndex ) => {
    setSelectedBaseIndex ( ( selectedBaseIndex ) => selectedIndex )
    console.log ( selectedIndex )
    console.log ( selectedBaseIndex )
  }

  const handleSelectedCreationIndex = ( selectedIndex ) => {
    setSelectedCreationIndex ( ( selectedCreationIndex ) => selectedIndex )
    console.log ( selectedIndex )
    console.log ( selectedCreationIndex )
  }

  const convertToCreationPage = ( linkPath ) => {
    setIsBasePage ( false )
    router.push ( linkPath )
  }

  return (
      <ViewBox>
        { isBasePage && (
            <Box className="sub-nav__container" role="presentation">
              <SubNavHeader
                  text="과제 정보"
                  button={
                    <ConversionButton
                        icon={ <FilloutIcon name="write" size="small" type="outlined"/> }
                        clickAction={ convertToCreationPage }
                        clickActionValue={ parentLink + '/creation' }
                    />
                  }
              />

              <Divider className="line-divider"/>

              <SubNavList
                  handleSelectedIndex={ handleSelectedBaseIndex }
                  selectedIndex={ selectedBaseIndex }
                  parentLink={ parentLink }
                  subNavListData={ subNavListData_base }
                  subNavTitles={ null }></SubNavList>
            </Box>
        ) }
        { !isBasePage && (
            <Box className="sub-nav__container" role="presentation">
              {/*<ConversionButton
            icon={
              <FilloutIcon
                sx={{
                  marginLeft: '-12%',
                }}
                name="toright"
                size="small"
                type="outlined"
              />
            }
            text="돌아가기"
            clickAction={setIsBasePage}
            clickActionValue={true}
          />

          <Divider className="line-divider" />

          <SubNavList
            handleSelectedIndex={handleSelectedCreationIndex}
            selectedIndex={selectedCreationIndex}
            parentLink={parentLink + '/creation'}
            subNavListData={subNavListData_creation}
            subNavTitles={null}></SubNavList>
          */ }
            </Box>
        ) }
      </ViewBox>
  )
}

export default AssignmentNav

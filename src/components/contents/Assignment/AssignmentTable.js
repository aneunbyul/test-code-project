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
import ViewBox from '../ViewBox/ViewBox'

const AssignmentTable = () => {
  const [selectedIndex, setSelectedIndex] = React.useState ( -1 )

  const handleListItemClick = ( event, index ) => {
    setSelectedIndex ( index )
  }

  return <ViewBox></ViewBox>
}

export default AssignmentTable

import * as React from 'react'
import styled from 'styled-components'
import {Container, Typography} from '@mui/material'
import {TreeItem, TreeView} from '@mui/lab'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

const OrganizationBox = () => {
  const company = {
    id: '1',
    name: '텔리픽스 주식회사',
    children: [
      {
        id: '2',
        name: '미래혁신기술센터',
        children: [
          {
            id: '3',
            name: '위성시스템 부문',
            children: [
              {
                id: '4',
                name: '지상체계사업부',
                children: [
                  {
                    id: '5',
                    name: '전자통신연구팀',
                  },
                  {
                    id: '6',
                    name: '전자통신연구팀',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  }

  const data = {
    id: company.id,
    name: company.name,
    children: company.children.length === 0 ? null : company.children,
  }

  console.log(company.children.length)

  const renderTree = (nodes) => (
    <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name}>
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  )

  return (
    <Container sx={{width: '15vw', border: '1px solid white'}}>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon/>}
        defaultExpanded={['1', '2', '3', '4']}
        defaultExpandIcon={<ChevronRightIcon/>}
        sx={{height: '100%', flexGrow: 1, maxWidth: '100%', overflowY: 'auto'}}>
        {renderTree(data)}
      </TreeView>
    </Container>
  )
}

export default OrganizationBox

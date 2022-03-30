import { useState, useCallback, useEffect, useRef, useContext } from 'react'
import Header from '../../layouts/Header'
import Nav from '../../layouts/Nav'
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia, Divider,
  IconButton, List, ListItem, ListItemAvatar, ListItemText,
  Typography
} from '@mui/material'
import * as React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'

const MainCard = ( { value } ) => {
  return (
      <Card sx={ { maxWidth: 345, height: 'max-content' } }>
        <CardHeader
            avatar={
              <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg"/> }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon/>
              </IconButton>
            }
            title={ value + ' 미리보기' }
        />
        <CardContent>
          <List sx={ { width: '100%', maxWidth: 360 } }>
            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="지출요청서"
                  secondary={
                    <React.Fragment>
                      <Typography
                          sx={ { display: 'inline' } }
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                        작성일 : 2022/03/15
                      </Typography>
                      <Typography>
                        { ' 지출요청서_산업통산자원부 과제 평가 지출....' }
                      </Typography>
                    </React.Fragment>
                  }
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="출장복명서"
                  secondary={
                    <React.Fragment>
                      <Typography
                          sx={ { display: 'inline' } }
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                        to Scott, Alex, Jennifer
                      </Typography>
                      { ' — Wish I could come, but I\'m out of town this…' }
                    </React.Fragment>
                  }
              />
            </ListItem>
            <Divider variant="inset" component="li"/>
            <ListItem alignItems="flex-start">
              <ListItemText
                  primary="출장신청서"
                  secondary={
                    <React.Fragment>
                      <Typography
                          sx={ { display: 'inline' } }
                          component="span"
                          variant="body2"
                          color="text.primary"
                      >
                        Sandra Adams
                      </Typography>
                      { ' — Do you have Paris recommendations? Have you ever…' }
                    </React.Fragment>
                  }
              />
            </ListItem>
          </List>
        </CardContent>
        <CardActions sx={ { justifyContent: 'center' } }>
          <Button size="small">확인하기</Button>
        </CardActions>
      </Card>
  )
}

export default MainCard

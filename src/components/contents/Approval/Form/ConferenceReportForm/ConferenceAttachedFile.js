import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import {
  Avatar,
  Box,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import styled from 'styled-components';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

const ConferenceAttachedFile = () => {
  return (
    <>
      <GridContainer container columnSpacing={5}>
        <Box component="h6">※ 카드사용전표, 참석자 명단 필수 첨부 바람</Box>
        <Grid item xs={12}>
          <Box component="h6">첨부목록</Box>
        </Grid>

        <Grid item xs={12}>
          <label htmlFor="contained-button-file">
            <input
              accept="*"
              id="contained-button-file"
              multiple
              type="file"
              style={{display: 'none'}}
            />
            <Button variant="contained" component="span">
              파일추가
            </Button>
          </label>
        </Grid>

        <Grid item xs={12} md={6}>
          <List>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="참석자 명단.pdf" />
            </ListItem>
            <ListItem
              secondaryAction={
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }>
              <ListItemAvatar>
                <Avatar>
                  <FolderIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="카드사용전표.pdf" />
            </ListItem>
          </List>
        </Grid>
      </GridContainer>
    </>
  );
};

const GridContainer = styled(Grid)`
  &&& {
    align-items: center;

    padding: 0 var(--writing-padding);
  }
`;

export default ConferenceAttachedFile;

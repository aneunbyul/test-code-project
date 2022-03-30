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
import DeleteIcon from '@mui/icons-material/Delete';
import FolderIcon from '@mui/icons-material/Folder';

const AttachedFile = (props) => {
  return (
    <>
      <GridContainer container columnSpacing={{xs: 5}}>
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
              <ListItemText primary="세부내용.pdf" />
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
              <ListItemText primary="세부내용2.pdf" />
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

    padding: 0rem var(--writing-padding);
  }
`;

export default AttachedFile;

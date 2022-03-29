import * as React from 'react';
import styled from 'styled-components';
import {
  Avatar,
  Checkbox,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import OrganizationBox from './OrganizationBox';

//components
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const EmployeeListBox = () => {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <List dense sx={{width: '100%', maxWidth: 360}}>
      {[0, 1, 2, 3].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <Checkbox
                edge="start"
                onChange={handleToggle(value)}
                checked={checked.indexOf(value) !== -1}
                inputProps={{'aria-labelledby': labelId}}
              />
            }
            disablePadding>
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={`조직원 이름 ${value + 1}`} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const SliderContainer = styled(SimpleBar)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
  max-width: 360px;
`;
export default EmployeeListBox;

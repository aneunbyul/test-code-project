import * as React from 'react';
import styled from 'styled-components';
import {
  Button,
  Card,
  CardHeader,
  Checkbox,
  Container,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from '@mui/material';
import OrganizationBox from './OrganizationBox';
import EmployeeListBox from './EmployeeListBox';

//components
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const AuthorizedPerson = () => {
  function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1);
  }

  function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1);
  }

  function union(a, b) {
    return [...a, ...not(b, a)];
  }

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

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

  const numberOfChecked = (items) => intersection(checked, items).length;

  const handleToggleAll = (items) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title, items) => (
    <Card sx={{}}>
      <CardHeader
        sx={{px: 2, py: 1}}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list">
        <SliderContainer>
          {items.map((value) => {
            const labelId = `transfer-list-all-item-${value}-label`;

            return (
              <ListItem
                key={value}
                role="listitem"
                button
                onClick={handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`임직원 이름 ${value + 1}`}
                />
              </ListItem>
            );
          })}
          <ListItem />
        </SliderContainer>
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="flex-start">
      <Grid item>{customList('임직원 목록', left)}</Grid>
      <Stack>
        <Stack direction={'row'} alignItems="center">
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Button
                sx={{my: 0.5}}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right">
                &gt;
              </Button>
              <Button
                sx={{my: 0.5}}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left">
                &lt;
              </Button>
            </Grid>
          </Grid>
          <Grid item>{customList('결재자', right)}</Grid>
        </Stack>

        <Stack direction={'row'} alignItems="center">
          <Grid item>
            <Grid container direction="column" alignItems="center">
              <Button
                sx={{my: 0.5}}
                variant="outlined"
                size="small"
                onClick={handleCheckedRight}
                disabled={leftChecked.length === 0}
                aria-label="move selected right">
                &gt;
              </Button>
              <Button
                sx={{my: 0.5}}
                variant="outlined"
                size="small"
                onClick={handleCheckedLeft}
                disabled={rightChecked.length === 0}
                aria-label="move selected left">
                &lt;
              </Button>
            </Grid>
          </Grid>
          <Grid item>{customList('참조자', right)}</Grid>
        </Stack>
      </Stack>
    </Grid>
  );
};

const SliderContainer = styled(SimpleBar)`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default AuthorizedPerson;
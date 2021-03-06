import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
import FormDivider from '../../ReusableContent/FormDivider';

//components
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const AuthorizedPerson = (props) => {
  const customList = (title, items = []) => (
    <Card sx={{}}>
      <CardHeader
        sx={{px: 2, py: 1}}
        avatar={
          <Checkbox
            onClick={props.handleToggleAll(items)}
            checked={
              props.numberOfChecked(items) === items.length &&
              items.length !== 0
            }
            indeterminate={
              props.numberOfChecked(items) !== items.length &&
              props.numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              'aria-label': 'all items selected',
            }}
          />
        }
        title={title}
        subheader={`${props.numberOfChecked(items)}/${items.length} selected`}
      />
      <FormDivider size="compact" />
      <List
        sx={{
          width: '17rem',
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
                onClick={props.handleToggle(value)}>
                <ListItemIcon>
                  <Checkbox
                    checked={props.checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': labelId,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={labelId}
                  primary={`????????? ?????? ${value + 1}`}
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
      <Grid item>{customList('????????? ??????', props.left)}</Grid>

      <Stack direction={'row'} alignItems="center">
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{my: 0.5}}
              variant="outlined"
              size="small"
              onClick={props.handleCheckedRight}
              disabled={props.leftChecked.length === 0}
              aria-label="move selected right">
              &gt;
            </Button>
            <Button
              sx={{my: 0.5}}
              variant="outlined"
              size="small"
              onClick={props.handleCheckedLeft}
              disabled={props.rightChecked.length === 0}
              aria-label="move selected left">
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList('?????????', props.right)}</Grid>
      </Stack>

      <Stack direction={'row'} alignItems="center">
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{my: 0.5}}
              variant="outlined"
              size="small"
              onClick={props.handleCheckedBottom}
              disabled={props.leftChecked.length === 0}
              aria-label="move selected right">
              &gt;
            </Button>
            <Button
              sx={{my: 0.5}}
              variant="outlined"
              size="small"
              onClick={props.handleCheckedLeftFromBottom}
              disabled={props.bottomChecked.length === 0}
              aria-label="move selected left">
              &lt;
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList('?????????', props.bottom)}</Grid>
      </Stack>
    </Grid>
  );
};

AuthorizedPerson.defaultProps = {
  handleToggle: () => {},
  handleToggleAll: () => {},
  numberOfChecked: () => {},
  leftChecked: [],
  rightChecked: [],
  bottomChecked: [],
  topChecked: [],
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

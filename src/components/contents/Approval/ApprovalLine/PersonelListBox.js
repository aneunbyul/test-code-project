import * as React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  Box,
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
import FormDivider from '../../ReusableContent/FormDivider';

//components
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.min.css';

const PersonelListBox = (props) => {
  const customList = (title, items = []) => (
    <Card
      sx={{
        height: '32vh',
        ...(props.borderType == 'leftOff' && {
          borderLeftWidth: '0px !important',
          borderRadius:
            ' 0 var(--global-border-radius) var(--global-border-radius) 0 !important',
        }),
      }}>
      <SliderContainer>
        <CardHeader
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
        <List dense component="div" role="list">
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
                  primary={`임직원 이름 ${value + 1}`}
                />
              </ListItem>
            );
          })}
          <ListItem />
        </List>
      </SliderContainer>
    </Card>
  );

  return <Box>{customList(props.title, props.assignedHooks)}</Box>;
};

PersonelListBox.defaultProps = {
  title: null,
  handleToggle: () => {},
  handleToggleAll: () => {},
  numberOfChecked: () => {},
};

const SliderContainer = styled(SimpleBar)`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export default PersonelListBox;

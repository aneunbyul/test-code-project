import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Avatar from '@mui/material/Avatar';
import {Box} from '@material-ui/core';
import styled from 'styled-components';
import Link from 'next/link';

const Nav = () => {
  return (
    <NavBox>
      <nav aria-label="main nav">
        <List>
          <ListItem>
            <ListItemButton>
              <Link href={'/'}>
                <HomeIcon sidebarId="unique_id" />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton selected={true}>
              <ArticleIcon />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link href={'/approval'}>
                <WorkIcon />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <AccountBoxIcon />
            </ListItemButton>
          </ListItem>
        </List>
        <MyIcon>A</MyIcon>
      </nav>
    </NavBox>
  );
};

const NavBox = styled(Box)({
  position: 'absolute',
  top: '0',
  paddingTop: '4vh',
  backgroundColor: '#2C2C2C',
  width: '72px',
  height: '100vh',
  zIndex: '1',

  '& div': {
    color: 'white',
    marginTop: '20px',
  },
  '& nav': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '& svg': {
    position: 'absolute',
    width: '100%',
    left: '0',
    top: '0',
  },
  '& span': {
    height: '30px',
  },
});

const MyIcon = styled(Avatar)({
  position: 'absolute',
  bottom: '20px',
});
export default Nav;

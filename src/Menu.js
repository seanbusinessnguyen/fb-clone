import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import firebase from "firebase";
import {auth, provider} from "./firebase"

const options = [
  'Home',
  'Login',
  'Profile',
  'Logout',
  'Settings',
];

const ITEM_HEIGHT = 48;

//Using alias of test for prop of testFunction
export default function LongMenu({testFunction: test, appState}) {

  function signOut() {
    firebase.auth().signOut();
  }


  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >

        <MenuItem key='Home' selected={appState === 'newsfeed'} onClick={ () => {
          test('newsfeed')
        }
          }>
          Home
        </MenuItem>
        <MenuItem key='Profile' selected={appState === 'profile'} onClick={ () => {
          test('profile')
        }
          }>
        Profile
        </MenuItem>
        <MenuItem key='Settings' selected={appState === 'settings'} onClick={ () => {
          test('settings')
        }
          }>
        Settings
        </MenuItem>

        <MenuItem key='SignOut' onClick= {signOut}>
          Sign Out
        </MenuItem>
        {/* {options.map((option) => (
          <MenuItem key={option} selected={option === 'Home'} onClick={handleClose}>
            {option}
          </MenuItem>
        ))} */}
      </Menu>
    </div>
  );
}
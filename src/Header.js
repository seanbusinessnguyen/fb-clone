import React, { useState } from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import { Avatar, IconButton } from "@material-ui/core";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import { useStateValue } from './StateProvider';
import {auth} from "./firebase"
import firebase from 'firebase'
import {actionTypes} from "./reducer"

function Header() {

    const [{user}, dispatch] = useStateValue();

    // console.log({user})

    const [appState, setAppState] = useState("login");

   function signOutHeader() {
        firebase.auth().signOut()
        .then(function() {
            dispatch( {
                type: actionTypes.SET_USER,
                user: null,
            })
            })
            .catch(function(error) {
            // An error happened.
            });
    }

    return (
    <div className="header">
        <div className="header__left">
            <div class="menu-wrap">
                <input type="checkbox" className="toggler" />
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><a href="#">Profile</a></li>
                                <li><a href="#">Settings</a></li>
                                <li><a onClick={signOutHeader}>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
            
        <div className="header__center">
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search NewsFeed" type="text" />
            </div>
        </div>


        <div className="header__right">
            <div className="header__info">
                <Avatar src={user.photoURL}/>
                <h4>{user.displayName}</h4>
            </div>

            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>

        </div>
            
    </div>
    
    );
    
}

export default Header

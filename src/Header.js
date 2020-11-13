import React, {useState} from 'react';
import "./Header.css";
import Shawn_white from "./assets/Shawn_white.png"
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useStateValue} from './StateProvider'
import Login from './Login';

function Header() {

    const [{user}, dispatch] = useStateValue();

    const [appState, setAppState] = useState("login");

    return (
        <div className="header">
            <div className="header__left">
                <img id ="header__Shawn_white" src={Shawn_white} alt="hawk"/>

                <div className="header__input">
                    <SearchIcon />
                    <input type="text" placeholder="Search Facebook"/>
                </div>
            </div>

            <div className="header__middle">
                <div className="header__option header__option--active">
                    <HomeIcon fontSize="large" />
                </div>
                <div className="header__option" onClick={() => {
                    setAppState("Flag")
                }}>
                    <FlagIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SubscriptionsOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <StorefrontOutlinedIcon fontSize="large" />
                </div>
                <div className="header__option">
                    <SupervisedUserCircleIcon fontSize="large" />
                </div>
            </div>
            
            {appState==="login" && <div>test login</div>}
            {appState==="Flag" && <div>test flag</div>}

            <div className="header__right">
                <div className="header__info">
                    <Avatar src={user.photoURL}/>
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon/>
                </IconButton>
                
                <IconButton>
                    <ForumIcon/>
                </IconButton>
                
                <IconButton>
                    <NotificationsActiveIcon/>
                </IconButton>

                <IconButton>
                    <ExpandMoreIcon/>
                </IconButton>
            </div>
        </div>
    )
}

export default Header

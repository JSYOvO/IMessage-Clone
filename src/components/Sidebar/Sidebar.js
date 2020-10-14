import React from 'react';
import {Avatar, IconButton} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewOutlinedIcon from '@material-ui/icons/RateReviewOutlined';
import SidebarChat from '../SidebarChat/SidebarChat.js';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice.js';
import { auth } from '../../firebase.js'

const tag = "[Sidebar]";

function Sidebar() {

    const user = useSelector(selectUser);

    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <Avatar onClick={() => auth.signOut()} src={user.photo} className="sidebar__avatar"/>
                <div className="sidebar__input">
                    <SearchIcon/>
                    <input type="text" placeholder="Search"/>
                </div>

                <IconButton variant="outlined" className="sidebar__inputButton">
                    <RateReviewOutlinedIcon/>
                </IconButton>

            </div>
            <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar; 
